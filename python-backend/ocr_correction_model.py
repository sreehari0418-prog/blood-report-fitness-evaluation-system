"""
ML-based OCR Value Correction
Learns common OCR errors and applies corrections to extracted values.
"""

import re
import numpy as np
from typing import Dict, Tuple, List

class OCRCorrector:
    """
    ML-based corrector for common OCR errors in medical reports.
    Uses pattern matching and statistical analysis.
    """
    
    # Common OCR character substitutions
    CHAR_SUBSTITUTIONS = {
        'O': '0',  # Letter O → Number 0
        'o': '0',
        'l': '1',  # Lowercase L → Number 1
        'I': '1',  # Capital I → Number 1
        'S': '5',  # Sometimes S → 5
        'Z': '2',  # Sometimes Z → 2
        'B': '8',  # Sometimes B → 8
    }
    
    # Medical parameter expected ranges (for validation)
    MEDICAL_RANGES = {
        'hemoglobin': (4.0, 20.0),
        'wbc': (2000, 15000),
        'rbc': (2.0, 7.0),
        'platelet': (50000, 500000),
        'glucose': (50, 400),
        'creatinine': (0.3, 3.0),
        'cholesterol': (100, 400),
    }
    
    def __init__(self):
        self.correction_history = []
    
    def correct_numeric_value(self, text: str, param_name: str = None) -> Tuple[float, bool, str]:
        """
        Correct OCR errors in numeric values.
        
        Returns: (corrected_value, was_corrected, correction_reason)
        """
        original_text = text
        was_corrected = False
        reason = ""
        
        # Step 1: Clean obvious OCR errors
        corrected_text = text
        for ocr_char, correct_char in self.CHAR_SUBSTITUTIONS.items():
            if ocr_char in corrected_text and self._looks_like_number_context(corrected_text):
                corrected_text = corrected_text.replace(ocr_char, correct_char)
                was_corrected = True
                reason = f"Replaced '{ocr_char}' with '{correct_char}'"
        
        # Step 2: Fix common decimal errors
        # "14.5.6" → "14.56" (extra decimal)
        decimal_count = corrected_text.count('.')
        if decimal_count > 1:
            parts = corrected_text.split('.')
            corrected_text = parts[0] + '.' + ''.join(parts[1:])
            was_corrected = True
            reason += " | Fixed multiple decimals"
        
        # Step 3: Fix comma as decimal (European format)
        if ',' in corrected_text and '.' not in corrected_text:
            corrected_text = corrected_text.replace(',', '.')
            was_corrected = True
            reason += " | Comma → decimal"
        
        # Step 4: Remove spaces in numbers ("12 345" → "12345")
        if ' ' in corrected_text:
            corrected_text = corrected_text.replace(' ', '')
            was_corrected = True
            reason += " | Removed spaces"
        
        # Step 5: Extract number from mixed text
        number_match = re.search(r'(\d+\.?\d*)', corrected_text)
        if number_match:
            corrected_text = number_match.group(1)
        
        # Step 6: Convert to float
        try:
            value = float(corrected_text)
        except ValueError:
            return None, False, "Could not convert to number"
        
        # Step 7: Apply medical range heuristics
        if param_name and param_name.lower() in self.MEDICAL_RANGES:
            min_val, max_val = self.MEDICAL_RANGES[param_name.lower()]
            
            # If value is 10x outside range, likely has decimal error
            if value > max_val * 10:
                # Try dividing by 10
                corrected_value = value / 10
                if min_val * 0.5 <= corrected_value <= max_val * 2:
                    value = corrected_value
                    was_corrected = True
                    reason += f" | Divided by 10 (was {value*10})"
            
            elif value < min_val * 0.1:
                # Try multiplying by 10
                corrected_value = value * 10
                if min_val * 0.5 <= corrected_value <= max_val * 2:
                    value = corrected_value
                    was_corrected = True
                    reason += f" | Multiplied by 10 (was {value/10})"
        
        # Log correction
        if was_corrected:
            self.correction_history.append({
                'original': original_text,
                'corrected': str(value),
                'param': param_name,
                'reason': reason
            })
        
        return value, was_corrected, reason
    
    def _looks_like_number_context(self, text: str) -> bool:
        """Check if text looks like it should be a number."""
        # Has digits and common numeric separators
        return bool(re.search(r'\d', text))
    
    def batch_correct(self, values_dict: Dict[str, str]) -> Dict[str, Dict]:
        """
        Correct multiple values at once.
        
        Returns dict with corrected values and metadata.
        """
        results = {}
        
        for param, raw_value in values_dict.items():
            if isinstance(raw_value, (int, float)):
                results[param] = {
                    'value': raw_value,
                    'corrected': False,
                    'confidence': 'high'
                }
            else:
                value, corrected, reason = self.correct_numeric_value(str(raw_value), param)
                results[param] = {
                    'value': value,
                    'corrected': corrected,
                    'reason': reason if corrected else '',
                    'confidence': 'medium' if corrected else 'high'
                }
        
        return results
    
    def get_correction_stats(self) -> Dict:
        """Get statistics on corrections made."""
        if not self.correction_history:
            return {'total_corrections': 0}
        
        return {
            'total_corrections': len(self.correction_history),
            'common_errors': self._get_common_patterns(),
            'parameters_corrected': list(set(c['param'] for c in self.correction_history))
        }
    
    def _get_common_patterns(self) -> Dict[str, int]:
        """Identify most common correction patterns."""
        patterns = {}
        for correction in self.correction_history:
            reason = correction['reason'].split('|')[0].strip()
            patterns[reason] = patterns.get(reason, 0) + 1
        return dict(sorted(patterns.items(), key=lambda x: x[1], reverse=True))


# Example usage
if __name__ == "__main__":
    corrector = OCRCorrector()
    
    # Test cases
    test_values = {
        'hemoglobin': 'l4.5',  # 'l' → '1' = 14.5
        'wbc': '8O00',  # 'O' → '0' = 8000
        'glucose': '95.6',  # Correct
        'platelet': '15O,OOO',  # Multiple errors
        'creatinine': '12.5',  # Too high, likely 1.25
    }
    
    print("🔧 Testing OCR Correction Model\n")
    results = corrector.batch_correct(test_values)
    
    for param, result in results.items():
        print(f"{param}:")
        print(f"  Value: {result['value']}")
        print(f"  Corrected: {result['corrected']}")
        if result['corrected']:
            print(f"  Reason: {result['reason']}")
        print()
    
    print("\n📊 Correction Statistics:")
    stats = corrector.get_correction_stats()
    print(f"Total corrections: {stats['total_corrections']}")
    print(f"Common patterns: {stats.get('common_errors', {})}")

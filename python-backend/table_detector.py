"""
Enhanced Table Detection for PDFs
Detects table structure and extracts values based on column alignment.
"""

import re
from typing import List, Dict, Tuple

class TableDetector:
    """
    Intelligent table detection for blood report PDFs.
    """
    
    # Common table header keywords
    HEADER_KEYWORDS = [
        'investigation', 'test', 'parameter', 'result',
        'observed', 'value', 'unit', 'range', 'reference',
        'biological', 'normal', 'method'
    ]
    
    def __init__(self):
        self.detected_headers = []
        self.column_positions = []
    
    def detect_table_start(self, lines: List[str]) -> int:
        """
        Find the line number where the results table starts.
        Returns the index of the header row.
        """
        for i, line in enumerate(lines):
            lower_line = line.lower()
            # Count how many header keywords appear
            keyword_count = sum(1 for kw in self.HEADER_KEYWORDS if kw in lower_line)
            
            # If 2+ keywords appear, likely a header row
            if keyword_count >= 2:
                print(f"✓ Table header detected at line {i}: {line[:50]}...")
                return i
        
        return 0  # Default to start
    
    def detect_column_structure(self, header_line: str) -> List[Dict]:
        """
        Parse header row to detect column positions and names.
        """
        # Split by multiple spaces (typical in fixed-width tables)
        parts = re.split(r'\s{2,}', header_line.strip())
        
        columns = []
        current_pos = 0
        
        for part in parts:
            if not part.strip():
                continue
            
            # Find position in original line
            pos = header_line.index(part, current_pos)
            
            columns.append({
                'name': part.strip(),
                'start_pos': pos,
                'end_pos': pos + len(part),
                'index': len(columns)
            })
            
            current_pos = pos + len(part)
        
        self.column_positions = columns
        print(f"✓ Detected {len(columns)} columns: {[c['name'] for c in columns]}")
        
        return columns
    
    def extract_row_values(self, row: str, columns: List[Dict]) -> Dict[str, str]:
        """
        Extract values from a row based on column positions.
        """
        values = {}
        
        for i, col in enumerate(columns):
            # Get text from column start to next column start (or end)
            start = col['start_pos']
            end = columns[i+1]['start_pos'] if i+1 < len(columns) else len(row)
            
            value = row[start:end].strip()
            
            if value:
                values[col['name']] = value
        
        return values
    
    def parse_table(self, lines: List[str]) -> List[Dict]:
        """
        Main method: Parse entire table from lines of text.
        """
        # 1. Find table start
        header_idx = self.detect_table_start(lines)
        
        if header_idx == 0:
            print("⚠️ No clear table header found, using basic parsing")
            return []
        
        # 2. Parse header structure
        header_line = lines[header_idx]
        columns = self.detect_column_structure(header_line)
        
        if not columns:
            print("⚠️ Could not detect column structure")
            return []
        
        # 3. Extract data rows
        data_rows = []
        for line in lines[header_idx + 1:]:
            if not line.strip():
                continue
            
            # Skip if line looks like a header or footer
            if any(kw in line.lower() for kw in ['page', 'report', 'lab', 'patient']):
                continue
            
            row_data = self.extract_row_values(line, columns)
            
            if row_data:
                data_rows.append(row_data)
        
        print(f"✓ Extracted {len(data_rows)} data rows")
        return data_rows
    
    def map_to_medical_parameters(self, table_data: List[Dict]) -> Dict[str, float]:
        """
        Convert table data to standard medical parameter names.
        """
        # Mapping from various test names to standard keys
        PARAMETER_MAPPING = {
            'hemoglobin': ['hemoglobin', 'hb', 'haemoglobin'],
            'wbc': ['wbc', 'total leukocyte', 'total wbc', 'leukocyte count'],
            'rbc': ['rbc', 'total rbc', 'red blood cell'],
            'platelet': ['platelet', 'plt', 'platelet count'],
            'neutrophil': ['neutrophil', 'neutrophils', 'neut'],
            'lymphocyte': ['lymphocyte', 'lymphocytes', 'lymph'],
            'glucose': ['glucose', 'blood sugar', 'fasting', 'random'],
            'creatinine': ['creatinine', 'creat'],
        }
        
        results = {}
        
        for row in table_data:
            # Find test name column
            test_name = None
            for col_name, value in row.items():
                if any(kw in col_name.lower() for kw in ['test', 'investigation', 'parameter']):
                    test_name = value.lower()
                    break
            
            if not test_name:
                continue
            
            # Find result column
            result_value = None
            for col_name, value in row.items():
                if any(kw in col_name.lower() for kw in ['result', 'value', 'observed']):
                    result_value = value
                    break
            
            if not result_value:
                continue
            
            # Map to standard parameter
            for param_key, synonyms in PARAMETER_MAPPING.items():
                if any(syn in test_name for syn in synonyms):
                    # Extract numeric value
                    numbers = re.findall(r'\d+\.?\d*', result_value)
                    if numbers:
                        results[param_key] = float(numbers[0])
                    break
        
        return results


# Example usage
if __name__ == "__main__":
    # Simulated PDF text
    sample_text = """
    Patient Name: John Doe
    Age: 45 Years
    
    HEMATOLOGY
    Investigation                      Result      Unit        Reference Range
    -------------------------------------------------------------------------
    Hemoglobin                         14.5        g/dL        13.0-17.0
    Total Leukocyte Count (WBC)        8500        cells/µL    4000-11000
    RBC Count                          5.2         million/µL  4.5-5.5
    Platelet Count                     250000      cells/µL    150000-400000
    Neutrophils                        65          %           40-70
    """
    
    lines = sample_text.split('\n')
    
    detector = TableDetector()
    table_data = detector.parse_table(lines)
    
    print("\n📋 Extracted Table Data:")
    for row in table_data:
        print(row)
    
    print("\n🩺 Mapped Medical Parameters:")
    medical_params = detector.map_to_medical_parameters(table_data)
    for param, value in medical_params.items():
        print(f"  {param}: {value}")

"""
Intelligent Chat Service for Blood Fitness App
Provides context-aware, personalized health responses
"""

import json
import os
from datetime import datetime
import re
import google.generativeai as genai

# Hardcoded fallback for Render free tier limits
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "AIzaSyAoVO1hSasH1tjDV-hAk5xVyX86jG6DPoE")

class HealthChatBot:
    def __init__(self, knowledge_base_path='knowledge_base.json'):
        """Initialize the chatbot with medical knowledge base and Gemini"""
        self.knowledge_base = self._load_knowledge_base(knowledge_base_path)
        self.conversation_context = []
        self._setup_gemini()

    def _setup_gemini(self):
        """Configure Gemini AI"""
        try:
            genai.configure(api_key=GEMINI_API_KEY)
            self.model = genai.GenerativeModel('gemini-1.5-flash')
            self.ai_enabled = True
            print("✅ Gemini AI Chatbot initialized")
        except Exception as e:
            print(f"⚠️ Gemini AI initialization failed: {e}")
            self.ai_enabled = False
        
    def _load_knowledge_base(self, path):
        """Load the medical knowledge base"""
        try:
            with open(path, 'r') as f:
                return json.load(f)
        except Exception as e:
            print(f"Warning: Could not load knowledge base: {e}")
            return {}
    
    def get_response(self, query, user_profile=None, blood_reports=None, conversation_history=None):
        """
        Generate intelligent response based on query and context
        """
        query_lower = query.lower().strip()
        
        # Update conversation context
        if conversation_history:
            self.conversation_context = conversation_history[-5:]
        
        # Try AI Response first if enabled
        if self.ai_enabled:
            ai_res = self._get_ai_response(query, user_profile, blood_reports)
            if ai_res:
                return ai_res

        # FALLBACK: Original Rule-Based Logic
        entities = self._extract_entities(query_lower)
        intent = self._determine_intent(query_lower, entities)
        
        return self._generate_response(
            intent=intent,
            query=query_lower,
            entities=entities,
            user_profile=user_profile,
            blood_reports=blood_reports
        )

    def _get_ai_response(self, query, user_profile, blood_reports):
        """Use Gemini to generate a response"""
        try:
            # Build Context
            profile_str = json.dumps(user_profile, indent=2) if user_profile else "Not provided"
            
            reports_summary = ""
            if blood_reports:
                for r in blood_reports[:2]: # Last 2 reports
                    reports_summary += f"Report Date: {r.get('date')}\nResults: {json.dumps(r.get('results'), indent=2)}\n\n"
            else:
                reports_summary = "No reports uploaded."

            history_str = ""
            for msg in self.conversation_context:
                history_str += f"{msg['sender']}: {msg['text']}\n"

            prompt = f"""
You are an expert AI Health & Fitness Assistant. Your goal is to provide accurate, helpful, and encouraging advice.

CONTEXT:
User Profile: {profile_str}
Blood Reports: {reports_summary}
Recent History:
{history_str}

USER QUESTION: {query}

INSTRUCTIONS:
1. Use the provided blood reports and profile to give PERSONALIZED advice.
2. If the user asks general health or natural questions (e.g., "how to sleep better", "benefits of eggs"), answer them comprehensively using your medical knowledge.
3. Be professional but empathetic.
4. IMPORTANT: Always include a small disclaimer at the end that you are an AI and they should consult a doctor.
5. Use markdown formatting (bold, bullet points) for readability.
6. Keep the response concise but informative.
7. Return your response in a clear text format.

Your Response:"""

            response = self.model.generate_content(prompt)
            return {
                'text': response.text,
                'confidence': 0.95,
                'intent': 'generative_ai',
                'method': 'gemini_pro'
            }
        except Exception as e:
            print(f"❌ Gemini generation failed: {e}")
            return None
    
    def _extract_entities(self, query):
        """Extract medical entities from query"""
        entities = {
            'parameters': [],
            'diseases': [],
            'foods': [],
            'intents': []
        }
        
        # Extract blood parameters
        for param_key in self.knowledge_base.get('blood_parameters', {}).keys():
            param_name = self.knowledge_base['blood_parameters'][param_key]['name'].lower()
            if param_key in query or param_name in query:
                entities['parameters'].append(param_key)
        
        # Common parameter aliases
        aliases = {
            'sugar': 'glucose',
            'blood sugar': 'glucose',
            'hb': 'hemoglobin',
            'thyroid': 'tsh',
            'cholesterol': 'cholesterol_total',
            'good cholesterol': 'hdl',
            'bad cholesterol': 'ldl'
        }
        for alias, param in aliases.items():
            if alias in query and param not in entities['parameters']:
                entities['parameters'].append(param)
        
        # Extract diseases
        for disease_key in self.knowledge_base.get('diseases', {}).keys():
            if disease_key in query or disease_key.replace('_', ' ') in query:
                entities['diseases'].append(disease_key)
        
        # Extract food items
        for food_key in self.knowledge_base.get('nutrition_database', {}).keys():
            food_name = food_key.replace('_', ' ')
            if food_name in query or food_key in query:
                entities['foods'].append(food_key)
        
        return entities
    
    def _determine_intent(self, query, entities):
        """Determine user's intent"""
        # Report analysis intent
        if any(word in query for word in ['analyze', 'analysis', 'summary', 'my report', 'latest report', 'check report']):
            return 'analyze_report'
        
        # Specific parameter query
        if entities['parameters'] and any(word in query for word in ['my', 'is my', 'what is', 'how is', 'level', 'value']):
            return 'parameter_query'
        
        # Trend analysis
        if any(word in query for word in ['trend', 'changed', 'over time', 'progress', 'improving', 'worse']):
            return 'trend_analysis'
        
        # Diet recommendations
        if any(word in query for word in ['diet', 'food', 'eat', 'meal', 'nutrition', 'recipe']):
            if entities['diseases']:
                return 'disease_diet'
            elif entities['parameters']:
                return 'parameter_diet'
            return 'general_diet'
        
        # Exercise recommendations
        if any(word in query for word in ['exercise', 'workout', 'gym', 'fitness', 'muscle', 'weight loss', 'cardio']):
            return 'exercise_recommendation'
        
        # Nutrition info
        if entities['foods'] or any(word in query for word in ['protein in', 'calories in', 'nutrients in', 'nutrition of']):
            return 'nutrition_info'
        
        # Disease management
        if entities['diseases']:
            return 'disease_management'
        
        # Profile query
        if any(word in query for word in ['my profile', 'about me', 'my health', 'my details']):
            return 'profile_query'
        
        # General health
        return 'general_health'
    
    def _generate_response(self, intent, query, entities, user_profile, blood_reports):
        """Generate response based on intent and context"""
        
        # Analyze blood report
        if intent == 'analyze_report':
            return self._analyze_report(blood_reports, user_profile)
        
        # Specific parameter query
        if intent == 'parameter_query' and entities['parameters']:
            return self._parameter_query(entities['parameters'][0], blood_reports, user_profile)
        
        # Trend analysis
        if intent == 'trend_analysis':
            return self._trend_analysis(entities['parameters'], blood_reports)
        
        # Diet for disease
        if intent == 'disease_diet' and entities['diseases']:
            return self._disease_diet_plan(entities['diseases'][0], user_profile)
        
        # Diet for parameter
        if intent == 'parameter_diet' and entities['parameters']:
            return self._parameter_diet(entities['parameters'][0], user_profile)
        
        # Exercise recommendations
        if intent == 'exercise_recommendation':
            return self._exercise_recommendations(query, user_profile, blood_reports)
        
        # Nutrition info
        if intent == 'nutrition_info' and entities['foods']:
            return self._nutrition_info(entities['foods'][0])
        
        # Disease management
        if intent == 'disease_management' and entities['diseases']:
            return self._disease_management(entities['diseases'][0])
        
        # Profile query
        if intent == 'profile_query':
            return self._profile_summary(user_profile)
        
        # General health advice
        return self._general_health_response(query, user_profile)
    
    def _analyze_report(self, blood_reports, user_profile):
        """Analyze latest blood report"""
        if not blood_reports or len(blood_reports) == 0:
            return {
                'text': self.knowledge_base.get('conversational_templates', {}).get('no_reports', 
                    "I don't see any blood reports uploaded yet. Upload one in the Blood Evaluation section!"),
                'confidence': 1.0,
                'intent': 'analyze_report'
            }
        
        latest_report = blood_reports[0]
        report_date = latest_report.get('date', 'Unknown date')
        results = latest_report.get('results', [])
        
        # Check for abnormalities
        abnormal = [r for r in results if r.get('status', '').lower() != 'normal']
        
        if not abnormal:
            return {
                'text': f"Great news! Your latest report from {report_date} shows all parameters within normal range. Keep up the excellent work! 🌟",
                'confidence': 1.0,
                'intent': 'analyze_report'
            }
        
        # Detailed analysis
        analysis_parts = [f"📊 **Analysis of your report from {report_date}:**\n"]
        
        for item in abnormal:
            param = item.get('parameter', '')
            value = item.get('value', '')
            unit = item.get('unit', '')
            status = item.get('status', '')
            
            analysis_parts.append(f"\n🔹 **{param}**: {value} {unit} ({status})")
            
            # Add specific recommendations
            param_key = self._find_parameter_key(param)
            if param_key:
                param_info = self.knowledge_base['blood_parameters'].get(param_key, {})
                if status.lower() == 'low' and 'low_recommendations' in param_info:
                    recs = param_info['low_recommendations']
                    if 'diet' in recs:
                        analysis_parts.append(f"   💡 Recommended foods: {', '.join(recs['diet'][:3])}")
                elif status.lower() == 'high' and 'high_recommendations' in param_info:
                    recs = param_info['high_recommendations']
                    if 'diet' in recs:
                        diet_advice = recs['diet'] if isinstance(recs['diet'], str) else ', '.join(recs['diet'][:3])
                        analysis_parts.append(f"   💡 Advice: {diet_advice}")
        
        analysis_parts.append(f"\n\n{self.knowledge_base['conversational_templates']['disclaimer']}")
        
        return {
            'text': '\n'.join(analysis_parts),
            'confidence': 0.95,
            'intent': 'analyze_report',
            'abnormal_count': len(abnormal)
        }
    
    def _parameter_query(self, param_key, blood_reports, user_profile):
        """Answer query about specific blood parameter"""
        if not blood_reports or len(blood_reports) == 0:
            param_info = self.knowledge_base['blood_parameters'].get(param_key, {})
            param_name = param_info.get('name', param_key)
            return {
                'text': f"I don't have any {param_name} data from your reports yet. Upload a blood report to track this parameter!",
                'confidence': 0.8,
                'intent': 'parameter_query'
            }
        
        latest_report = blood_reports[0]
        results = latest_report.get('results', [])
        
        # Find the parameter
        param_info = self.knowledge_base['blood_parameters'].get(param_key, {})
        param_name = param_info.get('name', param_key)
        
        found_result = None
        for result in results:
            if param_key in result.get('parameter', '').lower() or param_name.lower() in result.get('parameter', '').lower():
                found_result = result
                break
        
        if not found_result:
            return {
                'text': f"I couldn't find {param_name} in your latest report. It might not have been tested.",
                'confidence': 0.7,
                'intent': 'parameter_query'
            }
        
        value = found_result.get('value', '')
        unit = found_result.get('unit', '')
        status = found_result.get('status', 'Normal')
        
        response_text = f"📊 Your latest **{param_name}** is **{value} {unit}**, which is **{status}**.\n\n"
        
        # Add context and recommendations
        gender = user_profile.get('gender', 'general').lower() if user_profile else 'general'
        normal_ranges = param_info.get('normal_ranges', {})
        
        if gender in normal_ranges:
            range_info = normal_ranges[gender]
            response_text += f"Normal range for {gender}s: {range_info['min']}-{range_info['max']} {unit}\n\n"
        
        # Recommendations based on status
        if status.lower() == 'low' and 'low_recommendations' in param_info:
            recs = param_info['low_recommendations']
            response_text += f"💡 **Recommendations to improve:**\n"
            if 'diet' in recs:
                response_text += f"🍽️ Foods: {', '.join(recs['diet'][:5])}\n"
            if 'lifestyle' in recs:
                response_text += f"🌟 Lifestyle: {recs['lifestyle']}\n"
        elif status.lower() == 'high' and 'high_recommendations' in param_info:
            recs = param_info['high_recommendations']
            response_text += f"💡 **Recommendations:**\n"
            if 'diet' in recs:
                diet_text = recs['diet'] if isinstance(recs['diet'], str) else ', '.join(recs['diet'][:5])
                response_text += f"🍽️ {diet_text}\n"
            if 'lifestyle' in recs:
                response_text += f"🌟 {recs['lifestyle']}\n"
        
        return {
            'text': response_text,
            'confidence': 0.95,
            'intent': 'parameter_query',
            'parameter': param_name,
            'value': value,
            'status': status
        }
    
    def _disease_diet_plan(self, disease_key, user_profile):
        """Provide diet plan for specific disease"""
        disease_info = self.knowledge_base['diseases'].get(disease_key, {})
        
        if not disease_info:
            return {
                'text': f"I don't have specific dietary guidelines for {disease_key} yet. Please consult your doctor for personalized advice.",
                'confidence': 0.5,
                'intent': 'disease_diet'
            }
        
        disease_name = disease_info.get('name', disease_key)
        diet_guidelines = disease_info.get('dietary_guidelines', {})
        
        response_text = f"🍽️ **Diet Plan for {disease_name}**\n\n"
        
        if 'eat' in diet_guidelines:
            response_text += "✅ **Foods to Include:**\n"
            for item in diet_guidelines['eat']:
                response_text += f"• {item}\n"
            response_text += "\n"
        
        if 'avoid' in diet_guidelines:
            response_text += "❌ **Foods to Avoid:**\n"
            for item in diet_guidelines['avoid']:
                response_text += f"• {item}\n"
            response_text += "\n"
        
        if 'meal_timing' in diet_guidelines:
            response_text += f"⏰ **Meal Timing:** {diet_guidelines['meal_timing']}\n\n"
        
        # Check for allergies
        if user_profile and user_profile.get('allergies'):
            response_text += f"⚠️ Note: Please avoid foods you're allergic to: {user_profile['allergies']}\n\n"
        
        response_text += self.knowledge_base['conversational_templates']['disclaimer']
        
        return {
            'text': response_text,
            'confidence': 0.9,
            'intent': 'disease_diet',
            'disease': disease_name
        }
    
    def _parameter_diet(self, param_key, user_profile):
        """Provide diet recommendations for specific blood parameter"""
        param_info = self.knowledge_base['blood_parameters'].get(param_key, {})
        param_name = param_info.get('name', param_key)
        
        response_text = f"🍽️ **Diet Tips for Healthy {param_name}:**\n\n"
        
        if 'low_recommendations' in param_info and 'diet' in param_info['low_recommendations']:
            response_text += "To **increase** levels:\n"
            for food in param_info['low_recommendations']['diet']:
                response_text += f"• {food}\n"
            response_text += "\n"
        
        if 'high_recommendations' in param_info and 'diet' in param_info['high_recommendations']:
            recs = param_info['high_recommendations']['diet']
            if isinstance(recs, list):
                response_text += "To **decrease** levels:\n"
                for food in recs:
                    response_text += f"• {food}\n"
            else:
                response_text += f"{recs}\n"
        
        return {
            'text': response_text,
            'confidence': 0.85,
            'intent': 'parameter_diet'
        }
    
    def _exercise_recommendations(self, query, user_profile, blood_reports):
        """Provide exercise recommendations"""
        # Determine goal
        if 'muscle' in query or 'build' in query or 'gain' in query:
            goal = 'muscle_building'
        elif 'lose' in query or 'weight loss' in query or 'fat' in query:
            goal = 'weight_loss'
        else:
            goal = 'general_fitness'
        
        fitness_info = self.knowledge_base['fitness_guidelines'].get(goal, {})
        
        response_text = f"💪 **{goal.replace('_', ' ').title()} Plan:**\n\n"
        
        if 'diet' in fitness_info:
            response_text += "🍽️ **Nutrition:**\n"
            for key, value in fitness_info['diet'].items():
                response_text += f"• {key.replace('_', ' ').title()}: {value}\n"
            response_text += "\n"
        
        if 'workout' in fitness_info:
            response_text += "🏋️ **Workout:**\n"
            for key, value in fitness_info['workout'].items():
                response_text += f"• {key.replace('_', ' ').title()}: {value}\n"
        
        # Check for contraindications based on blood report
        if blood_reports and len(blood_reports) > 0:
            response_text += "\n⚠️ Based on your health data, always start gradually and consult your doctor if you have any concerns."
        
        return {
            'text': response_text,
            'confidence': 0.9,
            'intent': 'exercise_recommendation',
            'goal': goal
        }
    
    def _nutrition_info(self, food_key):
        """Provide nutrition information for food"""
        food_info = self.knowledge_base['nutrition_database'].get(food_key, {})
        
        if not food_info:
            return {
                'text': f"I don't have nutrition data for {food_key.replace('_', ' ')} yet. Try asking about common foods like chicken, eggs, or oats!",
                'confidence': 0.6,
                'intent': 'nutrition_info'
            }
        
        food_name = food_key.replace('_', ' ').title()
        
        response_text = f"🥗 **Nutrition Facts: {food_name}**\n\n"
        response_text += f"📏 Serving: {food_info.get('serving', '100g')}\n\n"
        response_text += f"• Protein: {food_info.get('protein', 0)}g\n"
        response_text += f"• Carbs: {food_info.get('carbs', 0)}g\n"
        response_text += f"• Fat: {food_info.get('fat', 0)}g\n"
        response_text += f"• Calories: {food_info.get('calories', 0)} kcal\n"
        
        # Additional nutrients
        if 'fiber' in food_info:
            response_text += f"• Fiber: {food_info['fiber']}\n"
        if 'iron' in food_info:
            response_text += f"• Iron: {food_info['iron']}\n"
        if 'omega3' in food_info:
            response_text += f"• Omega-3: {food_info['omega3']}\n"
        
        return {
            'text': response_text,
            'confidence': 1.0,
            'intent': 'nutrition_info',
            'food': food_name
        }
    
    def _disease_management(self, disease_key):
        """Provide disease management information"""
        disease_info = self.knowledge_base['diseases'].get(disease_key, {})
        disease_name = disease_info.get('name', disease_key.replace('_', ' ').title())
        
        response_text = f"🏥 **Managing {disease_name}:**\n\n"
        
        if 'dietary_guidelines' in disease_info:
            response_text += "🍽️ **Diet Guidelines:**\n"
            diet = disease_info['dietary_guidelines']
            if 'eat' in diet:
                response_text += f"✅ Include: {', '.join(diet['eat'][:3])}\n"
            if 'avoid' in diet:
                response_text += f"❌ Avoid: {', '.join(diet['avoid'][:3])}\n"
            response_text += "\n"
        
        if 'exercise_guidelines' in disease_info:
            response_text += "💪 **Exercise:**\n"
            ex = disease_info['exercise_guidelines']
            if 'recommended' in ex:
                response_text += f"• {', '.join(ex['recommended'])}\n"
            response_text += "\n"
        
        if 'monitoring' in disease_info:
            response_text += f"📊 **Monitoring:** {disease_info['monitoring']}\n\n"
        
        response_text += self.knowledge_base['conversational_templates']['disclaimer']
        
        return {
            'text': response_text,
            'confidence': 0.9,
            'intent': 'disease_management'
        }
    
    def _profile_summary(self, user_profile):
        """Provide user profile summary"""
        if not user_profile:
            return {
                'text': "Please complete your profile setup to get personalized health insights!",
                'confidence': 0.8,
                'intent': 'profile_query'
            }
        
        age = user_profile.get('age', 'Not specified')
        gender = user_profile.get('gender', 'Not specified')
        weight = user_profile.get('weight', 'Not specified')
        blood_group = user_profile.get('bloodGroup', 'Not specified')
        diseases = user_profile.get('diseases', 'None')
        allergies = user_profile.get('allergies', 'None')
        
        response_text = f"👤 **Your Health Profile:**\n\n"
        response_text += f"• Age: {age}\n"
        response_text += f"• Gender: {gender}\n"
        response_text += f"• Weight: {weight} kg\n"
        response_text += f"• Blood Group: {blood_group}\n"
        response_text += f"• Known Conditions: {diseases}\n"
        response_text += f"• Allergies: {allergies}\n"
        
        return {
            'text': response_text,
            'confidence': 1.0,
            'intent': 'profile_query'
        }
    
    def _trend_analysis(self, parameters, blood_reports):
        """Analyze trends in blood parameters over time"""
        if not blood_reports or len(blood_reports) < 2:
            return {
                'text': "I need at least 2 blood reports to analyze trends. Upload more reports to track your progress over time!",
                'confidence': 0.7,
                'intent': 'trend_analysis'
            }
        
        # This is a placeholder - full trend analysis would require time-series data
        return {
            'text': f"📈 Trend analysis shows you have {len(blood_reports)} reports on file. To see detailed trends, I'd compare values over time. This feature will be enhanced with visual charts soon!",
            'confidence': 0.6,
            'intent': 'trend_analysis'
        }
    
    def _general_health_response(self, query, user_profile):
        """Provide general health advice"""
        # Simple keyword matching for common questions
        if 'sleep' in query:
            return {
                'text': "💤 **Sleep is crucial for health!**\n\nAim for 7-9 hours of quality sleep. Tips:\n• Maintain consistent sleep schedule\n• Avoid screens 1 hour before bed\n• Keep bedroom cool and dark\n• Limit caffeine after 2 PM",
                'confidence': 0.85,
                'intent': 'general_health'
            }
        
        if 'water' in query or 'hydration' in query:
            weight = user_profile.get('weight', 70) if user_profile else 70
            water_intake = round(weight * 0.033, 1)  # 33ml per kg
            return {
                'text': f"💧 **Stay Hydrated!**\n\nBased on your weight, aim for {water_intake}L of water daily.\n\nBenefits:\n• Improved metabolism\n• Better skin\n• Enhanced athletic performance\n• Kidney health",
                'confidence': 0.9,
                'intent': 'general_health'
            }
        
        # Default response
        return {
            'text': "I'm here to help with health questions! Try asking:\n• 'Analyze my blood report'\n• 'What foods boost hemoglobin?'\n• 'Show me a muscle building plan'\n• 'Nutrition info for chicken'",
            'confidence': 0.5,
            'intent': 'general_health'
        }
    
    def _find_parameter_key(self, parameter_name):
        """Find parameter key from parameter name"""
        param_name_lower = parameter_name.lower()
        for key, value in self.knowledge_base.get('blood_parameters', {}).items():
            if key in param_name_lower or value.get('name', '').lower() in param_name_lower:
                return key
        return None


# Singleton instance
_chatbot = None

def get_chatbot():
    """Get or create chatbot instance"""
    global _chatbot
    if _chatbot is None:
        kb_path = os.path.join(os.path.dirname(__file__), 'knowledge_base.json')
        _chatbot = HealthChatBot(kb_path)
    return _chatbot

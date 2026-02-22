
import sys
import os
import json

# Add the current directory to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

try:
    from chat_service import get_chatbot
    
    bot = get_chatbot()
    test_queries = [
        "What is creatinine and why does it increase?",
        "How can I reduce my creatinine level naturally?",
        "What is the normal blood sugar level?",
        "Tell me about heart health"
    ]
    
    print("--- Diagnostic Start ---")
    print(f"AI Enabled: {bot.ai_enabled}")
    print(f"Knowledge Base Keys: {list(bot.knowledge_base.keys())}")
    
    for query in test_queries:
        print(f"\nQuery: {query}")
        response = bot.get_response(query)
        if response:
            print(f"Response Intent: {response.get('intent')}")
            print(f"Response Method: {response.get('method')}")
            print(f"Response Text Snippet: {response.get('text')[:100]}...")
        else:
            print("Response: NONE")
            
    print("\n--- Diagnostic End ---")

except Exception as e:
    print(f"CRITICAL ERROR: {e}")
    import traceback
    traceback.print_exc()

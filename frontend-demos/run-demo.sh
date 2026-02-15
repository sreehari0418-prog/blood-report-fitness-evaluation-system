#!/bin/bash

# Blood & Fit Frontend Demo Runner
# Simple script to run demos in terminal

echo "🩸 Blood & Fit - Frontend Demo Runner"
echo "======================================"
echo ""
echo "Choose a demo to run:"
echo ""
echo "0. Master Showcase (index.html)"
echo "1. Login System"
echo "2. Dashboard"
echo "3. BMI Calculator"
echo "4. Blood Evaluation"
echo "5. Home Workout"
echo "6. AI Health Bot"
echo "7. Specialized Diet"
echo "8. Start HTTP Server (Professional)"
echo "9. Open All Demos"
echo ""
read -p "Enter your choice (0-9): " choice

case $choice in
    0)
        echo "Opening Master Showcase..."
        open index.html
        ;;
    1)
        echo "Opening Login Demo..."
        open 01-login-demo.html
        ;;
    2)
        echo "Opening Dashboard Demo..."
        open 02-dashboard-demo.html
        ;;
    3)
        echo "Opening BMI Calculator Demo..."
        open 03-bmi-calculator-demo.html
        ;;
    4)
        echo "Opening Blood Evaluation Demo..."
        open 04-blood-evaluation-demo.html
        ;;
    5)
        echo "Opening Home Workout Demo..."
        open 05-home-workout-demo.html
        ;;
    6)
        echo "Opening AI Chat Demo..."
        open 06-ai-chat-demo.html
        ;;
    7)
        echo "Opening Diet Plan Demo..."
        open 07-diet-plan-demo.html
        ;;
    8)
        echo "Starting HTTP Server on port 8000..."
        echo "Open browser to: http://localhost:8000"
        python3 -m http.server 8000
        ;;
    9)
        echo "Opening all demos..."
        open index.html
        sleep 1
        open 01-login-demo.html
        sleep 1
        open 02-dashboard-demo.html
        sleep 1
        open 03-bmi-calculator-demo.html
        sleep 1
        open 04-blood-evaluation-demo.html
        sleep 1
        open 05-home-workout-demo.html
        sleep 1
        open 06-ai-chat-demo.html
        sleep 1
        open 07-diet-plan-demo.html
        ;;
    *)
        echo "Invalid choice! Please run again and choose 0-9."
        exit 1
        ;;
esac

echo ""
echo "✅ Demo opened successfully!"
echo "💡 Tip: Press F12 in browser to see console logs"

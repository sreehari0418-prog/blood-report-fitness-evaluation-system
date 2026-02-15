#!/bin/bash

# Function to kill processes on exit
cleanup() {
    echo "Stopping servers..."
    kill $BACKEND_PID
    kill $FRONTEND_PID
    exit
}

# Trap Ctrl+C (SIGINT)
trap cleanup SIGINT

echo "🚀 Starting Blood Report App..."

# Kill any existing processes on ports 5001 (Backend) and 5173 (Frontend)
echo "🧹 Cleaning up old processes..."
lsof -t -i:5001 | xargs kill -9 2>/dev/null || true
lsof -t -i:5173 | xargs kill -9 2>/dev/null || true

# Start Backend
echo "Starting Python Backend..."
cd python-backend
python3 unified_api.py &
BACKEND_PID=$!
cd ..

# Wait a moment for backend to initialize
sleep 2

# Start Frontend
echo "Starting React Frontend..."
npm run dev &
FRONTEND_PID=$!

echo "✅ App is running! Press Ctrl+C to stop both servers."

# Keep script running
wait

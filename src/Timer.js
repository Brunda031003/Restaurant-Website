import { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;
        
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        }

        // Cleanup function
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning]); // Only re-run effect when isRunning changes

    return (
        <div className="timer">
            <h1>⏱ Stopwatch</h1>
            <div className="time-display">{seconds} seconds</div>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={() => setSeconds(0)}>Reset</button>
        </div>
    );
}

export default Timer;
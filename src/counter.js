import { useState } from "react";
import './counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        if (count < 5) {
            setCount(count + 1);
        }
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div className="counter">
            <h1>Rate Us ✨</h1>
            <div className="counter-controls">
                <button onClick={decrement} disabled={count === 0}>-</button>
                <span className="count">{count}</span>
                <button onClick={increment} disabled={count === 5}>+</button>
            </div>
        </div>
    );
}

export default Counter;

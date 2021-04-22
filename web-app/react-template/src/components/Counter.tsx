import React from 'react';
import "./Counter.css"

const Counter: React.FC = () => {
    const count = 5;

    return <div className="counter-wrapper">
        <div className="counter">
            <button className="counter-btn">
                {"<"}
            </button>
            <div className="counter-label">
                {`Counter Value:  ${count}`}
            </div>
            <button className="counter-btn">
                {">"}
            </button>
        </div>
    </div>
}

export default Counter;
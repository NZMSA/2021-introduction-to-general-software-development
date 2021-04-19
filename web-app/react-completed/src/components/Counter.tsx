import React from 'react';
import "./Counter.css"

interface CounterProps {
    counterName?: string;
}


const Counter: React.FC<CounterProps> = (props) => {
    // State changes here
    const [count, setCount] = React.useState(5);
    const [someString, setSomeString] = React.useState<string | null>(null)
    const [imageUrl, setImageUrl] = React.useState<string | null>(null)

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }

    React.useEffect(() => {
        if (count >= 10) {
            setSomeString("Congratulations you can increment the button 10 times");
            setImageUrl("/super-secret-image.jpg")
        } else if (count <= 0) {
            setSomeString("Bruh stop decrementing");
            setImageUrl("/DO-NOT-OPEN.png")
        } else {
            setSomeString(null)
            setImageUrl(null)
        }
    }, [count]);

    React.useEffect(() => {
        alert("I have rendered :)");
        return () => {
            alert("I have stopped rendering :)")
        }
    }, [])

    return <div className="counter-wrapper">
        <div className="counter">
            { /* Show multiple onClick examples, show mistakes*/}
            <button className="counter-btn" onClick={decrement}>
                {"<"}
            </button>
            <div className="counter-label">
                {someString ?? `${props.counterName}:  ${count}`}
            </div>
            <button className="counter-btn" onClick={ increment }>
                {">"}
            </button>
        </div>
        <div className="counter-image">
            {imageUrl ? <img alt="some string" src={imageUrl}/> : null}
        </div>
    </div>
}

Counter.defaultProps = {
    counterName: "some counter name"
}
export default Counter;
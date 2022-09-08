import React, { useState } from "react";

const UseState: React.FC = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount((prevState) => prevState + 1);
    }
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}

export default UseState;
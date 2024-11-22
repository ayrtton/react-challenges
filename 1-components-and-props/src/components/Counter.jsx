import { useState } from "react"

const Counter = () => {
    const [number, setNumber] = useState(0);

    return (
        <>
            <p>Counter: {number}</p>
            <button className="btn" onClick={() => setNumber(number + 1)}>Click</button>
        </>
    );
}

export default Counter;
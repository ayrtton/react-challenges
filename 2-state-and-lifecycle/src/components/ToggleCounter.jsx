import { useState } from "react";

const ToggleCounter = () => {
    const [toggle, setToggle] = useState(true);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setToggle(!toggle); 
        setCount(count + 1);
    }
    
    return (
        <>
            <p>Clicks: {count}</p>
            <button className="btn" onClick={handleClick}>{toggle ? "On" : "Off"}</button>
        </>
    )
}

export default ToggleCounter;
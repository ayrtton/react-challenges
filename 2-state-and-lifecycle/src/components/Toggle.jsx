import { useState } from "react";

const Toggle = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <button className="btn" onClick={() => setToggle(!toggle)}>{toggle ? "On" : "Off"}</button>
        </>
    );
}

export default Toggle;
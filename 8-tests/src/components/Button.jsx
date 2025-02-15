import { useState } from "react";

const Button = () => {
    const [text, setText] = useState("Initial text");

    const handleClick = () => {
        setText("Modified text after click");
    }

    return (
        <>
            <p data-test-id="text">{text}</p>
            <button onClick={handleClick}>Click Here</button>
        </>
    );
}

export default Button;
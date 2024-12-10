import { useState } from "react";

const DynamicForm = () => {
    const [fields, setFields] = useState([""]);

    const handleChange = (i, event) => {
        const updatedFields = [...fields];
        updatedFields[i] = event.target.value;

        setFields(updatedFields);
    }

    const addInput = () => {
        setFields([...fields, ""]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(fields);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {fields.map((field, i) => (
                    <p key={i}><input type="text" value={field} onChange={(event) => handleChange(i, event)} name="input" /></p>
                ))}
                <button type="button" onClick={addInput}>Add Input</button>&nbsp;
                <button type="submit">Add Words</button>
            </form>
        </>
    );
}

export default DynamicForm;
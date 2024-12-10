import { useState } from "react";

const MultipleSteps = () => {
    const [step, setStep] = useState(1);
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: ""
    });
    
    const nextStep = () => {
        if(step === 1 && formValues.name === "") {
            alert("The name is required.")
        } else if(step === 2 && formValues.email === "") {
            alert("The email is required.")
        } else {
            setStep(step + 1);
        }
    }

    const previousStep = () => {
        setStep(step - 1);
    }

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formValues.password === "") {
            alert("The password is required.")
        } else {
            console.log(formValues);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {step === 1 && <div>
                <label>
                    <p>Name: </p>
                    <input type="text" name="name" onChange={handleChange} />
                </label>
            </div>}
            {step === 2 && <div>
                <label>
                    <p>Email: </p>
                    <input type="email" name="email" onChange={handleChange} />
                </label>
            </div>}
            {step === 3 && <div>
                <label>
                    <p>Password: </p>
                    <input type="password" name="password" onChange={handleChange} />
                </label>
            </div>}
            {step > 1 && <button type="button" onClick={previousStep}>Previous</button>}
            {step < 3 && <button type="button" onClick={nextStep}>Next</button>}
            {step === 3 && <button type="submit">Send</button>}
        </form>
    );
}

export default MultipleSteps;
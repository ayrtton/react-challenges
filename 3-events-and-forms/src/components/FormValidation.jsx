import { useState } from "react";

const FormValidation = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    });

    const validateInput = (name, value) => {
        let message = "";

        if (!value.trim()) {
            message = `The ${name} is required.`;
        } else {
            switch(name) {
                case "name":
                    message = (value.charAt(0).toUpperCase() + value.slice(1) === value) ? "" : "The name must be capitalized.";
                    break;

                case "email":
                    message = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? "" : "Invalid email.";
                    break;

                case "password":
                    message = value.length >= 6 ? "" : "The password must have at least 6 characters.";
                    break;
                    
                default:
                    break;
            }
        }

        return message;
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setUser({
            ...user,
            [event.target.name]: event.target.value
        });

        setErrors({
            ...errors,
            [name]: validateInput(name, value)
        }); 
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let validationErrors = {};
        Object.keys(user).forEach((key) => {
            const errorMessage = validateInput(key, user[key]);
            validationErrors = {...validationErrors, [key]: errorMessage};
        });

        setErrors(validationErrors);

        if(Object.values(validationErrors).some((x) => x !== "")) {
            console.log("Invalid form!");
        } else {
            console.log(user);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p><input type="text" value={user.name} onChange={handleChange} name="name" placeholder="Name" /></p>
            {errors.name && <p>{errors.name}</p>}
            <p><input type="email" value={user.email} onChange={handleChange} name="email" placeholder="Email" /></p>
            {errors.email && <p>{errors.email}</p>}
            <p><input type="password" value={user.password} onChange={handleChange} name="password" placeholder="Password" /></p>
            {errors.password && <p>{errors.password}</p>}
            <p><button type="submit" className="button">Register</button></p>
        </form>
    );
}

export default FormValidation;
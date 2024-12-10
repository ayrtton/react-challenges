import { useState } from "react";

const RegistrationForm = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p><input type="text" value={user.name} onChange={handleChange} name="name" placeholder="Name" /></p>
            <p><input type="email" value={user.email} onChange={handleChange} name="email" placeholder="Email" /></p>
            <p><input type="password" value={user.password} onChange={handleChange} name="password" placeholder="Password" /></p>
            <p><button type="submit" className="button">Register</button></p>
        </form>
    );
}

export default RegistrationForm;
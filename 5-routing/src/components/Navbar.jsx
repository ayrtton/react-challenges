import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        <div>Home</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects">
                        <div>Projects</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        <div>About</div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
import { NavLink } from "react-router";
import SearchComponent from "../components/SearchComponent";

const Home = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <ul>
                <li>
                    <NavLink to="/user/User 01">
                        <div>User 01</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user/User 02">
                        <div>User 02</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user/User 03">
                        <div>User 03</div>
                    </NavLink>
                </li>
            </ul>
            <SearchComponent />
        </div>
    );
}

export default Home;
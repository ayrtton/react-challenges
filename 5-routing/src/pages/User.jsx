import { useParams } from "react-router";

const User = () => {
    let { name } = useParams();

    return (
        <div>
            <h2>Hi {name}!</h2>
        </div>
    );
}

export default User;
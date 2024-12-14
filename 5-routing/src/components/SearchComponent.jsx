import { useState } from "react";
import { useNavigate } from "react-router";

const SearchComponent = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/searchpage?q=${query}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchComponent;
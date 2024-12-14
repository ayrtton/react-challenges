import { useSearchParams } from "react-router";

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    return (
        <>
            <h2>Search Page</h2>
            <p>You searched for {query}.</p>
        </>
    );
}

export default SearchPage;
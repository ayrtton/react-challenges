import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../context/posts/actions";

const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getPosts(page));
    }, [dispatch, page]);

    const handleNext = () => {
        setPage(page + 1);
    }

    const handlePrev = () => {
        setPage(page - 1);
    }

    return (
        <>
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
                <button onClick={handlePrev} disabled={page === 1}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </>
    );
}

export default PostsList;
const NestedLists = () => {
    const nestedList = [
        [1, 2],
        [3, 4]
    ];   

    return (
        <>
            <ul>
                {nestedList.map((list, i) => (
                    <li key={i}>
                        <ul>
                            {list.map((value, j) => (
                                <li key={j}>{value}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default NestedLists;
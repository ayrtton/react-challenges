const HelloWorld = () => {
    const styles = {
        color: "#0cf",
        fontSize: "2rem",
        backgroundColor: "#fff2",
        borderRadius: ".5rem" 
    };

    return (
        <>
            <div className="hello-world" style={styles}>
                Hello World
            </div>
        </>
    )
}

export default HelloWorld;
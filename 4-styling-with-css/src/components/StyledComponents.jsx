import styled from "styled-components";

const StyledComponents = () => {
    const Title = styled.h2`
        color: #0ef;
        font-size: 1.2rem;
    `;

    const Container = styled.div`
        border: 1px solid white;
        border-radius: .4rem;
        background-color: #bff1;
    `;

    return (
        <>
            <Container>
                <Title>
                    <h2>Hello World!</h2>
                </Title>
            </Container>
        </>
    );
}

export default StyledComponents;
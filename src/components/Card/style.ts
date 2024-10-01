import styled from "styled-components";


const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 500px;
    padding: 32px;
    border-radius: 16px;
    background-color: #f4f4f4;

    form {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
`

const Title = styled.h1`
    font-size: 2rem;
    color: #272727;
`

export {
    ContainerCard,
    Title
}
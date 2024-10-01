import styled from "styled-components";

const ButtonStyled = styled.button`
    font-size: 1rem;
    padding: 16px 8px;
    width: 100%;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: 200ms;
    background-color: #8FD14F;
    font-weight: 700;
    color: #f4f4f4;

    &:hover {
        opacity: 0.6;
    }

    &:disabled {
        background-color: #c7253e;
    }
`

export {
    ButtonStyled,
}
import styled, { css } from "styled-components";

interface IErro {
    erro: string;
}

const Container = styled.div`
    position: relative;
`

const InputStyled = styled.input<IErro>`
    font-size: 1rem;
    padding: 16px 16px;
    width: 100%;
    border-radius: 8px;
    border: none;
    transition: 200ms;
    outline: none;
    color: #272727;

    ${({ erro }) => {
        if(erro === "true") {
            return css`
                border: 2px solid #c7253e;
            `
        } else {
            return css`
                border: 2px solid transparent;
            `
        }
    }}

    &:hover {
        opacity: 0.6;
    }

    &:focus {
        opacity: 0.6;
    }
`

const TextError = styled.span`
    position: absolute;
    top: 58px;
    left: 16px;
    color: #C7253E;
`

export {
    Container,
    InputStyled,
    TextError
}
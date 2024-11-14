import styled from "styled-components";

export const DivGeral = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5vh;
    width: 100%;
`

export const NameInput = styled.p`
    font-size: 1.32rem;
    font-weight: 600;
    margin-bottom: 0;
`

export const InputStyled = styled.input`
    background-color: white;
    border: 2px solid black;
    height: 5.2vh;
    border-radius: 6px;
    margin-top: 0;
    font-size: 1.2rem;
    color: black;
    padding-left: 0.8vw;

    ::placeholder{
        color: #9C9C9C;
    }
`
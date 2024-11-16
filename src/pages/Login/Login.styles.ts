import styled from "styled-components";

export const DivGeral = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 450px) {
        display: flex;
        flex-direction: column;
    }
`

export const ImgAside = styled.img`
    width: 49.7vw;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 450px) {
        display: none;
    }
`

export const LinhaDivisao = styled.div`
    height: 100vh;
    width: 0.3vw;
    background-color: black;

    @media (max-width: 450px) {
        display: none;
    }
`

export const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8vh;
    width: 49.7vw;
    height: 100vh;
    background: linear-gradient(#FCFCFC, #5EB1BF);

    @media (max-width: 450px) {
        height: 100vh;
        width: 100vw;
        gap: 4vh;
    }
`

export const ImgLogo = styled.img`
    width: 32vw;
    height: 16vh;
    object-fit: contain;

    @media (max-width: 450px) {
        width: 75vw;
        margin-top: 0;
        margin-bottom: 0;
        height: 14vh;
    }
`

export const BoxForm = styled.div`
    background-color: white;
    width: 30vw;
    height: 58vh;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
    padding: 4vh 2vw 4vh 2vw;

    @media (max-width: 450px) {
        width: 85vw;
        height: 65vh;
        padding: 4vh 4vw 4vh 4vw;
    }
`

export const TituloBox = styled.h1`
    font-size: 1.7rem;
    font-weight: 600;
    margin: 0;

    @media (max-width: 450px) {
        font-size: 1.5rem;
    }
`

export const SubtituloBox = styled.h2`
    font-size: 1.3rem;
    font-weight: 400;
    margin: 0;

    @media (max-width: 450px) {
        font-size: 1.2rem;
    }
`

export const PEsqueciSenha = styled.p`
    font-size: 1.05rem;
    text-decoration: underline;
    text-align: end;
    margin-top: 0.5vh;
    cursor: pointer;
    margin-bottom: 1vh;
`
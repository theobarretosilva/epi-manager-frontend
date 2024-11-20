import styled from "styled-components";

export const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 66.6vw;
    padding: 7vh 3vw 7vh 3vw;
    margin-left: 25.4vw;
`

export const BoxSolEPI = styled.div`
    background-color: white;
    border: 2px solid black;
    border-radius: 8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 35vw;
    height: 43vh;
    padding: 1vh 1vw 1vh 1vw;
    margin-bottom: 2vh;
`

export const TituloBox = styled.h1`
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0;
`

export const LinhaTituloBox = styled.div`
    background-color: black;
    height: 0.2vh;
    width: 100%;
`

export const BoxSolicitacoes = styled.div`
    background-color: white;
    border: 2px solid black;
    border-radius: 8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 80vw;
    height: 35vh;
    padding: 1vh 1vw 1vh 1vw;
`

export const FundoModal = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 10;
    background-color: red;
`

export const DivModal = styled.div`
    width: 55vw;
    height: 60vh;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    padding: 2.5vh 2.5vw 2.5vh 2.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3vh;
`
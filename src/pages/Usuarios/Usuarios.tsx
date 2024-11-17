import { useNavigate } from "react-router"
import * as S from "./Usuarios.styles"

export const Usuarios = () => {

    const navigate = useNavigate()
    return(
        <S.DivWrapper>
            <S.ImgAside src='../../src/assets/img/aside_login.jpg' />
            <S.Divider/>
            <S.MainStyled>
                <S.ImgLogo src='../../src/assets/img/logo.png' />
                <h1>Escolha um usuário para ingressar</h1>
                <S.DivButton>
                    <S.Button onClick={()=> navigate("/almoxarifado")}>
                        <S.ImgButton src='../../src/assets/img/almoxarifado.png' />
                        <h2>Almoxarifado</h2>
                    </S.Button>
                    <S.Button onClick={()=> navigate("/funcionario")}>
                        <S.ImgButton src='../../src/assets/img/funcionario.png' />
                        <h2>Funcionário</h2>
                    </S.Button>
                    <S.Button onClick={()=> navigate("/administrador")}>
                        <S.ImgButton src='../../src/assets/img/admin.png' />
                        <h2>Administrador</h2>
                    </S.Button>
                </S.DivButton>
            </S.MainStyled>
        </S.DivWrapper>
    )
}
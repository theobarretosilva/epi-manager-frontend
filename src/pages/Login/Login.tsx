import { BtnStyled } from '../../components/BtnStyled/BtnStyled';
import { InputStyled } from '../../components/InputStyled/InputStyled';
import * as S from './Login.styles';
import { useNavigate } from 'react-router';

export const Login = () => {

    const navigate = useNavigate();

    return(
        <S.DivGeral>
            <S.ImgAside src='../../src/assets/img/aside_login.jpg' />
            <S.LinhaDivisao>‎</S.LinhaDivisao>
            <S.MainStyled>
                <S.ImgLogo src='../../src/assets/img/logo.png' />
                <S.BoxForm>
                    <S.TituloBox>Bem-vindo(a) de volta!</S.TituloBox>
                    <S.SubtituloBox>Insira seus dados nos campos abaixo para logar:</S.SubtituloBox>
                    <br />
                    <form>
                        <InputStyled titulo='Matrícula' tipo='text' placeholder='XXXXXX' />
                        <InputStyled titulo='Senha' tipo='password' placeholder='' />
                        <S.PEsqueciSenha onClick={() => navigate('/esqueci_senha')}>Esqueci a senha</S.PEsqueciSenha>
                        <br />
                        <br />
                        <BtnStyled text='Entrar' />
                    </form>
                </S.BoxForm>
            </S.MainStyled>
        </S.DivGeral>
    )
}
import { InputStyled } from '../../components/InputStyled/InputStyled';
import * as S from './Login.styles';

export const Login = () => {
    return(
        <S.DivGeral>
            <S.ImgAside src='../../src/assets/img/img_aside_login.png' />
            <S.LinhaDivisao>‎</S.LinhaDivisao>
            <S.MainStyled>
                <S.ImgLogo src='../../src/assets/img/logo.png' />
                <S.BoxForm>
                    <S.TituloBox>Bem-vindo(a) de volta!</S.TituloBox>
                    <S.SubtituloBox>Insira seus dados nos campos abaixo para logar:</S.SubtituloBox>
                    <form>
                        <InputStyled titulo='CPF' tipo='text' placeholder='___.___.___-__' />
                        <InputStyled titulo='Senha' tipo='password' placeholder='' />
                        <fieldset>
                            <input type='radio' name='Administrador' />
                        </fieldset>
                    </form>
                </S.BoxForm>
            </S.MainStyled>
        </S.DivGeral>
    )
}
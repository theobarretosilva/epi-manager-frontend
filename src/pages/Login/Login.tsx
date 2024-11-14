import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { BtnStyled } from '../../components/BtnStyled/BtnStyled';
import { InputStyled } from '../../components/InputStyled/InputStyled';
import * as S from './Login.styles';
import { useState } from 'react';

export const Login = () => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
    };

    return(
        <S.DivGeral>
            <S.ImgAside src='../../src/assets/img/aside_login.jpg' />
            <S.LinhaDivisao>‎</S.LinhaDivisao>
            <S.MainStyled>
                <S.ImgLogo src='../../src/assets/img/logo.png' />
                <S.BoxForm>
                    <S.TituloBox>Bem-vindo(a) de volta!</S.TituloBox>
                    <S.SubtituloBox>Insira seus dados nos campos abaixo para logar:</S.SubtituloBox>
                    <form>
                        <InputStyled titulo='CPF' tipo='text' placeholder='___.___.___-__' />
                        <InputStyled titulo='Senha' tipo='password' placeholder='' />
                        <S.PEsqueciSenha>Esqueci a senha</S.PEsqueciSenha>
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Tipo de acesso</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={value}
                                onChange={handleChange}>
                                    <FormControlLabel value="funcionario" control={<Radio />} label="Funcionário" />
                                    <FormControlLabel value="almoxarifado" control={<Radio />} label="Almoxarifado" />
                                    <FormControlLabel value="administrador" control={<Radio />} label="Administrador" />
                                </RadioGroup>
                        </FormControl>
                        <BtnStyled text='Entrar' />
                    </form>
                </S.BoxForm>
            </S.MainStyled>
        </S.DivGeral>
    )
}
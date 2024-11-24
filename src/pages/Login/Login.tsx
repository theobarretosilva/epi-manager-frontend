import { useState } from 'react';
import { BtnStyled } from '../../components/BtnStyled/BtnStyled';
import { InputStyled } from '../../components/InputStyled/InputStyled';
import * as S from './Login.styles';
import { useNavigate } from 'react-router';
import asideImage from '../../assets/img/aside_login.jpg';
import logoImage from '../../assets/img/logo.png';
import { toast } from 'react-toastify';

export const Login = () => {
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const colaboradores = JSON.parse(sessionStorage.getItem("ColaboradoresCadastrados") || "[]");
    const tipoAcesso = JSON.parse(sessionStorage.getItem("TipoAcesso") || "");

    const calculateHash = async (password: string, salt: string) => {
        const encoder = new TextEncoder();
        const passwordBytes = encoder.encode(password);
    
        const saltBytes = new Uint8Array(
            salt.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))
        );
    
        const combined = new Uint8Array([...passwordBytes, ...saltBytes]);
    
        const hashBuffer = await crypto.subtle.digest("SHA-256", combined);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    };

    const handleLogin = async (matricula: string, senha: string) => {
        const user = colaboradores.find((u) => u.matricula === matricula);
    
        if (!user) {
            throw new Error("Usuário não encontrado.");
        }
    
        const hash = await calculateHash(senha, user.salt);
    
        if (hash === user.hash && user.tipoAcesso === tipoAcesso) {
            console.log("Autenticação bem-sucedida!");
            return user.cargo;
        } else {
            throw new Error("Senha incorreta.");
        }
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const cargo = await handleLogin(matricula, senha);
            console.log(cargo)
            switch (cargo) {
                case 'Administrador':
                    navigate('/administrador/solicitacoes');
                    break;
                case 'Colaborador':
                    navigate('/funcionario/solicitacoes');
                    break;
                case 'Almoxarifado':
                    navigate('/almoxarifado/dashboardAlmox');
                    break;
                default:
                    navigate('/');
            }
            toast.success("Logado com sucesso! Redirecionando para página inicial")
        } catch (err) {
            setError(err.message);
            toast.error(error);
        }
    };

    return(
        <S.DivGeral>
            <S.ImgAside src={asideImage} />
            <S.LinhaDivisao>‎</S.LinhaDivisao>
            <S.MainStyled>
                <S.ImgLogo src={logoImage} />
                <S.BoxForm>
                    <S.TituloBox>Bem-vindo(a) de volta!</S.TituloBox>
                    <S.SubtituloBox>Insira seus dados nos campos abaixo para logar:</S.SubtituloBox>
                    <br />
                    <form onSubmit={onSubmit}>
                        <InputStyled
                            titulo='Matrícula'
                            tipo='text'
                            placeholder=''
                            value={matricula}
                            handle={(e) => setMatricula(e.target.value)}
                        />
                        <InputStyled
                            titulo='Senha'
                            tipo='password'
                            placeholder='' 
                            value={senha}
                            handle={(e) => setSenha(e.target.value)}
                        />
                        <S.PEsqueciSenha onClick={() => navigate('esqueciSenha')}>Esqueci a senha</S.PEsqueciSenha>
                        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                        <br />
                        <BtnStyled text='Entrar' />
                    </form>
                </S.BoxForm>
            </S.MainStyled>
        </S.DivGeral>
    )
}
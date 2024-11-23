import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export const useHandleLogin = () => {
    const usuariosCadastrados = JSON.parse(sessionStorage.getItem('Usuarios'))
    const [formData, setFormData] = useState({ matricula: '', senha: '' });
    const navigate = useNavigate();

    const updateField = (field, value) => {
        setFormData(prevState => ({ ...prevState, [field]: value }));
    };

    const handleLogin = async () => {
        const { matricula, senha } = formData;

        if (!matricula || !senha) {
            toast.error('Por favor, preencha todos os campos.');
            return;
        }

        // Simulação de autenticação (substitua pela lógica real de autenticação, por exemplo, via API)
        const usuarioAutenticado = {
            matricula: '544',
            nome: 'Théo Barreto Silva',
            cargo: 'Soldador',
            setor: 'Solda',
            email: 'barretotheo25@gmail.com',
        };

        if (matricula === usuarioAutenticado.matricula && senha === '12345') {  // Aqui você substitui pela validação real
            sessionStorage.setItem('UserLogado', JSON.stringify(usuarioAutenticado));
            toast.success('Login bem-sucedido!');
            navigate('/dashboard'); // Navegue para a página desejada após o login
        } else {
            toast.error('Matrícula ou senha inválidos.');
        }
    };

    return { formData, updateField, handleLogin };
};

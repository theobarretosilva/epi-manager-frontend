import { useEffect } from 'react';
import { BtnStyled } from '../../../components/BtnStyled/BtnStyled';
import { InputStyled } from '../../../components/InputStyled/InputStyled';
import { SelectCodStyled } from '../../../components/SelectCodStyled/SelectCodStyled';
import * as S from './SolicitarEPI.styles';
import { SelectStyled } from '../../../components/SelectStyled/SelectStyled';
import { useNavigate } from 'react-router';
import useHandleFormSolicitarEPI from '../../../hooks/useHandleFormSolicitarEPI';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SolicitarEPI = () => {
    const navigate = useNavigate();
    const { formData, updateField, submitForm } = useHandleFormSolicitarEPI();

    const usuarioLogado = {
        id: '01',
        nome: 'Théo Barreto Silva', 
        matricula: '544', 
        setor: 'Solda', 
        cargo: 'Soldador', 
        email: 'barretotheo25@gmail.com', 
        hash: '', 
        salt: ''
    };
    sessionStorage.setItem('UserLogado', JSON.stringify(usuarioLogado));
    const userLogado = JSON.parse(sessionStorage.getItem('UserLogado') || '{}');

    const EPIList = JSON.parse(sessionStorage.getItem('EPIsCadastrados') || '[]');
    const options = EPIList.map((epi: { descricao: string; codigo: string }) => ({
        label: epi.descricao,
        value: epi.codigo,
    }));

    const generateUniqueID = () => {
        const now = new Date();
        return `SOL-${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
    };

    useEffect(() => {
        const newId = generateUniqueID();
        updateField('id', newId);
        updateField('solicitante', userLogado.nome);
    }, [updateField, userLogado.nome]);

    const handleSubmit = () => {
        if (!formData.item || !formData.codigoEPI || !formData.prioridade || !formData.quantidade) {
            toast.error('Por favor, preencha todos os campos.');
            return;
        }

        submitForm();
        toast.success('EPI solicitado com sucesso!');
        navigate('/funcionario/solicitacoes');
    };

    return (
        <S.MainStyled>
            <S.DivMainSolicitar>
                <S.DivFlex>
                    <InputStyled 
                        disabled={true}
                        tipo='text'
                        titulo='ID da Solicitação'
                        value={formData.id}
                        handle={e => updateField('id', e.target.value)}
                    />
                    <InputStyled 
                        disabled={true}
                        tipo='text'
                        titulo='Solicitante'
                        value={userLogado.nome}
                    />
                </S.DivFlex>
                <S.DivFlex>
                    <SelectCodStyled 
                        titulo="Escolha um item"
                        value={formData.item}
                        options={options}
                        onChange={option => {
                            updateField('item', option.label);
                            updateField('codigoEPI', option.value);
                        }}
                    />
                    <InputStyled 
                        tipo='text'
                        titulo='Código'
                        disabled={true}
                        value={formData.codigoEPI}
                    />
                </S.DivFlex>
                <S.DivFlex>
                    <SelectStyled
                        titulo="Prioridade" 
                        value={formData.prioridade} 
                        options={['Alta', 'Média', 'Baixa']} 
                        onChange={value => updateField('prioridade', value)} 
                    />
                    <InputStyled 
                        tipo='number'
                        titulo='Quantidade'
                        value={formData.quantidade}
                        handle={e => updateField('quantidade', parseInt(e.target.value) || 0)}
                    />
                </S.DivFlex>
                <br />
                <BtnStyled text='Solicitar' onClick={handleSubmit} />
                <S.PVoltar onClick={() => navigate('/funcionario/solicitacoes')}>Voltar</S.PVoltar>
            </S.DivMainSolicitar>
        </S.MainStyled>
    );
};

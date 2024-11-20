import { useState } from 'react'
import { BtnStyled } from '../../../components/BtnStyled/BtnStyled'
import { InputStyled } from '../../../components/InputStyled/InputStyled'
import { SelectCodStyled } from '../../../components/SelectCodStyled/SelectCodStyled'
import * as S from './SolicitarEPI.styles'
import { SelectStyled } from '../../../components/SelectStyled/SelectStyled'

export const SolicitarEPI = () => {
    const [selectedOption, setSelectedOption] = useState({ label: '', value: '' });
    const [codigo, setCodigo] = useState('');
    const handleSelectChange = (option: { label: string; value: string }) => {
        console.log('Selecionado:', option);
        setSelectedOption(option);
        setCodigo(option.value);
    };

    const [selectedPrioridade, setSelectedPrioridade] = useState('');
    const handleSelectPrioridadeChange = (value: string) => {
        console.log('Selecionado:', value);
        setSelectedPrioridade(value);
    };

    const options = [
        { label: 'Capacete de proteção', value: 'COD-01' },
        { label: 'Óculos de proteção', value: 'COD-02' },
        { label: 'Luva de borracha', value: 'COD-03' }
    ];

    return(
        <S.MainStyled>
            <S.DivMainSolicitar>
                <S.DivFlex>
                    <InputStyled 
                        disabled={true}
                        tipo='text'
                        titulo='ID da Solicitação'
                        value='SOL-24-1'
                    />
                    <InputStyled 
                        disabled={true}
                        tipo='text'
                        titulo='Solicitante'
                        value='Felipe Soares de Oliveira'
                    />
                </S.DivFlex>
                <S.DivFlex>
                    <SelectCodStyled 
                        titulo="Escolha um item"
                        value={selectedOption.value}
                        options={options}
                        onChange={handleSelectChange}
                    />
                    <InputStyled 
                        tipo='text'
                        titulo='Código'
                        disabled={true}
                        value={codigo}
                    />
                </S.DivFlex>
                <S.DivFlex>
                    <SelectStyled
                        titulo="Prioridade" 
                        value={selectedPrioridade} 
                        options={['Alta', 'Média', 'Baixa']} 
                        onChange={handleSelectPrioridadeChange} 
                    />
                    <InputStyled 
                        tipo='number'
                        titulo='Quantidade'
                    />
                </S.DivFlex>
                <br />
                <BtnStyled text='Solicitar' />
                <S.PVoltar>Voltar</S.PVoltar>
            </S.DivMainSolicitar>
        </S.MainStyled>
    )
}
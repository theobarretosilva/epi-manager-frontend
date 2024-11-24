import * as S from './SelectCodStyled.styles';

interface Option {
    label: string; // Texto visível no dropdown
    value: string; // Código associado ao item
}

interface SelectCodStyledProps {
    titulo: string; // Título do dropdown
    value?: string; // Valor atual selecionado
    disabled?: boolean; // Desabilitar dropdown
    options: Array<Option>; // Lista de opções
    onChange?: (selectedOption: Option) => void; // Função chamada ao mudar valor
}

export const SelectCodStyled = ({ titulo, value, disabled, options, onChange }: SelectCodStyledProps) => {
    return (
        <S.DivGeral>
            <S.NameInput>{titulo}</S.NameInput>
            <S.SelectStyled
                value={value}
                disabled={disabled}
                onChange={(e) => {
                    const selectedValue = e.target.value;
                    const selectedOption = options.find(option => option.value === selectedValue);
                    if (selectedOption) onChange?.(selectedOption);
                }}
            >
                <option value="" disabled>Selecione uma opção</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </S.SelectStyled>
        </S.DivGeral>
    );
};

import * as S from './SelectStyled.styles';

interface SelectStyledProps {
    titulo: string; // O título acima do dropdown
    value?: string; // O valor selecionado (opcional)
    disabled?: boolean; // Se o campo está desabilitado
    options: Array<string>; // Lista de opções (corrigido o tipo)
    onChange?: (value: string) => void; // Evento para capturar mudanças
}

export const SelectStyled = ({ titulo, value, disabled, options, onChange }: SelectStyledProps) => {
    return (
        <S.DivGeral>
            <S.NameInput>{titulo}</S.NameInput>
            <S.SelectStyled 
                value={value} 
                disabled={disabled} 
                onChange={(e) => onChange?.(e.target.value)} // Captura mudanças no valor
            >
                <option value="" disabled>Selecione uma opção</option> {/* Placeholder */}
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </S.SelectStyled>
        </S.DivGeral>
    );
};

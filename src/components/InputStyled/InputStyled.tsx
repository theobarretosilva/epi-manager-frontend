import * as S from './InputStyled.styles'

interface InputStyledProps {
    titulo: string;
    tipo: string;
    placeholder?: string;
    value?: string | number;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputStyled = ({ titulo, tipo, placeholder, value, disabled, onChange }: InputStyledProps) => {
    return (
        <S.DivGeral>
            <S.NameInput>{titulo}</S.NameInput>
            <S.InputStyled value={value} type={tipo} placeholder={placeholder} disabled={disabled} onChange={onChange} />
        </S.DivGeral>
    );
};

import * as S from './InputStyled.styles'

interface InputStyledProps {
    titulo: string;
    tipo: string;
    placeholder?: string;
    value?: string;
    disabled?: boolean;
}

export const InputStyled = ({ titulo, tipo, placeholder, value, disabled }: InputStyledProps) => {
    return (
        <S.DivGeral>
            <S.NameInput>{titulo}</S.NameInput>
            <S.InputStyled value={value} type={tipo} placeholder={placeholder} disabled={disabled} />
        </S.DivGeral>
    );
};

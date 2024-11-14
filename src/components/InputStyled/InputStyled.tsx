import * as S from './InputStyled.styles'

interface InputStyledProps {
    titulo: string;
    tipo: string;
    placeholder: string;
}

export const InputStyled = ({ titulo, tipo, placeholder }: InputStyledProps) => {
    return (
        <S.DivGeral>
            <S.NameInput>{titulo}</S.NameInput>
            <S.InputStyled type={tipo} placeholder={placeholder} />
        </S.DivGeral>
    );
};

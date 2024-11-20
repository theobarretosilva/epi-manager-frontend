import * as S from './InputStyled.styles'

interface InputStyledProps {
    titulo: string;
    tipo: string;
    placeholder?: string;
    value?: string;
    name?: string;
    handle?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputStyled = ({ titulo, tipo, placeholder, name, value, handle}: InputStyledProps) => {
    return (
        <S.DivGeral>
            <S.NameInput>{titulo}</S.NameInput>
            <S.InputStyled name={name}  type={tipo} placeholder={placeholder} value={value} onChange={handle} />
        </S.DivGeral>
    );
};

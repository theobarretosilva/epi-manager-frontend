import * as S from './InputStyled.styles'

interface InputStyledProps {
    titulo: string;
    tipo: string;
    placeholder?: string;
    value?: string | number;
    name?: string;
    disabled?: boolean;
    handle?: (event: React.ChangeEvent<HTMLInputElement>) => void;   
}

export const InputStyled = ({ titulo, tipo, placeholder, name, value, handle, disabled}: InputStyledProps) => {
    return (
        <S.DivGeral>
            <S.NameInput>{titulo}</S.NameInput>
            <S.InputStyled disabled={disabled} name={name}  type={tipo} placeholder={placeholder} value={value} onChange={handle} />
        </S.DivGeral>
    );
};

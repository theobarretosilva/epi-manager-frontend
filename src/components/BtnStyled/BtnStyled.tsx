import * as S from './BtnStyled.styles'

interface BtnStyledProps {
    text: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

export const BtnStyled: React.FC<BtnStyledProps> = ({ text, type, onClick }) => {
    return(
        <S.ButtonStyled onClick={onClick} type={type}>{text}</S.ButtonStyled>
    )
}
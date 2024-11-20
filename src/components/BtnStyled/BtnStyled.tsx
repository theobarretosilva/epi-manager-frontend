import * as S from './BtnStyled.styles'

interface BtnStyledProps {
    text: string;
    type: "button" | "submit" | "reset";
}

export const BtnStyled: React.FC<BtnStyledProps> = ({ text, type }) => {
    return(
        <S.ButtonStyled type={type} >{text}</S.ButtonStyled>
    )
}
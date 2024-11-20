import * as S from './BtnStyled.styles'

interface BtnStyledProps {
    text: string;
    onClick: () => void;
}

export const BtnStyled = ({ text, onClick }: BtnStyledProps) => {
    return(
        <S.ButtonStyled onClick={onClick}>{text}</S.ButtonStyled>
    )
}
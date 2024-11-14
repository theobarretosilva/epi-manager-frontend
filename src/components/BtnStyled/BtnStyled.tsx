import * as S from './BtnStyled.styles'

interface BtnStyledProps {
    text: string;
}

export const BtnStyled = ({ text }: BtnStyledProps) => {
    return(
        <S.ButtonStyled>{text}</S.ButtonStyled>
    )
}
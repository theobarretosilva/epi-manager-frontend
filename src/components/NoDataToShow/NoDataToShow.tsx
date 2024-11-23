import * as S from './NoDataToShow.styles'

interface NoDataToShowProps {
    mainText: string;
}

export const NoDataToShow = ({ mainText }: NoDataToShowProps) => {
    return(
        <>
            <S.PNoData>Não foram adicionados {mainText} ainda!</S.PNoData>
            <S.ImgNoData src='../../src/assets/svg/add_information.svg' />
        </>
    )
}
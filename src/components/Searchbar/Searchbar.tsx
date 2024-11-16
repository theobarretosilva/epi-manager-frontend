import * as S from './Searchbar.styles';

interface SearchbarProps {
    placeholder: string;
}

export const Searchbar = ({ placeholder }: SearchbarProps) => {
    return(
        <S.DivInput>
            <S.SearchInputStyled type='text' placeholder={placeholder} />
            <S.SearchIcon src='../../src/assets/svg/Searchoutlined.svg' />
        </S.DivInput>
    )
}
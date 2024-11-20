import * as S from './Searchbar.styles';

interface SearchbarProps {
    placeholder?: string; // Torna opcional, com valor padrão
    onSearch?: (value: string) => void; // Callback para capturar a busca
}

export const Searchbar = ({ placeholder = "Pesquise sua solicitação...", onSearch }: SearchbarProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onSearch) {
            onSearch(event.target.value);
        }
    };

    return (
        <S.DivInput>
            <S.SearchInputStyled 
                type="text" 
                placeholder={placeholder} 
                onChange={handleInputChange} 
                aria-label="Barra de Pesquisa"
            />
            <S.SearchIcon 
                src='../../src/assets/svg/Searchoutlined.svg'
                alt="Ícone de busca"
            />
        </S.DivInput>
    );
};

import * as S from "./SelectInput.styles"
import { SelectInputProps } from "./SelectInput.styles"

export const SelectInput: React.FC<SelectInputProps> = ({text , title, disable}) => {
    return (
        <S.DivGeral>
            <S.NameInput>{title}</S.NameInput>
            <S.InputStyled value={text} disabled={disable}>
                <option value={"Baixa"}>Baixa</option>
                <option value={"Normal"}>Normal</option>
                <option value={"Alta"}>Alta</option>
                <option value={"Urgente"}>Urgente</option>
            </S.InputStyled>
        </S.DivGeral>   
    )
}
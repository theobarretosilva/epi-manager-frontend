import { ExcluirProps } from "./ExcluirModal.styles";
import * as S from "./ExcluirModal.styles"

export const ExcluirModal: React.FC<ExcluirProps> = ({ Id, setModalIsOpen, tipo }) => {

  const handleClose = () => {
    setModalIsOpen(false);
  };

  const handleDelete = () => {
    if ( tipo = "colaborador") {
    console.log("Colaborador excluído: "+Id);
      
    } else {
    console.log("EPI excluído: "+Id);
      
    }
    
    setModalIsOpen(false); 
  };

  return (
      <S.DivContainer>
        <S.TituloBox>Você deseja excluir esse item?</S.TituloBox>
        <S.SubtituloBox>Ao realizar essa operação não é possível reverter a ação ou recuperar os dados deletados.</S.SubtituloBox>
        <S.DivButton>
          <S.ButtonDelete onClick={handleDelete}>Deletar</S.ButtonDelete>
          <S.ButtonCancel onClick={handleClose} >Cancelar</S.ButtonCancel>
        </S.DivButton>

      </S.DivContainer>
  );
};


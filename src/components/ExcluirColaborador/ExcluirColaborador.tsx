
import * as S from "./ExcluirColaborador.styles"

interface ExcluirColaboradorProps {
  colaboradorId: number; 
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExcluirColaborador: React.FC<ExcluirColaboradorProps> = ({ colaboradorId, setModalIsOpen }) => {

  const handleClose = () => {
    setModalIsOpen(false);
  };

  const handleDelete = () => {
    // onDelete(colaboradorId);
    console.log(colaboradorId);
    
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

export default ExcluirColaborador;

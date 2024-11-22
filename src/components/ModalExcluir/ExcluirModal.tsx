import { toast } from "react-toastify";
import { ExcluirProps } from "./ExcluirModal.styles";
import * as S from "./ExcluirModal.styles"

export const ExcluirModal: React.FC<ExcluirProps> = ({ Id, setModalIsOpen, tipo, onDelete }) => {
  const colaboradores = JSON.parse(sessionStorage.getItem('ColaboradoresCadastrados') || '[]');

  const handleClose = () => {
    setModalIsOpen(false);
  };

  const handleDelete = () => {
    if ( tipo == "colaborador") {
      const colaboradoresAtualizados = colaboradores.filter((colaborador: { id: string }) => colaborador.id !== Id);
      sessionStorage.setItem('ColaboradoresCadastrados', JSON.stringify(colaboradoresAtualizados));
      console.log("Colaborador excluído: " + Id);
      onDelete(Id);
      toast.success('Colaborador deletado com sucesso!')      
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


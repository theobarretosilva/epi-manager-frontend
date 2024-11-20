import ReactModal from "react-modal";
import AdicionarColaborador from "../../../components/AdicionarColaborador/AdicionarColaborador"
import { useState } from "react";
import * as S from './DashboardColab.styles'
import { ToastContainer } from "react-toastify";
import { ExcluirModal } from "../../../components/ModalExcluir/ExcluirModal";

export const DashboardColab = () => {
    const [modalIsOpenAddColaborador, setModalIsOpenAddColaborador] = useState(false);
    const [modalIsOpenDelete, setModalIsOpenDelete] = useState(false);
    const [idColaborador, setIdColaborador] = useState(0);



    const openModal = () => {
        setModalIsOpenAddColaborador(true); //chamada para abrir o modal
       //espaço para lógica de edição após inclusão da tabela
    }

    const openModalDelete = (id: number) => {
        setModalIsOpenDelete(true); //chamada para abrir o modal
        setIdColaborador(id)
    }

    const customStyles = {
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)", 
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          padding: "25px",
          borderRadius: "10px",
          backgroundColor: "#FCFCFC",
        },
    };


    return(
        <>
     <ToastContainer position="top-right" />  {/* não apagar */}

        <S.Button onClick={()=> openModal()}>Abrir modal</S.Button>
        <S.Button onClick={()=> openModalDelete(1)}>Abrir modal de Delete</S.Button> {/* passar o params.row.id do colaborador */}

        <ReactModal
        isOpen={modalIsOpenDelete}
        onRequestClose={() => setModalIsOpenDelete(false)}
        style={customStyles}
        >
            <S.MainWrapper>
                <S.ImageContent onClick={() => setModalIsOpenDelete(false)}>
                    <S.Image  src="../../src/assets/svg/Close.svg" />
                </S.ImageContent>
                <ExcluirModal setModalIsOpen={setModalIsOpenDelete} Id={ idColaborador } tipo="colaborador" /> 
            </S.MainWrapper>

        </ReactModal>

        <ReactModal
        isOpen={modalIsOpenAddColaborador}
        onRequestClose={() => setModalIsOpenAddColaborador(false)}
        style={customStyles}
        >
            <S.MainWrapper>
                <S.ImageContent onClick={() => setModalIsOpenAddColaborador(false)}>
                    <S.Image  src="../../src/assets/svg/Close.svg" />
                </S.ImageContent>
                <AdicionarColaborador setModalIsOpen={setModalIsOpenAddColaborador} />
            </S.MainWrapper>
        </ReactModal>
        </>
    )
}
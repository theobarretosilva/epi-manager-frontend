import ReactModal from "react-modal";
import AdicionarColaborador from "../../../components/AdicionarColaborador/AdicionarColaborador"
import { useState } from "react";
import * as S from './DashboardColab.styles'
import { ToastContainer } from "react-toastify";

export const DashboardColab = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true); //chamada para abrir o modal
       //espaço para lógica de edição após inclusão da tabela
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

        <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        >
            <S.MainWrapper>
                <S.ImageContent onClick={() => setModalIsOpen(false)}>
                    <S.Image  src="../../src/assets/svg/Close.svg" />
                </S.ImageContent>
                <AdicionarColaborador />
            </S.MainWrapper>

        </ReactModal>
        </>
    )
}
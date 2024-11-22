import { useState } from "react";
import ReactModal from "react-modal"
import { ExcluirModal } from "../../../components/ModalExcluir/ExcluirModal";
import * as S from "./DashboardEPI.styles"
import { ToastContainer } from "react-toastify";
import AdicionarEpi from "../../../components/AdicionarEpi/AdicionarEPI";
import { Searchbar } from "../../../components/Searchbar/Searchbar";
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const DashboardEPI = () => {
    const [modalIsOpenAddEpi, setModalIsOpenAddEpi] = useState(false);
    const [modalIsOpenDelete, setModalIsOpenDelete] = useState(false);
    const [idEpi, setIdEpi] = useState(0);

    const openModal = () => {
        setModalIsOpenAddEpi(true); //chamada para abrir o modal
       //espaço para lógica de edição após inclusão da tabela
    }

    const openModalDelete = () => {
        setModalIsOpenDelete(true); //chamada para abrir o modal
       //setIdEpi(id) do params.row.id
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
            <S.MainStyled>
                <Searchbar placeholder="Pesquise pela nome ou código" />
                <Paper sx={{ height: '100%', width: '100%', fontSize: 14, mt: 2 }}>
                    <DataGrid
                        rows={filteredRows}
                        columns={columns}
                        pageSizeOptions={[5, 10]}
                        sx={{
                            border: 0,
                            '& .MuiDataGrid-cell': { textAlign: 'center' },
                            '& .MuiDataGrid-columnHeaders': { backgroundColor: '#f5f5f5' },
                        }}
                    />
                </Paper>
            </S.MainStyled>
            <ToastContainer position="top-right" />  {/* não apagar */}

            <S.Button onClick={()=> openModal()}>Abrir modal </S.Button>
            <S.Button onClick={()=> openModalDelete()}>Abrir modal delete</S.Button>


            <ReactModal
            isOpen={modalIsOpenDelete}
            onRequestClose={() => setModalIsOpenDelete(false)}
            style={customStyles}
            >
                <S.MainWrapper>
                    <S.ImageContent onClick={() => setModalIsOpenDelete(false)}>
                        <S.Image  src="../../src/assets/svg/Close.svg" />
                    </S.ImageContent>
                    <ExcluirModal setModalIsOpen={setModalIsOpenDelete} Id={ idEpi } tipo="epi" /> 
                </S.MainWrapper>
            </ReactModal>

            <ReactModal
            isOpen={modalIsOpenAddEpi}
            onRequestClose={() => setModalIsOpenAddEpi(false)}
            style={customStyles}
            >
                <S.MainWrapper>
                    <S.ImageContent onClick={() => setModalIsOpenAddEpi(false)}>
                        <S.Image  src="../../src/assets/svg/Close.svg" />
                    </S.ImageContent>
                    <AdicionarEpi setModalIsOpen={setModalIsOpenAddEpi} />
                </S.MainWrapper>
            </ReactModal>
        </>
    )
}
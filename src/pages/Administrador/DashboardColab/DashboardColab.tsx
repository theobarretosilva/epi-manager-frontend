import ReactModal from "react-modal";
import AdicionarColaborador from "../../../components/AdicionarColaborador/AdicionarColaborador"
import { useState } from "react";
import * as S from './DashboardColab.styles'
import { ToastContainer } from "react-toastify";
import { ExcluirModal } from "../../../components/ModalExcluir/ExcluirModal";
import { Searchbar } from "../../../components/Searchbar/Searchbar";
import { Paper } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridColDef, GridRowParams } from "@mui/x-data-grid";
import { EditColabIcon } from "../../../components/EditColabIcon/EditColabIcon";
import { DeleteIcon } from "../../../components/DeleteIcon/DeleteIcon";

interface ColaboradorProps {
    id: string;
    nome: string; 
    matricula: string;
    setor: string;
    cargo: string;
    email: string;
    hash: string;
    salt: string;
}

export const DashboardColab = () => {
    const colaboradores = JSON.parse(sessionStorage.getItem('Colaboradores cadastrados') || '{}');
    const [modalIsOpenAddColaborador, setModalIsOpenAddColaborador] = useState(false);
    const [modalIsOpenDelete, setModalIsOpenDelete] = useState(false);
    const [idColaborador, setIdColaborador] = useState(0);

    const openModal = (id: string) => {
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
    
    const columns: GridColDef[] = [
        {
            field: 'editar',
            type: 'actions',
            headerName: 'Editar',
            getActions: (params: GridRowParams) => [
                <GridActionsCellItem
                    key={0}
                    icon={<EditColabIcon />}
                    label="Abrir"
                    onClick={() => openModal(params.row.id)}
                />,
            ],
            width: 80,
        },
        { field: 'id', headerName: 'Matricula', width: 100, align: 'center', headerAlign: 'center' },
        { field: 'nome', headerName: 'Nome', width: 350, align: 'center', headerAlign: 'center' },
        { field: 'cargo', headerName: 'Cargo', width: 200, align: 'center', headerAlign: 'center'},
        { field: 'setor', headerName: 'Setor', width: 200, align: 'center', headerAlign: 'center' },
        { 
            field: 'excluir',
            type: 'actions',
            headerName: 'Deletar', 
            getActions: (params: GridRowParams) => [
                <GridActionsCellItem
                    key={0}
                    icon={<DeleteIcon />}
                    label="Download"
                    onClick={()=> openModalDelete(params.row.id)}
                />,
            ],
            width: 80,
            align: 'center',
            headerAlign: 'center'
        }
    ];

    const rows = colaboradores.map((colaborador: ColaboradorProps) => ({
        id: colaborador.id,
        matricula: colaborador.matricula,
        nome: colaborador.nome,
        cargo: colaborador.cargo,
        setor: colaborador.setor,
    }));

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRows, setFilteredRows] = useState(rows);
    const handleSearch = (value: string) => {
        setSearchTerm(value);
        setFilteredRows(
            rows.filter(row => 
                row.matricula.toLowerCase().includes(value.toLowerCase()) ||
                row.nome.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    return(
        <>
            <S.MainStyled>
                <Searchbar onSearch={handleSearch} />
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
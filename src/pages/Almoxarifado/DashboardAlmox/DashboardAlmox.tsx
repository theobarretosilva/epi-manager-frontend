import { Paper } from '@mui/material'
import { Searchbar } from '../../../components/Searchbar/Searchbar'
import * as S from './DashboardAlmox.styles'
import { DataGrid, GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid'
import { OpenModalIcon } from '../../../components/OpenModalIcon/OpenModalIcon'
import { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { InputDisable } from '../../../components/InputDisable/InputDisable'
import { useModalDetalhesSolicitacao } from '../../../hooks/useModalDetalhesSolicitacao'
import { SelectInput } from '../../../components/SelectInput/SelectInput'

interface SolicitacaoProps {
    id: string;
    descricaoItem: string;
    status: string;
    codigoEPI: string;
    prioridade: string;
}
  
interface EPIProps {
    descricao: string;
    codigo: string;
    CA: string;
    validade: string;
}

interface RowProps {
    id: string;
    descricaoItem: string;
    status: string;
    prioridade: string;
    validade: string;
}

export const DashboardAlmox = () => {
    const { 
        isOpen,
        item,
        id,
        status,
        dataSolicitacao,
        solicitante,
        quantidade,
        codigoEPI,
        numeroPatrimonio,
        openModal,
        closeModal 
      } = useModalDetalhesSolicitacao();
    const [ca, setCa] = useState("");
    
    const solicitacoes = JSON.parse(sessionStorage.getItem('Solicitacoes') || '[]');

    const [dataEpi] = useState(() => {
        const savedData = sessionStorage.getItem('EPIsCadastrados');
        return savedData ? JSON.parse(savedData) : [{}]; 
      });

    useEffect(() => {
        sessionStorage.setItem('EPIsCadastrados', JSON.stringify(dataEpi));
      }, [dataEpi]);

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

    const getValidadeEPI = (cod: string) => {
        const epi = dataEpi.find((epi: EPIProps) => epi.codigo === cod);
        return epi ? epi.validade : 'N/A';
    };

    const getCAEPI = (cod: string) => {
        const epi = dataEpi.find((epi: EPIProps) => epi.codigo === cod);
        return epi ? epi.certificadoAprovacao : 'N/A';
      }

    const getSolicitacao = (params: SolicitacaoProps) => {
        const solicitacao = solicitacoes.find((solicitacao: SolicitacaoProps) => solicitacao.id == params.id);
        return solicitacao;
      }

    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 });
    const columns: GridColDef[] = [
        {
            field: 'open',
            type: 'actions',
            headerName: 'Abrir',
            getActions: (params: GridRowParams) => [
                <GridActionsCellItem 
                    key={0}
                    icon={<OpenModalIcon />}
                    label='Abrir'
          onClick={() => openModal(getSolicitacao(params.row))}
                />
            ],
            width: 80
        },
        { field: 'id', headerName: 'ID', width: 200, align: 'center', headerAlign: 'center' },
        { field: 'descricaoItem', headerName: 'Descrição do Item', width: 300, align: 'center', headerAlign: 'center' },
        { field: 'prioridade', headerName: 'Prioridade', width: 130, align: 'center', headerAlign: 'center'},
        { field: 'status', headerName: 'Status', width: 130, align: 'center', headerAlign: 'center' },
        { field: 'validadeEPI', headerName: 'Validade EPI', width: 150, align: 'center', headerAlign: 'center' }
    ];

    const rows = solicitacoes.map((solicitacao: SolicitacaoProps) => ({
        id: solicitacao.id,
        descricaoItem: solicitacao.descricaoItem,
        prioridade: solicitacao.prioridade,
        status: solicitacao.status,
        validadeEPI: getValidadeEPI(solicitacao.codigoEPI),
    }));

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRows, setFilteredRows] = useState(rows);
    const handleSearch = (value: string) => {
        setSearchTerm(value);
        setFilteredRows(
            rows.filter(row => 
                row.descricaoItem.toLowerCase().includes(value.toLowerCase()) ||
                row.id.toLowerCase().includes(value.toLowerCase())
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
                        paginationModel={paginationModel}
                        onPaginationModelChange={setPaginationModel}
                        pageSizeOptions={[6, 10]}
                        sx={{
                            border: 0,
                            '& .MuiDataGrid-cell': { textAlign: 'center' },
                            '& .MuiDataGrid-columnHeaders': { backgroundColor: '#f5f5f5' },
                        }}
                    />
                </Paper>
                <ReactModal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
                    <S.MainWrapper>
                    <S.ImageContent onClick={closeModal}>
                        <S.Image src="../../src/assets/svg/Close.svg" />
                    </S.ImageContent>
                    <S.DivWrapper>
                        <InputDisable text={dataSolicitacao} title="Data de Abertura" type="text" />
                        <InputDisable text="-" title="Data de Conclusão" type="text" />
                        <InputDisable text={status} title="Status" type="text" />
                        <InputDisable text={id} title="ID da Solicitação" type="text" />
                        <InputDisable text={solicitante} title="Solicitante" type="text" />
                        <InputDisable text={quantidade} title="Quantidade" type="number" />
                        <InputDisable text={item} title="Item" type="text" />
                        <InputDisable text={codigoEPI} title="Código" type="text" />
                        <SelectInput disable  text="Normal" title="Prioridade" />
                        <InputDisable text={getCAEPI(codigoEPI)} title="CA" type="text" />
                        <InputDisable text={getValidadeEPI(codigoEPI)} title="Data de Validade" type="text" />
                        <InputDisable text={numeroPatrimonio} title="Número de Patrimônio" type="text" />
                    </S.DivWrapper>
                    </S.MainWrapper>
                </ReactModal>
            </S.MainStyled>
        </>
    )
}
import { Paper } from '@mui/material'
import { Searchbar } from '../../../components/Searchbar/Searchbar'
import * as S from './DashboardAlmox.styles'
import { DataGrid, GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid'
import { OpenModalIcon } from '../../../components/OpenModalIcon/OpenModalIcon'
import { useState } from 'react'
import { NoDataToShow } from '../../../components/NoDataToShow/NoDataToShow'

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
    const solicitacoes = JSON.parse(sessionStorage.getItem('Solicitacoes') || '[]');
    const EPIsCadastrados = JSON.parse(sessionStorage.getItem('EPIs cadastrados') || '[]');

    const getValidadeEPI = (cod: string) => {
        const epi = EPIsCadastrados.find((epi: EPIProps) => epi.codigo === cod);
        return epi ? epi.validade : 'N/A';
    };

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
                    // onClick={() =>  openModal(params.row.descricaoItem, params.row.id, params.row.status, params.row.validadeEPI)}
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
                {filteredRows === "[]" ? (
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
                ) : (
                    <NoDataToShow mainText='Não foram feitas solicitações!' />
                )}
                
            </S.MainStyled>
        </>
    )
}
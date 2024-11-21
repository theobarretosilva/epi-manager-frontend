import { Paper } from '@mui/material'
import { Searchbar } from '../../../components/Searchbar/Searchbar'
import * as S from './Solicitacoes.styled'
import { DataGrid, GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid'
import { OpenModalIcon } from '../../../components/OpenModalIcon/OpenModalIcon';
import { useState } from 'react';
import { DownloadSoliciIcon } from '../../../components/DownloadSoliciIcon/DownloadSoliciIcon';

interface SolicitacaoProps {
    id: string;
    item: string;
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

export const Solicitacoes = () => {
    const solicitacoes = JSON.parse(sessionStorage.getItem('Solicitacoes') || '[]');
    const EPIsCadastrados = JSON.parse(sessionStorage.getItem('EPIs cadastrados') || '[]');

    const getValidadeEPI = (cod: string) => {
        const epi = EPIsCadastrados.find((epi: EPIProps) => epi.codigo === cod);
        return epi ? epi.validade : 'N/A';
    };

    const getCAEPI = (cod: string) => {
        console.log('aiai uiui');
        console.log("codigo do epi", cod)
        const epi = EPIsCadastrados.find((epi: EPIProps) => epi.codigo === cod);
        console.log(epi)
        return epi.CA;
    }

    const getSolicitacao = (params: SolicitacaoProps) => {
        const solicitacao = solicitacoes.find((solicitacao: SolicitacaoProps) => solicitacao.id == params.id);
        console.log(solicitacao)
        return solicitacao;
    }

    const columns: GridColDef[] = [
        {
            field: 'open',
            type: 'actions',
            headerName: 'Abrir',
            getActions: (params: GridRowParams) => [
                <GridActionsCellItem
                key={0}
                icon={<OpenModalIcon />}
                label="Abrir"
                // onClick={() => openModal(getSolicitacao(params.row))}
                />,
            ],
            width: 80,
        },
        { field: 'id', headerName: 'ID', width: 200, align: 'center', headerAlign: 'center' },
        { field: 'descricaoItem', headerName: 'Descrição do Item', width: 255, align: 'center', headerAlign: 'center' },
        { field: 'prioridade', headerName: 'Prioridade', width: 130, align: 'center', headerAlign: 'center'},
        { field: 'status', headerName: 'Status', width: 130, align: 'center', headerAlign: 'center' },
        { field: 'validadeEPI', headerName: 'Validade EPI', width: 130, align: 'center', headerAlign: 'center' },
        { 
            field: 'download',
            type: 'actions',
            headerName: 'Baixar', 
            getActions: (params: GridRowParams) => [
                <GridActionsCellItem
                    key={0}
                    icon={<DownloadSoliciIcon />}
                    label="Abrir"
                    // onClick={() => openModal(getSolicitacao(params.row))}
                />,
            ],
            width: 80,
            align: 'center',
            headerAlign: 'center'
        }
    ];

    const rows = solicitacoes.map((solicitacao: SolicitacaoProps) => ({
        id: solicitacao.id,
        descricaoItem: solicitacao.item,
        prioridade: solicitacao.prioridade,
        status: solicitacao.status,
        validadeEPI: getValidadeEPI(solicitacao.codigoEPI),
    }));

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRows, setFilteredRows] = useState(rows);
    const handleSearch = (value: string) => {
        setSearchTerm(value);
        setFilteredRows(
        rows.filter(
            (row) =>
            row.descricaoItem.toLowerCase().includes(value.toLowerCase()) ||
            row.id.toLowerCase().includes(value.toLowerCase())
        )
        );
    };
    return(
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
    )
}
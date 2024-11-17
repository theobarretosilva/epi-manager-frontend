import { Paper } from '@mui/material';
import * as S from './SolicitacoesFunc.styles';
import { Searchbar } from '../../../components/Searchbar/Searchbar';
import { DataGrid, GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { OpenModalIcon } from '../../../components/OpenModalIcon/OpenModalIcon';
import { useState } from 'react';

export const SolicitacoesFunc = () => {
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
                    onClick={() => console.log('Abrindo modal para', params.row.id)}
                />
            ],
            width: 100
        },
        { field: 'id', headerName: 'ID', width: 220, align: 'center', headerAlign: 'center' },
        { field: 'descricaoItem', headerName: 'Descrição do Item', width: 220, align: 'center', headerAlign: 'center' },
        { field: 'status', headerName: 'Status', width: 220, align: 'center', headerAlign: 'center' },
        { field: 'validadeEPI', headerName: 'Validade EPI', width: 220, align: 'center', headerAlign: 'center' },
    ];

    const rows = [
        { id: 'SOL-24-01', descricaoItem: 'Abafadores de som', status: 'Pendente', validadeEPI: '17/11/2024' },
        { id: 'SOL-24-02', descricaoItem: 'Capacete de segurança', status: 'Aprovado', validadeEPI: '20/12/2024' },
        { id: 'SOL-24-03', descricaoItem: 'Óculos de proteção', status: 'Rejeitado', validadeEPI: '01/01/2025' },
        { id: 'SOL-24-04', descricaoItem: 'Luvas térmicas', status: 'Pendente', validadeEPI: '15/08/2025' },
        { id: 'SOL-24-05', descricaoItem: 'Máscaras respiratórias', status: 'Pendente', validadeEPI: '30/09/2025' },
    ];

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

    return (
        <S.MainStyled>
            <Searchbar onSearch={handleSearch}/>
            <Paper sx={{ height: '100%', width: '100%', fontSize: 14, mt: 2 }}>
                <DataGrid
                    rows={filteredRows}
                    columns={columns}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    pageSizeOptions={[5, 10]}
                    sx={{
                        border: 0,
                        '& .MuiDataGrid-cell': { textAlign: 'center' },
                        '& .MuiDataGrid-columnHeaders': { backgroundColor: '#f5f5f5' },
                    }}
                />
            </Paper>
        </S.MainStyled>
    );
};

import { Paper } from '@mui/material'
// import { BtnStyled } from '../../../components/BtnStyled/BtnStyled'
// import { InputStyled } from '../../../components/InputStyled/InputStyled'
import * as S from './SolicitarEPI.styles'
import { Searchbar } from '../../../components/Searchbar/Searchbar'
import { DataGrid, GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid'
import { OpenModalIcon } from '../../../components/OpenModalIcon/OpenModalIcon'

export const SolicitarEPI = () => {
    const paginationModel = { page: 0, pageSize: 5 };
    const columns: GridColDef[] = [
        {
            field: 'open',
            type: 'actions',
            headerName: 'Abrir',
            getActions: (params: GridRowParams) => [
                <GridActionsCellItem 
                    key={0}
                    icon={
                        <OpenModalIcon />
                    }
                    label='open'
                />
            ],
        },
        {field: 'id', headerName: 'ID', width: 320, align: 'center', headerAlign: 'center'},
        {field: 'descricaoItem', headerName: 'Descrição de Item', width: 320, align: 'center', headerAlign: 'center'},
        {field: 'status', headerName: 'Status', width: 320, align: 'center', headerAlign: 'center'}
    ];
    const rows = [
        { id: 'SOL-24-01', descricaoItem: 'Abafadores de som', status: 'Pendente'},
        { id: 'SOL-24-01', descricaoItem: 'Abafadores de som', status: 'Pendente',},
        { id: 'SOL-24-01', descricaoItem: 'Abafadores de som', status: 'Pendente',},
        { id: 'SOL-24-01', descricaoItem: 'Abafadores de som', status: 'Pendente',},
        { id: 'SOL-24-01', descricaoItem: 'Abafadores de som', status: 'Pendente',},
        { id: 'SOL-24-01', descricaoItem: 'Abafadores de som', status: 'Pendente',},
        { id: 'SOL-24-01', descricaoItem: 'Abafadores de som', status: 'Pendente',},
        { id: 'SOL-24-01', descricaoItem: 'Abafadores de som', status: 'Pendente',},
        { id: 'SOL-24-01', descricaoItem: 'Abafadores de som', status: 'Pendente',},
    ];


    return(
        <>
        
        </>
    )
}
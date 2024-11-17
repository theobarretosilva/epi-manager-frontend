import { Paper } from '@mui/material'
// import { BtnStyled } from '../../../components/BtnStyled/BtnStyled'
// import { InputStyled } from '../../../components/InputStyled/InputStyled'
import * as S from './SolicitarEPI.styles'
import { Searchbar } from '../../../components/Searchbar/Searchbar'
import { DataGrid, GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid'
import { OpenModalIcon } from '../../../components/OpenModalIcon/OpenModalIcon'

export const Solicitacoes = () => {
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
        <S.MainStyled>
            <Searchbar placeholder='Pesquise sua solicitação...' />
            {/* <S.BoxSolEPI>
                <S.TituloBox>Solicitar EPI</S.TituloBox>
                <S.LinhaTituloBox>‎</S.LinhaTituloBox>
                <InputStyled titulo='Código' tipo='number' placeholder='' />
                <InputStyled titulo='Quantidade' tipo='number' placeholder='' />
                <InputStyled titulo='Prioridade' tipo='text' placeholder='' />
                <br />
                <BtnStyled text='Solicitar' />
            </S.BoxSolEPI> */}
            {/* <S.BoxSolicitacoes> */}
                <Paper sx={{ height: '100%', width: '100%', fontSize: 5 }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        sx={{ border: 0 }}
                    />
                </Paper>
            {/* </S.BoxSolicitacoes> */}
        </S.MainStyled>
    )
}
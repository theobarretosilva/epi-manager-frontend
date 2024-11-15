import { Paper } from '@mui/material'
import { BtnStyled } from '../../../components/BtnStyled/BtnStyled'
import { InputStyled } from '../../../components/InputStyled/InputStyled'
import * as S from './SolicitarEPI.styles'
import { DataGrid } from '@mui/x-data-grid'

export const SolicitarEPI = () => {
    const paginationModel = { page: 0, pageSize: 5 };

    return(
        <S.MainStyled>
            <S.BoxSolEPI>
                <S.TituloBox>Solicitar EPI</S.TituloBox>
                <S.LinhaTituloBox>‎</S.LinhaTituloBox>
                <InputStyled titulo='Código' tipo='number' placeholder='' />
                <InputStyled titulo='Quantidade' tipo='number' placeholder='' />
                <InputStyled titulo='Prioridade' tipo='text' placeholder='' />
                <br />
                <BtnStyled text='Solicitar' />
            </S.BoxSolEPI>
            <S.BoxSolicitacoes>
                <Paper sx={{ height: '100%', width: '100%' }}>
                    <DataGrid
                        rows={}
                        columns={}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        sx={{ border: 0 }}
                    />
                </Paper>
            </S.BoxSolicitacoes>
        </S.MainStyled>
    )
}
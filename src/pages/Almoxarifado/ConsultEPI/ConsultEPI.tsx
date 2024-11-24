import { Paper } from '@mui/material'
import { Searchbar } from '../../../components/Searchbar/Searchbar'
import * as S from './ConsultEPI.styles'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useState } from 'react'
import { NoDataToShow } from '../../../components/NoDataToShow/NoDataToShow'
// import ReactModal from 'react-modal'
// import { InputDisable } from '../../../components/InputDisable/InputDisable'

interface EPIProps {
    descricao: string;
    codigo: string;
    CA: string;
    validade: string;
}

export const ConsultEPI = () => {
    // const [modalIsOpen, setModalIsOpen] = useState(false);
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 });
    const EPIList = JSON.parse(sessionStorage.getItem('EPIsCadastrados') || '[]');

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Código', width: 150, align: 'center', headerAlign: 'center'},
        { field: 'descricaoItem', headerName: 'Descrição do Item', width: 350, align: 'center', headerAlign: 'center' },
        { field: 'certificadoAprovacao', headerName: 'Certificado de Aprovação', width: 250, align: 'center', headerAlign: 'center' },
        { field: 'validade', headerName: 'Validade', width: 250, align: 'center', headerAlign: 'center'},
    ];

    const rows = EPIList.map((epi: EPIProps) => ({
        id: epi.codigo,
        descricaoItem: epi.descricao,
        ca: epi.CA,
        validade: epi.validade
    }));

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRows, setFilteredRows] = useState(rows);
    const handleSearch = (value: string) => {
        setSearchTerm(value);
        setFilteredRows(
            rows.filter(
                (row) =>
                    row.codigo.toLowerCase().includes(value.toLowerCase()) ||
                    row.descricaoItem.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    // const customStyles = {
    //     overlay: {
    //       backgroundColor: "rgba(0, 0, 0, 0.5)", // Altere a opacidade aqui (0.7 é 70% de opacidade)
    //     },
    //     content: {
    //       top: "50%",
    //       left: "50%",
    //       right: "auto",
    //       bottom: "auto",
    //       transform: "translate(-50%, -50%)",
    //       padding: "25px",
    //       borderRadius: "10px",
    //       backgroundColor: "#FCFCFC",
    //     },
    // };

    return(
        <S.MainStyled>
            <Searchbar placeholder='Pesquise pelo código ou nome' onSearch={handleSearch} />
            <S.ButtonStyled>+ Adicionar EPI</S.ButtonStyled>
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
                            '& .MuiDataGrid-root': { fontSize: '0.875rem' }
                        }}
                    />
                </Paper>
            ) : (
                <NoDataToShow mainText="Não foram adicionados EPI's!"  />
            )}
            
            {/* <ReactModal 
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
            >
                <S.MainWrapper>
                    <S.ImageContent onClick={() => setModalIsOpen(false)}>
                        <S.Image  src="../../src/assets/svg/Close.svg" />
                    </S.ImageContent>
                    <S.DivWrapper>
                        <InputDisable  text='12/05/2024' title="Data de Abertura" type="text"/>
                        <InputDisable  text='-' title="Data de Conclusão" type="text"/>
                        <InputDisable  text={modalStatus} title="Status" type="text"/>
                        <InputDisable  text={modalId} title="ID da Solicitação" type="text"/>
                        <InputDisable  text='Oliveira' title="Solicitante" type="text"/>
                        <InputDisable  text='Oliveira' title="Responsável" type="text"/>
                        <InputDisable  text="2" title="Quantidade" type="number"/>
                        <InputDisable  text={modalDescricao} title="Descrição do Item" type="text"/>
                        <InputDisable  text="326348" title="Código" type="text"/>
                        <SelectInput disable={true} text='Normal' title='Prioridade' />
                        <InputDisable  text='-' title="CA" type="text"/>
                        <InputDisable  text='' title="Data de Validade" type="text"/>
                        <InputDisable  text="-" title="Número de Patrimônio" type="text"/>
                    </S.DivWrapper>
                </S.MainWrapper>
            </ReactModal> */}
        </S.MainStyled>
    )
}
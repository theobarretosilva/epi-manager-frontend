import { Paper } from '@mui/material';
import * as S from './SolicitacoesFunc.styles';
import { Searchbar } from '../../../components/Searchbar/Searchbar';
import { DataGrid, GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { OpenModalIcon } from '../../../components/OpenModalIcon/OpenModalIcon';
import { useState } from 'react';
import ReactModal from 'react-modal';
import { InputDisable } from '../../../components/InputDisable/InputDisable';
import { SelectInput } from '../../../components/SelectInput/SelectInput';
import { useModalDetalhesSolicitacao } from '../../../hooks/useModalDetalhesSolicitacao';

interface SolicitacaoProps {
  id: string;
  item: string;
  status: string;
  codigoEPI: string;
}

interface EPIProps {
  descricao: string;
  codigo: string;
  CA: string;
  validade: string;
}

export const SolicitacoesFunc = () => {
  const { isOpen, item, id, status, validade, dataSolicitacao, solicitante, quantidade, codigoEPI, openModal, closeModal } = useModalDetalhesSolicitacao();

  const solicitacoes = JSON.parse(sessionStorage.getItem('Solicitacoes') || '[]');
  const EPIsCadastrados = JSON.parse(sessionStorage.getItem('EPIs cadastrados') || '[]');

  const getValidadeEPI = (cod: string) => {
    const epi = EPIsCadastrados.find((epi: EPIProps) => epi.codigo === cod);
    return epi ? epi.validade : 'N/A';
  };

  const getSolicitacao = (params: SolicitacaoProps) => {
    const solicitacao = solicitacoes.find((solicitacao) => solicitacao.id == params.id);
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
          onClick={() => openModal(getSolicitacao(params.row))}
        />,
      ],
      width: 100,
    },
    { field: 'id', headerName: 'ID', width: 220, align: 'center', headerAlign: 'center' },
    { field: 'descricaoItem', headerName: 'Descrição do Item', width: 220, align: 'center', headerAlign: 'center' },
    { field: 'status', headerName: 'Status', width: 220, align: 'center', headerAlign: 'center' },
    { field: 'validadeEPI', headerName: 'Validade EPI', width: 220, align: 'center', headerAlign: 'center' },
  ];

  const rows = solicitacoes.map((solicitacao: SolicitacaoProps) => ({
    id: solicitacao.id,
    descricaoItem: solicitacao.item,
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

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: '25px',
      borderRadius: '10px',
      backgroundColor: '#FCFCFC',
    },
  };

  return (
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
            <SelectInput disable={true} text="Normal" title="Prioridade" />
            <InputDisable text="-" title="CA" type="text" />
            <InputDisable text={getValidadeEPI(codigoEPI)} title="Data de Validade" type="text" />
            <InputDisable text="-" title="Número de Patrimônio" type="text" />
          </S.DivWrapper>
        </S.MainWrapper>
      </ReactModal>
    </S.MainStyled>
  );
};
import { Paper } from '@mui/material'
import { Searchbar } from '../../../components/Searchbar/Searchbar'
import * as S from './ConsultColab.styles'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useState } from 'react'

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

export const ConsultColab = () => {
    const mockColaboradores = [
        {
          id: '1',
          nome: 'Ana Clara Silva',
          matricula: '20230001',
          setor: 'Financeiro',
          cargo: 'Analista',
          email: 'ana.silva@empresa.com',
          hash: 'abc123',
          salt: 'salt123',
        },
        {
          id: '2',
          nome: 'João Pedro Santos',
          matricula: '20230002',
          setor: 'TI',
          cargo: 'Desenvolvedor',
          email: 'joao.santos@empresa.com',
          hash: 'def456',
          salt: 'salt456',
        },
        {
          id: '3',
          nome: 'Maria Luiza Costa',
          matricula: '20230003',
          setor: 'RH',
          cargo: 'Recrutadora',
          email: 'maria.costa@empresa.com',
          hash: 'ghi789',
          salt: 'salt789',
        },
        {
          id: '4',
          nome: 'Lucas Almeida',
          matricula: '20230004',
          setor: 'Marketing',
          cargo: 'Designer',
          email: 'lucas.almeida@empresa.com',
          hash: 'jkl012',
          salt: 'salt012',
        },
        {
          id: '5',
          nome: 'Gabriela Ferreira',
          matricula: '20230005',
          setor: 'Logística',
          cargo: 'Supervisor',
          email: 'gabriela.ferreira@empresa.com',
          hash: 'mno345',
          salt: 'salt345',
        },
    ];
    sessionStorage.setItem('Colaboradores cadastrados', JSON.stringify(mockColaboradores));
    console.log('Lista de colaboradores salva no sessionStorage!');
      
    const colaboradores = JSON.parse(sessionStorage.getItem('Colaboradores cadastrados') || '{}');
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 6 });

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100, align: 'center', headerAlign: 'center'},
        { field: 'matricula', headerName: 'Matrícula', width: 150, align: 'center', headerAlign: 'center' },
        { field: 'nome', headerName: 'Nome', width: 350, align: 'center', headerAlign: 'center' },
        { field: 'cargo', headerName: 'Cargo', width: 200, align: 'center', headerAlign: 'center'},
        { field: 'setor', headerName: 'Setor', width: 200, align: 'center', headerAlign: 'center' },
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
                <Searchbar placeholder='Pesquise pela matricula ou nome' onSearch={handleSearch} />
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
            </S.MainStyled>
        </>
    )
}
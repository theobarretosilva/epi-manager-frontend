// EditarColaborador.tsx
import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import { FormContainer, FormTitle, FormButton } from "./EditarColaborador.styles";

interface Colaborador {
  nome: string;
  matricula: string;
  setor: string;
  cargo: string;
  email: string;
  senha: string;
}

interface EditarColaboradorProps {
  colaborador: Colaborador;
  onSave: (updatedColaborador: Colaborador) => void; 
}

const EditarColaborador: React.FC<EditarColaboradorProps> = ({ colaborador, onSave }) => {
  const [nome, setNome] = useState(colaborador.nome);
  const [matricula, setMatricula] = useState(colaborador.matricula);
  const [setor, setSetor] = useState(colaborador.setor);
  const [cargo, setCargo] = useState(colaborador.cargo);
  const [email, setEmail] = useState(colaborador.email);
  const [senha, setSenha] = useState(colaborador.senha);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "nome":
        setNome(value);
        break;
      case "matricula":
        setMatricula(value);
        break;
      case "setor":
        setSetor(value);
        break;
      case "cargo":
        setCargo(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "senha":
        setSenha(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (!nome || !matricula || !setor || !cargo || !email || !senha) {
      alert("Por favor, preencha todos os campos.");
    } else {
      const updatedColaborador = { nome, matricula, setor, cargo, email, senha };
      onSave(updatedColaborador); 
      alert("Dados do colaborador atualizados com sucesso!");
    }
  };

  return (
    <FormContainer>
      <FormTitle variant="h5">Editar Colaborador</FormTitle>
      <Box component="form" onSubmit={(e) => e.preventDefault()}>
        <TextField
          label="Nome Completo"
          name="nome"
          value={nome}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Matrícula"
          name="matricula"
          value={matricula}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Setor"
          name="setor"
          value={setor}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Cargo"
          name="cargo"
          value={cargo}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Senha"
          name="senha"
          value={senha}
          onChange={handleChange}
          fullWidth
          type="password"
          variant="outlined"
          margin="normal"
        />
        <FormButton variant="contained" color="primary" onClick={handleSubmit}>
          Salvar
        </FormButton>
      </Box>
    </FormContainer>
  );
};

export default EditarColaborador;


import React, { useState } from "react";
import { TextField, Box } from "@mui/material"; 
import { FormContainer, FormTitle, FormButton } from "./AdicionarColaborador.styles"; 

const AdicionarColaborador: React.FC = () => {

  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [setor, setSetor] = useState("");
  const [cargo, setCargo] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


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
      console.log({ nome, matricula, setor, cargo, email, senha });
      alert("Colaborador adicionado com sucesso!");
    }
  };

  return (
    <FormContainer>
      <FormTitle variant="h5">Adicionar Colaborador</FormTitle>
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

export default AdicionarColaborador;

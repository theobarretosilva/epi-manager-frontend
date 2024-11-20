
import React, { useState } from "react";
import * as S from "./AdicionarColaborador.styles"; 
import { InputStyled } from "../InputStyled/InputStyled";
import { BtnStyled } from "../BtnStyled/BtnStyled";


const AdicionarColaborador = () => {

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome ||  !setor || !cargo || !email || !senha) {
      alert("Por favor, preencha todos os campos.");
    } else {
      console.log({ nome, matricula, setor, cargo, email, senha });
      alert("Colaborador adicionado com sucesso!");
    }
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.DivWrapper>
        <InputStyled 
          value={nome}
          tipo="text"
          titulo="Nome Completo"
          name="nome"
          handle={handleChange}
        />
        <InputStyled 
          value={matricula}
          tipo="text"
          titulo="Matrícula"
          name="matricula"
          handle={handleChange}
        />
        <InputStyled 
          value={setor}
          tipo="text"
          titulo="Setor"
          name="setor"
          handle={handleChange}
        />
        <InputStyled 
          value={cargo}
          tipo="text"
          titulo="Cargo"
          name="cargo"
          handle={handleChange}
        />
        <InputStyled 
          value={email}
          tipo="email"
          titulo="Email"
          name="email"
          handle={handleChange}
        />
        <InputStyled 
          value={senha}
          tipo="password"
          titulo="Senha"
          name="senha"
          handle={handleChange}
        />
      </S.DivWrapper>
        <BtnStyled type="submit" text="Salvar" />
    </S.FormContainer>
  );
};

export default AdicionarColaborador;

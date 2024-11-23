
import React, { useState } from "react";
import * as S from "./AdicionarColaborador.styles"; 
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputStyled } from "../InputStyled/InputStyled";
import { BtnStyled } from "../BtnStyled/BtnStyled";
import { SelectStyled } from "../SelectStyled/SelectStyled";

const AdicionarColaborador: React.FC<S.AddColaboradorProps> = ({setModalIsOpen}) => {
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

  const generateHashWithSalt = async (password: string) => {
    const encoder = new TextEncoder();
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const passwordBytes = encoder.encode(password);
    const combined = new Uint8Array([...passwordBytes, ...salt]);

    const hashBuffer = await crypto.subtle.digest("SHA-256", combined);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    const saltHex = Array.from(salt).map((b) => b.toString(16).padStart(2, "0")).join("");

    return { hash: hashHex, salt: saltHex };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !matricula || !setor || !cargo || !email || !senha) {
      toast.warning("Por favor, preencha todos os campos.", {
        autoClose: 6000,
        closeOnClick: true,
      });
    } else {
      try {
        const { hash, salt } = await generateHashWithSalt(senha);

        const colaborador = {
          id: matricula,
          nome,
          matricula,
          setor,
          cargo,
          email,
          hash,
          salt,
        };

        const colaboradores = JSON.parse(sessionStorage.getItem("ColaboradoresCadastrados") || "[]");
        colaboradores.push(colaborador);
        sessionStorage.setItem("ColaboradoresCadastrados", JSON.stringify(colaboradores));

        toast.success("Colaborador adicionado com sucesso!", {
          autoClose: 6000,
          closeOnClick: true,
        });

        setModalIsOpen(false);
      } catch (error) {
        console.error("Erro ao gerar o hash:", error);
        toast.error("Ocorreu um erro ao salvar o colaborador");
      }
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
        <SelectStyled 
          value={cargo}
          titulo="Cargo"
          name="cargo"
          onChange={(value) => setCargo(value)}
          options={["Administrador", "Almoxarifado", "Colaborador"]}
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
        <BtnStyled onClick={() => {}} type="submit" text="Salvar" />
    </S.FormContainer>
  );
};

export default AdicionarColaborador;

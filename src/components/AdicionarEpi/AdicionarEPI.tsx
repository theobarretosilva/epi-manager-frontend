import React, { useState } from "react";
import { BtnStyled } from "../BtnStyled/BtnStyled";
import * as S from "./AdicionarEpi.styles"
import { toast } from "react-toastify";
import { InputStyled } from "../InputStyled/InputStyled";

const AdicionarEpi: React.FC<S.AddColaboradorProps> = ({setModalIsOpen}) => {
  const [descricao, setDescricao] = useState("");
  const [codigo, setCodigo] = useState("");
  const [ca, setCa] = useState("");
  const [validade, setValidade] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "descricao":
        setDescricao(value);
        break;
      case "codigo":
        setCodigo(value);
        break;
      case "ca":
        setCa(value);
        break;
      case "validade":
        setValidade(value);
        break;
      default:
        break;
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!descricao || !codigo ||  !ca || !validade ) {
      toast.warning("Por favor, preencha todos os campos.", {
        autoClose: 6000,
        closeOnClick: true,
      });
    } else {
      console.log({ descricao, codigo, ca, validade });
      toast.success("Ação realizada com sucesso!", {
        autoClose: 6000,
        closeOnClick: true,
      });
      setModalIsOpen(false)
    }
  };

  return (
    <S.FormContainer onSubmit={handleSave}>
    <S.DivWrapper>
      <InputStyled 
        value={descricao}
        tipo="text"
        titulo="Descrição do Item"
        name="descricao"
        handle={handleChange}
      />
      <InputStyled 
        value={codigo}
        tipo="text"
        titulo="Código"
        name="codigo"
        handle={handleChange}
      />
      <InputStyled 
        value={ca}
        tipo="text"
        titulo="CA"
        name="ca"
        handle={handleChange}
      />
      <InputStyled 
        value={validade}
        tipo="text"
        titulo="Data de Validade"
        name="validade"
        handle={handleChange}
      />
    </S.DivWrapper>
      <BtnStyled type="submit" text="Salvar" />
  </S.FormContainer>
  );
};

export default AdicionarEpi;

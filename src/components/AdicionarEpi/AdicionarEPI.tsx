import React, { useState } from "react";
import { BtnStyled } from "../BtnStyled/BtnStyled";
import * as S from "./AdicionarEpi.styles"
import { toast } from "react-toastify";
import { InputStyled } from "../InputStyled/InputStyled";

const AdicionarEpi: React.FC<S.AddColaboradorProps> = ({setModalIsOpen}) => {
  const [descricao, setDescricao] = useState("");
  const [codigo, setCodigo] = useState("");
  const [certificadoAprovacao, setCertificadoAprovacao] = useState("");
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
        setCertificadoAprovacao(value);
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
    if (!descricao || !codigo ||  !certificadoAprovacao || !validade ) {
      toast.warning("Por favor, preencha todos os campos.", {
        autoClose: 6000,
        closeOnClick: true,
      });
    } else {
      try {
        const epi = {
          descricao,
          codigo,
          certificadoAprovacao,
          validade
        }

        const epis = JSON.parse(sessionStorage.getItem("EPIsCadastrados") || "[]");
        epis.push(epi);
        sessionStorage.setItem("EPIsCadastrados", JSON.stringify(epis));
        console.log({ descricao, codigo, certificadoAprovacao, validade });
        toast.success("Ação realizada com sucesso!", {
          autoClose: 6000,
          closeOnClick: true,
        });
        setModalIsOpen(false)
      } catch (error) {
        console.log("Não foi possível salvar EPI", error);
        toast.error("Ocorreu um erro ao salvar o EPI");
      }
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
        value={certificadoAprovacao}
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
      <BtnStyled onClick={() => {}} type="submit" text="Salvar" />
  </S.FormContainer>
  );
};

export default AdicionarEpi;

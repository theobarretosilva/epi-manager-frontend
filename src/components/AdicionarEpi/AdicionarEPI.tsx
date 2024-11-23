import React, { useState } from "react";
import { BtnStyled } from "../BtnStyled/BtnStyled";
import * as S from "./AdicionarEpi.styles"
import { toast } from "react-toastify";
import { InputStyled } from "../InputStyled/InputStyled";

const AdicionarEpi: React.FC<S.AddEPIProps> = ({setModalIsOpen, onAdd}) => {
  const [descricaoItem, setDescricaoItem] = useState("");
  const [codigo, setCodigo] = useState("");
  const [certificadoAprovacao, setCertificadoAprovacao] = useState("");
  const [validade, setValidade] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "descricaoItem":
        setDescricaoItem(value);
        break;
      case "codigo":
        setCodigo(value);
        break;
      case "certificadoAprovacao":
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
    if (!descricaoItem || !codigo ||  !certificadoAprovacao || !validade ) {
      toast.warning("Por favor, preencha todos os campos.", {
        autoClose: 6000,
        closeOnClick: true,
      });
    } else {
      try {
        const epi = {
          id: codigo,
          descricaoItem,
          codigo,
          certificadoAprovacao,
          validade
        }
        onAdd(epi);

        const epis = JSON.parse(sessionStorage.getItem("EPIsCadastrados") || "[]");
        epis.push(epi);
        sessionStorage.setItem("EPIsCadastrados", JSON.stringify(epis));
        console.log({ descricaoItem, codigo, certificadoAprovacao, validade });
        toast.success("EPI adicionado com sucesso!", {
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
        value={descricaoItem}
        tipo="text"
        titulo="Descrição do Item"
        name="descricaoItem"
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
        titulo="Certificado de Aprovação"
        name="certificadoAprovacao"
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

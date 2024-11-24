import { toast } from "react-toastify";
import * as S from "./AprovarSolicitacao.styles"
import { AprovarSolicitacoesProps } from "./AprovarSolicitacao.styles";
import { useState } from "react";
import { BtnStyled } from "../BtnStyled/BtnStyled";
import { SelectInput } from "../SelectInput/SelectInput";
import { InputDisable } from "../InputDisable/InputDisable";
import useHandleFormSolicitarEPI from "../../hooks/useHandleFormSolicitarEPI";
import { InputStyled } from "../InputStyled/InputStyled";

export const AprovarSolicitacao: React.FC<AprovarSolicitacoesProps> = ({setModalIsOpen, id}) => {
    const [dataAbertura, setDataAbertura] = useState("");
    const [dataConclusao, setDataConclusao] = useState("");
    const [status, setStatus] = useState("");
    const [idSolicitacao, setIdSolicitacao] = useState("");
    const [solicitante, setSolicitante] = useState("");
    const [descricaoItem, setDescricaoItem] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [certificadoAprovacao, setCertificadoAprovacao] = useState("");
    const [prioridade, setPrioridade] = useState("");
    const [patrimonio, setPatrimonio] = useState("");
    const [codigo, setCodigo] = useState("");
    const [estado, setEstado] = useState("");

    const { formData, updateField, submitForm } = useHandleFormSolicitarEPI();

    const solicitaçoes = JSON.parse(sessionStorage.getItem("Solicitacoes") || "[]");
    const solicitacao = solicitaçoes.filter((element)=> element.id == id);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      switch (name) {
        case "prioridade":
          setPrioridade(value);
          break;
        case "patrimonio":
          setPatrimonio(value);
          break;
        default:
          break;
      }
    };
    

    const handleSave = (e: React.FormEvent) => {
      e.preventDefault();
      switch (estado) {
        case "Aprovar":
          if (!prioridade ||  !patrimonio ) {
            toast.warning("Por favor, preencha todos os campos.", {
              autoClose: 6000,
              closeOnClick: true,
            });
          } else {
            try {
              updateField('status', 'Aprovada')
              submitForm();
              toast.success("Solicitação Aprovada!", {
                autoClose: 6000,
                closeOnClick: true,
              });
              setModalIsOpen(false)
            } catch (error) {
              console.log("Não foi possível salvar EPI", error);
              toast.error("Ocorreu um erro ao salvar o EPI");
            }
          }
          break;
        case "Recusar":
          updateField('status', 'Recusada')
          toast.error("Solicitação Recusada!", {
            autoClose: 6000,
            closeOnClick: true,
          });
          setModalIsOpen(false);
      }
      };
    return (
       <S.FormContainer onSubmit={handleSave}>
        <S.DivWrapper>
        <InputDisable 
              text={solicitacao.dataSolicitacao}
              type="text"
              title="Data de Abertura"
              name="dataAbertura"
          />
          <InputDisable 
              text={dataConclusao}
              type="text"
              title="Data de Conclusão"
              name="dataConclusao"
          />
          <InputDisable 
              text={formData.status}
              type="text"
              title="Status"
              name="dataConclusao"
          />
          <InputDisable 
            text={idSolicitacao}
            type="text"
            title="ID da Solicitação"
            name="idSolicitacao"
          />
          <InputDisable 
            text={solicitante}
            type="text"
            title="Solicitante"
            name="solicitante"
          />
          <InputDisable 
            text={descricaoItem}
            type="text"
            title="Descrição do Item"
            name="descricaoItem"
          />
          <InputDisable 
            text={codigo}
            type="text"
            title="Código"
            name="codigo"
          />
          <SelectInput text={prioridade} title="Prioridade" disable={false} handle={handleChange}/> {/* Arrumar para receber valor*/}
          <InputStyled 
            value={patrimonio}
            tipo="text"
            titulo="Número de Patrimônio"
            name="patrimonio"
            handle={handleChange}
          />
        </S.DivWrapper>
        <S.DivFlex>
          <BtnStyled onClick={() => setEstado('Aprovar')} type="submit" text="Aprovar" />
          <S.ButtonRecuse onClick={()=> setEstado('Recusar')} >Recusar</S.ButtonRecuse>
        </S.DivFlex>
       </S.FormContainer>
    )
}
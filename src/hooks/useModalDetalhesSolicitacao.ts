import { useState } from "react";

interface ModalProps {
  item: string;
  id: string;
  status: string;
  dataSolicitacao: string;
  solicitante: string;
  quantidade: string;
  codigoEPI: string;
  numeroPatrimonio: string;
  prioridade: string;
}

export const useModalDetalhesSolicitacao = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState("");
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const [dataSolicitacao, setdataSolicitacao] = useState("");
  const [solicitante, setSolicitante] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [codigoEPI, setCodigoEPI] = useState("");
  const [numeroPatrimonio, setNumeroPatrimonio] = useState("");
  const [prioridade, setPrioridade] = useState("");

  const openModal = ({ item, id, status, dataSolicitacao, solicitante, quantidade, codigoEPI, numeroPatrimonio, prioridade }: ModalProps) => {
    setItem(item);
    setId(id);
    setStatus(status);
    setdataSolicitacao(dataSolicitacao);
    setSolicitante(solicitante);
    setQuantidade(quantidade);
    setCodigoEPI(codigoEPI);
    setNumeroPatrimonio(numeroPatrimonio)
    setPrioridade(prioridade);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    item,
    id,
    status,
    dataSolicitacao,
    solicitante,
    quantidade,
    codigoEPI,
    numeroPatrimonio,
    prioridade,
    openModal,
    closeModal,
  };
};
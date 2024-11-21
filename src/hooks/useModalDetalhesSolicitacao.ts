import { useState } from "react";

interface ModalProps {
  item: string;
  id: string;
  status: string;
  validadeEPI: string;
  dataSolicitacao: string;
  solicitante: string;
  quantidade: string;
  codigoEPI: string;
}

export const useModalDetalhesSolicitacao = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState("");
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const [validade, setValidade] = useState("");
  const [dataSolicitacao, setdataSolicitacao] = useState("");
  const [solicitante, setSolicitante] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [codigoEPI, setCodigoEPI] = useState("");

  const openModal = ({ item, id, status, validadeEPI, dataSolicitacao, solicitante, quantidade, codigoEPI }: ModalProps) => {
    setItem(item);
    setId(id);
    setStatus(status);
    setValidade(validadeEPI);
    setdataSolicitacao(dataSolicitacao);
    setSolicitante(solicitante);
    setQuantidade(quantidade);
    setCodigoEPI(codigoEPI);
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
    validade,
    dataSolicitacao,
    solicitante,
    quantidade,
    codigoEPI,
    openModal,
    closeModal,
  };
};

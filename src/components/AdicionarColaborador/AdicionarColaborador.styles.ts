import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 600px;
  padding: 2rem;
  background-color: transparent;
  border-radius: 8px;
  width: 60vw;
  height: 80vh;

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    width: 90vw;
    padding: 1.5rem;
  }
`;

export const DivWrapper = styled.div`
  padding-bottom: 40px;
  display: flex;
  flex-wrap: wrap; /* Permite quebra de linha */
  gap: 16px; /* Espaçamento entre os itens */

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    width: 90vw;
    padding: 1.5rem;
  }
`;

export interface Colaborador {
  id: string;
  nome: string;
  matricula: string;
  setor: string;
  cargo: string;
  email: string;
  hash: string;
  salt: string;
}


export interface AddColaboradorProps {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onAdd: (e: Colaborador) => void;
}


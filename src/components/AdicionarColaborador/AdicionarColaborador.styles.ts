import styled from "styled-components";
import { Container, Typography, Button } from "@mui/material";

export const FormContainer = styled.form`
  max-width: 600px;
  margin-top: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    width: 90vw;
    padding: 1.5rem;
  }
`;

export const DivWrapper = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap; /* Permite quebra de linha */
  gap: 16px; /* Espaçamento entre os itens */

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    width: 90vw;
    padding: 1.5rem;
  }
`;


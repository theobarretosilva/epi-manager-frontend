import styled from "styled-components";
import { Button, Container } from "@mui/material";

export const FormContainer = styled(Container)`
  max-width: 600px;
  margin-top: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (max-width: 768px) {
    width: 90vw;
    padding: 1.5rem;
  }
`;

export const FormButton = styled(Button)`
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  text-transform: none;

  &:hover {
    background-color: #1976d2; /* Cor de hover para salvar */
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem;
  }
`;

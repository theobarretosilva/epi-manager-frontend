import styled from "styled-components";
import { Container, Typography, Button } from "@mui/material";

export const FormContainer = styled(Container)`
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

export const FormTitle = styled(Typography)`
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.6rem;
  color: #333;

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;


export const FormButton = styled(Button)`
  margin-top: 1rem;
  width: 100%;
  padding: 0.8rem;
  font-size: 1.1rem;
  text-transform: none;

  &:hover {
    background-color: #4caf50;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.7rem;
  }
`;

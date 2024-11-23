import styled from "styled-components";
import { Box, Button } from "@mui/material";

export const ModalContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3); /* Fundo semitransparente */
`;

export const ModalContent = styled(Box)`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  width: 400px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px;
`;

export const ModalButton = styled(Button)`
  width: 48%;
  padding: 1rem;
  font-size: 1rem;
  text-transform: none;

  &:first-child {
    margin-right: 10px;
  }

  &:hover {
    background-color: #1976d2;
  }
`;


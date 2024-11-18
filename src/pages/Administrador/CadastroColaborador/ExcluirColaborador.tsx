
import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from "@mui/material"; 
import { FormContainer, FormButton } from "./ExcluirColaborador.styles";

interface ExcluirColaboradorProps {
  colaboradorId: string; 
  onDelete: (colaboradorId: string) => void; 
}

const ExcluirColaborador: React.FC<ExcluirColaboradorProps> = ({ colaboradorId, onDelete }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    onDelete(colaboradorId);
    setOpen(false); 
  };

  return (
    <FormContainer>
      <FormButton variant="contained" color="secondary" onClick={handleClickOpen}>
        Excluir Colaborador
      </FormButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            <strong>Você deseja excluir esse item?</strong>
          </Typography>
          <Typography variant="body1">
            Ao realizar essa operação não é possível rever a ação ou recuperar os dados deletados.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Aprovar
          </Button>
        </DialogActions>
      </Dialog>
    </FormContainer>
  );
};

export default ExcluirColaborador;

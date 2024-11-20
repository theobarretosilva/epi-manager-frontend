import React, { useState } from "react";
import { Modal, Typography, Box, Button } from "@mui/material";
import { ModalContainer, ModalContent, ModalButton } from "./ExcluirEPI.styles"; 

interface ExcluirEpi {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ExcluirEpi: React.FC<ExcluirEpi> = ({ open, onClose, onConfirm }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <ModalContainer>
        <ModalContent>
          <Typography variant="h6" component="div" id="modal-title" fontWeight="bold">
            Você deseja excluir esse item?
          </Typography>

          <Typography variant="body2" id="modal-description" mt={2}>
            Ao realizar essa operação, não é possível rever a ação ou recuperar os dados deletados.
          </Typography>

          <Box mt={3} display="flex" justifyContent="space-between">
            <ModalButton variant="contained" color="primary" onClick={onConfirm}>
              Aprovar
            </ModalButton>
            <ModalButton variant="outlined" color="secondary" onClick={onClose}>
              Cancelar
            </ModalButton>
          </Box>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleConfirmDelete = () => {
    console.log("EPI excluído!");
    setOpenModal(false);
  };

  return (
    <div>
      <h1>Excluir EPI</h1>
      <Button variant="contained" color="secondary" onClick={handleOpenModal}>
        Excluir EPI
      </Button>

      <ExcluirEpi
        open={openModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default App;

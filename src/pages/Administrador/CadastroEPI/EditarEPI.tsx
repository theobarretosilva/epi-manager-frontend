import React, { useState, useEffect } from "react";
import { TextField, Typography, Box } from "@mui/material";
import { FormContainer, FormButton } from "./EditarEPI.styles";

interface EpiFormData {
  descricao: string;
  codigo: string;
  ca: string;
  validade: string;
}

interface EditarEpiProps {
  epiId: string; 
}

const EditarEpi: React.FC<EditarEpiProps> = ({ epiId }) => {
  const [formData, setFormData] = useState<EpiFormData>({
    descricao: "",
    codigo: "",
    ca: "",
    validade: "",
  });

  useEffect(() => {
    if (epiId) {
      setFormData({
        descricao: "Máscara de proteção",
        codigo: "123456",
        ca: "7890",
        validade: "2025-12-31",
      });
    }
  }, [epiId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log("EPI Editado:", formData);
    alert("EPI editado com sucesso!");
  };

  return (
    <FormContainer>
      <Typography variant="h5" gutterBottom align="center">
        Editar EPI
      </Typography>

      <form noValidate autoComplete="off">
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: 2 }}>
          <Box>
            <TextField
              label="Descrição do Item"
              variant="outlined"
              fullWidth
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            <TextField
              label="Código"
              variant="outlined"
              fullWidth
              name="codigo"
              value={formData.codigo}
              onChange={handleChange}
            />
            <TextField
              label="CA"
              variant="outlined"
              fullWidth
              name="ca"
              value={formData.ca}
              onChange={handleChange}
            />
          </Box>

          <Box>
            <TextField
              label="Data de Validade"
              variant="outlined"
              fullWidth
              name="validade"
              type="date"
              value={formData.validade}
              onChange={handleChange}
            />
          </Box>

          <Box>
            <FormButton variant="contained" color="primary" onClick={handleSave}>
              Salvar
            </FormButton>
          </Box>
        </Box>
      </form>
    </FormContainer>
  );
};

export default EditarEpi;

import React, { useState } from "react";
import { TextField, Typography, Box } from "@mui/material";
import { FormContainer, FormButton } from "./AdicionarEpi.styles"; 

interface EpiFormData {
  descricao: string;
  codigo: string;
  ca: string;
  validade: string;
}

const AdicionarEpi: React.FC = () => {
  const [formData, setFormData] = useState<EpiFormData>({
    descricao: "",
    codigo: "",
    ca: "",
    validade: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log("EPI salvo:", formData);
    alert("EPI salvo com sucesso!");
  };

  return (
    <FormContainer>
      <Typography variant="h5" gutterBottom align="center">
        Adicionar EPI
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
              InputLabelProps={{
                shrink: true,
              }}
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

export default AdicionarEpi;

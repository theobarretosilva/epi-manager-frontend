import { useState, useEffect } from 'react';

interface FormData {
    id: string;
    solicitante: string;
    item: string;
    codigoEPI: string;
    prioridade: string;
    quantidade: number;
}

const useHandleFormSolicitarEPI = () => {
    const [formData, setFormData] = useState<FormData>({
        id: '',
        solicitante: '',
        item: '',
        codigoEPI: '',
        prioridade: '',
        quantidade: 0,
    });

    const generateUniqueID = () => {
        const now = new Date();
        // Exemplo de código baseado na data (ano-mês-dia-hora-minuto-segundo)
        return `SOL-${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
    };

    useEffect(() => {
        // Gerar o ID da solicitação quando o formulário for carregado
        const newId = generateUniqueID();
        setFormData(prev => ({
            ...prev,
            id: newId,
        }));
    }, []); // Esse efeito só será executado uma vez ao carregar o componente

    const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    const submitForm = () => {
        try {
            // Obter os dados atuais do sessionStorage
            const storedData = sessionStorage.getItem('Solicitacoes');
            const solicitacoes = storedData ? JSON.parse(storedData) : [];

            // Adicionar a nova solicitação
            const updatedSolicitacoes = [...solicitacoes, formData];

            // Atualizar o sessionStorage
            sessionStorage.setItem('Solicitacoes', JSON.stringify(updatedSolicitacoes));

            console.log('Dados enviados com sucesso:', updatedSolicitacoes);
        } catch (error) {
            console.error('Erro ao salvar os dados:', error);
        }
    };

    return { formData, updateField, submitForm };
};

export default useHandleFormSolicitarEPI;

import { useState, useEffect } from 'react';

interface FormData {
    id: string;
    solicitante: string;
    item: string;
    codigoEPI: string;
    prioridade: string;
    quantidade: number;
    status: string;
}

const useHandleFormSolicitarEPI = () => {
    const [formData, setFormData] = useState<FormData>({
        id: '',
        solicitante: '',
        item: '',
        codigoEPI: '',
        prioridade: '',
        quantidade: 0,
        status: 'Pendente'
    });

    const generateUniqueID = () => {
        const now = new Date();
        return `SOL-${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
    };

    useEffect(() => {
        const newId = generateUniqueID();
        setFormData(prev => ({
            ...prev,
            id: newId,
        }));
    }, []);

    const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    const submitForm = () => {
        try {
            const storedData = sessionStorage.getItem('Solicitacoes');
            const solicitacoes = storedData ? JSON.parse(storedData) : [];

            const updatedSolicitacoes = [...solicitacoes, formData];

            sessionStorage.setItem('Solicitacoes', JSON.stringify(updatedSolicitacoes));

            console.log('Dados enviados com sucesso:', updatedSolicitacoes);
        } catch (error) {
            console.error('Erro ao salvar os dados:', error);
        }
    };

    return { formData, updateField, submitForm };
};

export default useHandleFormSolicitarEPI;

import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 600px;
  padding: 2rem;
  background-color: transparent;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 90vw;
    padding: 1.5rem;
  }
`;

export const DivWrapper = styled.div`
  padding-bottom: 40px;
  display: flex;
  flex-wrap: wrap; 
  gap: 16px;

  @media (max-width: 768px) {
    width: 90vw;
    padding: 1.5rem;
  }
`;

export interface AddColaboradorProps {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

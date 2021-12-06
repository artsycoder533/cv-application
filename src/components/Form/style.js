import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1100px; 
  width: 90vw;
  border: 2px solid red;
  border-radius: 8px;
  padding: 3rem;
`;

export const EducationForm = styled(StyledForm)`
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;


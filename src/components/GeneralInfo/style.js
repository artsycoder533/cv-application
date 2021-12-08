import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 75px - 100px - 120px);
  display: grid;
  grid-template-rows: auto 1fr;
  position: fixed;
  top: 175px;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* padding: 3rem; */
  border: 2px solid red;
  /* /height: 100%; */
`;

export const EntryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  border-radius: 10px;
  padding: 3rem;
  background: white;
`;

export const GeneralForm = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1400px;
  width: 90vw;
  border-radius: 8px;
  padding: 3rem;
`;
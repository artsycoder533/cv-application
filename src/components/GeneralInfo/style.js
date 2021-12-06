import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px - 75px - 100px);
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  gap: 8rem;
  padding: 2rem;
  height: 120px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
  background: white;
  border-top: 1px solid lightgray;

  @media print {
    display: none;
  }
`;


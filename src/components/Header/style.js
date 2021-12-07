import styled from "styled-components";

export const Container = styled.header`
  height: 75px;
  background-image: linear-gradient(to right, blue, purple);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Title = styled.h1`
    font-size: 2rem;
    letter-spacing: 2px;
    font-family: 'Roboto';
`;
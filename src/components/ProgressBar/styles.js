import styled from "styled-components";
import { FiCheck } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 1rem;
  height: 100px;
  position: fixed;
  top: 75px;
  background: white;
`;

export const Circle = styled.div`
  border: 1px solid blue;
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-size: 25px;
  font-weight: bold;
  background: blue;
  color: white;
`;

export const Step = styled.div`
    display: grid;
    place-items: center;
`

export const StyledFiCheck = styled(FiCheck)`
    font-weight: bold;
`
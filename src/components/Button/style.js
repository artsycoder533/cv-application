import styled from 'styled-components';
import { FiTrash2 } from "react-icons/fi";

export const StyledButton = styled.button`
    width: 10rem;
    padding: 0.75rem 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    background-image: linear-gradient(to right, blue, purple);
    color: white;
    cursor: pointer;
    letter-spacing: 1px;
    
    &:hover {
        opacity: 0.7;
    }
`;

export const PlainButton = styled(StyledButton)`
  background: transparent;
  width: 12rem;
  border: 2px solid white;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  align-self: right;
`;

export const StyledTrashIcon = styled(FiTrash2)`
  font-size: 1.5rem;
  color: red;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const AbsoluteIconButton = styled(StyledButton)`
  position: absolute;
  right: 10px;
  top: 37px;
  z-index: 2;
`;

export const AbsoluteTrashButton = styled(IconButton)`
  position: absolute;
  right: 60px;
  padding: 1rem;
`;

export const AbsoluteSkillsTrashButton = styled(StyledButton)`
  background: none;
  width: 5rem;
`;
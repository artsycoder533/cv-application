import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 75px;
    width: 100%;
    height: 100%;
    border: 2px solid red;
    padding: 3rem;
`;

export const StyledTitle = styled.h1`
    font-size: 2rem;
    text-align: center;
`;

export const StyledSectionTitle = styled.h2`
    font-size: 1.5rem;
`;

export const HeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1rem;
`;

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
`;

export const JobTitle = styled.h3`
    padding: 1rem 0;
`;

export const JobDate = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
`;

export const Description = styled.p`
  padding-bottom: 1rem;
`;
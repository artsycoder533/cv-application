import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px - 75px - 100px);
  display: grid;
  grid-template-rows: auto 1fr; 
  /* border: 2px solid green; */
  position: fixed;
  top: 175px;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* padding: 3rem; */
  border: 2px solid blue;
`;

export const EntryWrapper = styled.div`
  /* display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  padding: 3rem;
  gap: 2rem; */

  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  display: flex;
  
  align-items: center;
  /* gap: 2rem; */
  border-radius: 10px;
  padding:  3rem;
  background: white;
`;

export const SkillsForm = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1400px;
  width: 90vw;
  border-radius: 8px;
  padding: 3rem 0;
  background: white;
  align-items: center;
  gap: 2rem; */

  /* display: grid;
  grid-template-columns: 1fr 1fr; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1400px;
  width: 90vw;
  border-radius: 8px;
  padding: 3rem;
  overflow-y: scroll;
  height: calc(100vh - 120px - 175px - 121px);
  /* background: white; */
`;

export const StyledFormWithScroll = styled.form`
  /* width: 100%; */
  display: grid;
  gap: 2rem;
  background: white;
  padding: 3rem 0;
  overflow-y: scroll;
  height: calc(100vh - 120px - 175px - 121px);
  position: fixed;
  bottom: 120px;
  top: 295px;
  max-width: 1400px;
  width: 90vw;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 2px solid black;
`;


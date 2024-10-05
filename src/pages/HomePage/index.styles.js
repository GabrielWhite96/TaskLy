import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  background-color: #121212; /* Fundo escuro */
  font-family: Arial, sans-serif; /* Familia de fonte */
`;
export const LeftMenu = styled.div`
  max-height: 100vh;
  width: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  background-color: #0A0A0A;
`;
export const MainContainer = styled.div`
  height: 100vh;
  width: 12%;
  background-color: #161616;
`;
export const TasksContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #1F1F1F;
  border-left: 1px solid #383838;
`;
export const OneTaskContainer = styled.div`
  height: 100vh;
  width: 34%;
  border-left: 1px solid #383838;
  background-color: #1F1F1F;
`;

export const ButtonLeftMenu = styled.div`
  margin-top: 30px;
  
`
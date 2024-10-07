import styled from "styled-components";

export const ListContainer = styled.div`
  font-family: "Anek Bangla", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleList = styled.div`
  font-family: "Anek Bangla", sans-serif;
  color: #fff;
  font-size: 25px;
  margin: 26px;
`;

export const AddButton = styled.button`
  font-family: "Anek Bangla", sans-serif;
  padding: 8px 12px;
  background-color: #ff6600;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #e68c00;
  }
`;
// Estiliza o input de texto para adicionar nova tarefa
export const TitleInput = styled.input`
  font-family: "Anek Bangla", sans-serif;
  padding: 8px;
  color: #fff;
  margin-right: 10px;
  border: 1px solid #2f2f2f;
  background-color: #2f2f2f;
  border-radius: 4px;
  font-size: 16px;
  width: 20%;
  box-sizing: border-box;

  &:focus {
    border-color: #e68c00;
    outline: none;
  }
`;

export const TaskInput = styled.input`
  font-family: "Anek Bangla", sans-serif;
  padding: 8px;
  color: #fff;
  margin-right: 10px;
  border: 1px solid #2f2f2f;
  background-color: #2f2f2f;
  border-radius: 4px;
  font-size: 16px;
  width: 50%;
  box-sizing: border-box;

  &:focus {
    border-color: #e68c00;
    outline: none;
  }
`;

// Estiliza o input de data
export const DateInput = styled.input`
  font-family: "Anek Bangla", sans-serif;
  color: #646464;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #2f2f2f;
  background-color: #2f2f2f;
  border-radius: 4px;
  font-size: 16px;
  width: 140px;
  box-sizing: border-box;

  &:focus {
    border-color: #e68c00;
    outline: none;
  }
`;
export const TimeInput = styled.input`
  font-family: "Anek Bangla", sans-serif;
  color: #646464;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #2f2f2f;
  background-color: #2f2f2f;
  border-radius: 4px;
  font-size: 16px;
  width: 140px;
  box-sizing: border-box;

  &:focus {
    border-color: #e68c00;
    outline: none;
  }
`;

export const AddTaskContainer = styled.div`
  font-family: "Anek Bangla", sans-serif;
  display: flex;
  margin-left: 20px;
  margin-bottom: 20px;
`;

import styled from "styled-components";

export const ListContainer = styled.div`
  font-family: "Anek Bangla", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleList = styled.div`
  font-family: "Anek Bangla", sans-serif;
  color: ${({ theme }) => theme.colors.text};
  font-size: 25px;
  margin: 26px;
`;

export const AddButton = styled.button`
  font-family: "Anek Bangla", sans-serif;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 15px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
// Estiliza o input de texto para adicionar nova tarefa
export const TitleInput = styled.input`
  font-family: "Anek Bangla", sans-serif;
  padding: 8px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 10px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundInput};
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  border-radius: 4px;
  font-size: 16px;
  width: 20%;
  box-sizing: border-box;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
`;

export const TaskInput = styled.input`
  font-family: "Anek Bangla", sans-serif;
  padding: 8px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 10px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundInput};
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  border-radius: 4px;
  font-size: 16px;
  width: 50%;
  box-sizing: border-box;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

// Estiliza o input de data
export const DateInput = styled.input`
  font-family: "Anek Bangla", sans-serif;
  color: ${({ theme }) => theme.colors.subText};
  padding: 8px;
  margin-right: 10px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundInput};
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  border-radius: 4px;
  font-size: 16px;
  width: 140px;
  box-sizing: border-box;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
`;
export const TimeInput = styled.input`
  font-family: "Anek Bangla", sans-serif;
  color: ${({ theme }) => theme.colors.subText};
  padding: 8px;
  margin-right: 10px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundInput};
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  border-radius: 4px;
  font-size: 16px;
  width: 140px;
  box-sizing: border-box;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
`;

export const AddTaskContainer = styled.div`
  font-family: "Anek Bangla", sans-serif;
  display: flex;
  margin-left: 20px;
  margin-bottom: 20px;
`;

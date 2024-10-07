import styled from "styled-components";
import { rgba } from "polished";

export const TaskDiv = styled.div`
  font-family: "Anek Bangla", sans-serif;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  width: 93%;
  border-bottom: 1px solid ${({ theme }) => rgba(theme.colors.subText, 0.3)};
`;

export const TaskContainer = styled.div`
  font-family: "Anek Bangla", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  height: 45px;
  width: 93%;
  /* background-color: #3f3f3f; */
  color: ${({ theme }) => theme.colors.text};
  padding-left: 10px;
  padding-right: 10px;
`;

export const ButtonCheck = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.subText};
  margin-right: 10px;
  transition: 0.2s;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const DateTask = styled.div`
  font-size: 13px;
`;

export const ButtonAndTask = styled.div`
  display: flex;
  align-items: center;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.subText};
  margin-left: 50px;
`;

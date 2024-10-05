import styled from "styled-components";

export const TaskDiv = styled.div`
  font-family: "Anek Bangla", sans-serif;
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 93%;
  border-bottom: 1px solid #2f2f2f;
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
  color: #fff;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ButtonCheck = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 5px;
  border: 2px solid #999999;
  margin-right: 10px;
  transition: 0.2s;
  
  &:hover {
    border: 2px solid #e68c00;
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
  color: #aaa;
  margin-left: 50px;
`;

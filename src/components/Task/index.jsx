import React from "react";
import invertDateFormat from "../../utils/auxFunction";

import {
  TaskContainer,
  TaskDiv,
  ButtonCheck,
  DateTask,
  ButtonAndTask,
  Description,
} from "./Task.styles";

// Função para formatar a data no formato dd/mm/yyyy
const formatDate = (isoDate) => {
  const dateObject = new Date(isoDate);
  const day = String(dateObject.getDate() + 1).padStart(2, "0");
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Mês começa em 0, então adiciona 1
  const year = dateObject.getFullYear();
  return `${month}/${day}/${year}`;
};

export default function Task({ task, onFinish }) {
  return (
    <TaskDiv>
      <TaskContainer>
        <ButtonAndTask style={{ display: "flex" }}>
          <ButtonCheck onClick={() => onFinish(task.id)}></ButtonCheck>
          <p>{task.title}</p>
        </ButtonAndTask>
        <DateTask>{formatDate(task.toDoDate)}</DateTask>
      </TaskContainer>
      <Description>{task.description}</Description>
    </TaskDiv>
  );
}

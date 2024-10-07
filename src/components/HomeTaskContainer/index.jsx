import React from "react";

import { TasksContainer } from "./HomeTaskContainer.styles";
import TasksList from "../TasksList";

export default function HomeTaskContainer() {
  return (
    <TasksContainer>
      <TasksList />
    </TasksContainer>
  );
}

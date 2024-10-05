import React from 'react';
import {
  TaskSectionContainer,
  TaskTextContainer,
  TaskTitle,
  TaskSubtitle,
  TaskImage,
} from './TaskSectionLP.styles';
import exampleImage from '../../assets/task_exemple.png'; // substitua pela imagem do app

function TaskSectionLP() {
  return (
    <TaskSectionContainer>
      <TaskTextContainer>
        <TaskTitle>Organize suas tarefas por áreas da sua vida</TaskTitle>
        <TaskSubtitle>
          Separe tarefas relacionadas ao trabalho, vida pessoal, e faculdade. Mantenha tudo no seu lugar, sem perder o controle.
        </TaskSubtitle>
      </TaskTextContainer>
      <TaskImage src={exampleImage} alt="App showing task organization by categories" />
    </TaskSectionContainer>
  );
}

export default TaskSectionLP;

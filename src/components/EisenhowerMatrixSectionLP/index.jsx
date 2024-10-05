import React from 'react';
import {
  EisenhowerSectionContainer,
  EisenhowerTextContainer,
  EisenhowerTitle,
  EisenhowerSubtitle,
  EisenhowerImage,
} from './EisenhowerSectionLP.styles';
import eisenhowerImage from '../../assets/task_example.png'; // Substitua pela imagem do app

function EisenhowerSectionLP() {
  return (
    <EisenhowerSectionContainer>
      <EisenhowerTextContainer>
        <EisenhowerTitle>Controle suas prioridades com a Matriz de Eisenhower</EisenhowerTitle>
        <EisenhowerSubtitle>
          Organize suas tarefas com base na urgência e importância. O app permite que você defina as prioridades de cada tarefa, ajudando a focar no que realmente importa.
        </EisenhowerSubtitle>
      </EisenhowerTextContainer>
      <EisenhowerImage src={eisenhowerImage} alt="App showing Eisenhower matrix feature" />
    </EisenhowerSectionContainer>
  );
}

export default EisenhowerSectionLP;

import React from "react";
import {
  SloganContainer,
  SloganText,
  SubtitleText,
  ButtonContainer,
  ActionButton,
} from "./SloganSectionLP.styles";

function SloganSectionLP() {
  return (
    <SloganContainer>
      <SloganText>Organize sua mente, organize sua vida</SloganText>
      <SubtitleText>
        A ferramenta que transforma sua rotina em harmonia, uma tarefa de cada
        vez.
      </SubtitleText>
      <ButtonContainer>
        <ActionButton primary>Comece Agora</ActionButton>
        <ActionButton>Download</ActionButton>
      </ButtonContainer>
    </SloganContainer>
  );
}

export default SloganSectionLP;

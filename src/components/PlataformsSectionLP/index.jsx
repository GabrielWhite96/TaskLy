import React from 'react';
import {
  PlataformsSectionLPContainer,
  PlataformTextContainer,
  PlataformTitle,
  PlataformSubtitle,
  PlataformImage,
} from './PlataformsSectionLP.styles';
import PlataformImage from '../../assets/Plataform-image.png'; // Substitua pela imagem do app

function PlataformsSectionLP() {
  return (
    <PlataformsSectionLPContainer>
      <PlataformTextContainer>
        <PlataformTitle>Sincronize em várias plataformas</PlataformTitle>
        <PlataformSubtitle>
          Acesse o seu app em qualquer dispositivo, a qualquer hora. Com sincronização em tempo real, você nunca estará longe das suas tarefas, seja no celular, tablet ou desktop.
        </PlataformSubtitle>
      </PlataformTextContainer>
      <PlataformImage src={PlataformImage} alt="App Plataformed across multiple devices" />
    </PlataformsSectionLPContainer>
  );
}

export default PlataformsSectionLP;

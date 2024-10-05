import React from "react";
import {
  NotificationSectionContainer,
  NotificationTextContainer,
  NotificationTitle,
  NotificationSubtitle,
  NotificationImage,
} from "./NotificationSectionLP.styles";
import notificationImage from "../../assets/task_example.png";

function NotificationSectionLP() {
  return (
    <NotificationSectionContainer>
      <NotificationTextContainer>
        <NotificationTitle>
          Receba notificações, sem preocupações
        </NotificationTitle>
        <NotificationSubtitle>
          Não se preocupe com horários e datas. Nosso app vai te lembrar no
          momento certo para você nunca perder uma tarefa importante.
        </NotificationSubtitle>
      </NotificationTextContainer>
      <NotificationImage
        src={notificationImage}
        alt="App showing notification feature"
      />
    </NotificationSectionContainer>
  );
}

export default NotificationSectionLP;

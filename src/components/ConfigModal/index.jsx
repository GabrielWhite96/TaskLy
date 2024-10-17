import React from "react";
import { FaTimes } from "react-icons/fa"; // Importa o ícone do react-icons
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  CloseButton,
  Sidebar,
  SidebarButton,
  ContentArea,
  BlurBackground,
  TitleConfig,
  SidebarButtonContainer,
} from "./ConfigModal.styles";

export default function ConfigModal({ onClose }) {
  return (
    <>
      <BlurBackground /> {/* Fundo desfocado */}
      <ModalContainer>
        <ModalContent>
          <Sidebar>
            <TitleConfig>Configurações</TitleConfig>
            <SidebarButtonContainer>
              <SidebarButton>Opção 1</SidebarButton>
              <SidebarButton>Opção 2</SidebarButton>
              <SidebarButton>Opção 3</SidebarButton>
            </SidebarButtonContainer>
          </Sidebar>
          <ContentArea>
            <ModalHeader>
              <CloseButton onClick={onClose}>
                <FaTimes size={15} /> {/* Ícone de X do react-icons */}
              </CloseButton>
            </ModalHeader>
            <h2>Configurações</h2>
            <p>Aqui você pode ajustar suas configurações.</p>
          </ContentArea>
        </ModalContent>
      </ModalContainer>
    </>
  );
}

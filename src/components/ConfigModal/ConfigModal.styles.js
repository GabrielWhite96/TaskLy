import styled from "styled-components";

export const BlurBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 100;
`;

export const ModalContainer = styled.div`
  position: fixed;
  font-family: "Anek Bangla", sans-serif;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  z-index: 200;

  @media (max-width: 768px) {
    width: 95%;
    height: auto;
    padding: 10px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;


`;

export const TitleConfig = styled.div`
  font-weight: 600;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.subText};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  height: 400px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Sidebar = styled.div`
  width: 30%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 2px 10px;
  display: flex;
  flex-direction: column;
  border-radius: 12px 0px 0px 12px;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 12px 12px 0px 0px;
    padding: 10px;
  }
`;

export const SidebarButtonContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SidebarButton = styled.button`
  text-align: left;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundTertiary};
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  padding: 15px;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

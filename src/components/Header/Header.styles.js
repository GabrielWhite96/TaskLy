import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 240px;
  height: 65px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 1163px) {
    padding: 0 90px;
  }

  @media (max-width: 870px) {
    padding: 0 30px;
  }

  
`;

export const Logo = styled.img`
  height: 40px;
  cursor: pointer;

  @media (max-width: 480px) {
    height: 30px;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 720px) {
    display: none; /* Esconde os botões abaixo de 720px */
  }
`;

export const NavButton = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  height: 65px;
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.background};
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    font-size: 13px;
    height: 45px;
  }
`;

export const NavButtonRegister = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  height: 36px;
  width: 100px;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textHover};
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 13px;
    height: 45px;
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;

  @media (max-width: 720px) {
    display: block; /* Exibe o botão de menu apenas abaixo de 720px */
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 720px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 65px;
    right: 0;
    background-color: ${({ theme }) => theme.colors.background};
    width: 100%;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    ${NavButton}, ${NavButtonRegister} {
      display: block;
      margin: 10px 0;
      width: 100%;
    }
  }
`;

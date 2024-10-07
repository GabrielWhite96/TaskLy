import styled from "styled-components";

export const RegisterContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  font-family: "Arial", sans-serif;
  padding: 0 20px;
`;

export const RegisterBox = styled.div`
  width: 100%;
  max-width: 360px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

export const LogoAndTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ImgLogo = styled.img`
  width: 130px;
  cursor: pointer;
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundInput};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

export const RegisterButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const RegisterFooter = styled.div`
  margin-top: 20px;
`;

export const FooterLink = styled.a`
   ${({ theme }) => theme.colors.subText};
  font-size: 0.9em;
  text-decoration: none;
  display: block;
  margin-top: 10px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

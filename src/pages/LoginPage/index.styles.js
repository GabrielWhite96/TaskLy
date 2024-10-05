import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121212;
  font-family: "Arial", sans-serif;
  padding: 0 20px;
`;

export const LoginBox = styled.div`
  width: 100%;
  max-width: 360px;
  padding: 40px;
  background-color: #1e1e1e;
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
  width: 24px;
`;

export const LoginTitle = styled.h2`
  color: #ffffff;
  font-size: 24px;
  letter-spacing: 1px;
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 92%;
  padding: 12px;
  border: 1px solid #444; /* Adicionar borda para contraste */
  border-radius: 6px;
  background-color: #333333;
  color: #ffffff;
  transition: border-color 0.3s ease; /* Transição ao focar */

  &:focus {
    border-color: #ff6600; /* Cor de borda laranja no foco */
    outline: none;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #ff6600;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold; /* Deixar o texto do botão em negrito */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e68c00;
  }

  &:active {
    transform: scale(0.98); /* Adicionar uma leve escala ao clicar */
  }
`;

export const LoginFooter = styled.div`
  margin-top: 20px;
`;

export const FooterLink = styled.a`
  color: #bbbbbb; /* Cor cinza mais clara para melhor contraste */
  font-size: 0.9em;
  text-decoration: none;
  display: block;
  margin-top: 10px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff; /* Branco ao passar o mouse */
  }

  &:active {
    color: #ff6600; /* Laranja ao clicar */
  }
`;

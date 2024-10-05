import styled from "styled-components";

export const SloganContainer = styled.section`
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SloganText = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 30px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
`;

export const SubtitleText = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 40px;
  max-width: 600px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const ActionButton = styled.button`
  background-color: ${(props) =>
    props.primary
      ? (props) => props.theme.colors.primary
      : (props) => props.theme.colors.background};
  color: ${(props) =>
    props.primary
      ? (props) => props.theme.colors.text
      : (props) => props.theme.colors.primary}; /* Usando a cor do tema */
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 15px 30px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textHover};
  }
`;

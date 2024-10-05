import styled from 'styled-components';

export const PlataformsSectionLP = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

export const PlataformTextContainer = styled.div`
  max-width: 600px;
  margin-bottom: 40px; /* Espaço entre o texto e a imagem */
`;

export const PlataformTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const PlataformSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const PlataformImage = styled.img`
  width: 450px;
  height: auto;

  @media (max-width: 768px) {
    width: 350px;
  }

  @media (max-width: 480px) {
    width: 300px;
  }
`;

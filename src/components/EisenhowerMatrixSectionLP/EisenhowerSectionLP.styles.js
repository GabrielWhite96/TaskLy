import styled from 'styled-components';

export const EisenhowerSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const EisenhowerTextContainer = styled.div`
  max-width: 500px;
`;

export const EisenhowerTitle = styled.h2`
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

export const EisenhowerSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const EisenhowerImage = styled.img`
  width: 400px;
  height: auto;

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 250px;
  }
`;

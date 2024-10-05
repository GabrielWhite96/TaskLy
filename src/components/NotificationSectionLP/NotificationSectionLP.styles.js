import styled from "styled-components";

export const NotificationSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 80px 100px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NotificationTextContainer = styled.div`
  max-width: 600px;
`;

export const NotificationTitle = styled.h2`
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

export const NotificationSubtitle = styled.p`
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

export const NotificationImage = styled.img`
  width: 400px;
  height: auto;

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 250px;
  }
`;

import styled from "styled-components";

export const TaskSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 80px 100px;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TaskTextContainer = styled.div`
  max-width: 600px;
`;

export const TaskTitle = styled.h2`
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

export const TaskSubtitle = styled.p`
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

export const TaskImage = styled.img`
  width: 400px;
  height: auto;

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 250px;
  }
`;

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.text};
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 40px;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 40px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FooterTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 8px;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
`;

export const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  transition: color 0.3s;
  display: inline-block;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FooterCopyright = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

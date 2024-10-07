import styled from "styled-components";

export const LeftMenu = styled.div`
  max-height: 100vh;
  width: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundTertiary };
`;
export const ButtonLeftMenu = styled.div`
  margin-top: 30px;
`;

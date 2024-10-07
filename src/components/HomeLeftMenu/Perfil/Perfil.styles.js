import styled from "styled-components";

export const PerfilContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: #${({ theme }) => theme.colors.background};
  border: none;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
`;

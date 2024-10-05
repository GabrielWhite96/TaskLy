import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
`;

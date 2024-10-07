import styled from "styled-components";
import { rgba } from "polished";

export const TasksContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-left: 1px solid ${({ theme }) => rgba(theme.colors.subText, 0.3)};
`;

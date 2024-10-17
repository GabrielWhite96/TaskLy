import styled from "styled-components";
import { rgba } from "polished";

export const FocusTaskContainer = styled.div`
  height: 100vh;
  width: 34%;
  border-left: 1px solid ${({ theme }) => rgba(theme.colors.subText, 0.3)};
  background-color: ${({ theme }) => theme.colors.background};
`;

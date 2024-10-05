import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.text};
    font-family: 'Roboto', sans-serif;
    height: 100vh;
  }
`;

export default function App() {
  return <GlobalStyle />;
}

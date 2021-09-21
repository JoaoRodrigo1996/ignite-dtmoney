import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #F0F2F5;
    --shape:#FFF;

    --red: #E52E4D;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px; padrão (DESKTOP)
  html{
    @media(max-width:1080px){
      font-size: 93.75%; // 15px
    }

    @media(max-width:720px){
      font-size: 87.5%; // 14px
    }
  }
  // Medida REM - 1rem = font-size(16px)
  body{
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor:not-allowed;
  }
`;

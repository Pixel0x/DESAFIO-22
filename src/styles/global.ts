import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --purple: #873EFF;
  --green: #04D361;
  --dark: #0E091B;
  --dark-200: #171228;
  --gray: #AEAEAE;
  --light: #F9f9f9;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
}

  @media (max-width: 720px) {
    font-size: 87.5%;
}

  @media (max-width: 600px) {
    font-size: 81,25%;
}

  @media (max-width: 440px) {
    font-size: 75%;
}

  @media (max-width: 340px) {
    font-size: 68,75%;
}
}

body {
  background: var(--dark);
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}

[disabled]{
  opacity: .6;
  cursor: not-allowed;
}

`;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  width: 100%;
  height: 100vh;
   background: #02000f;
  color: #fff;
  max-width: 1700px;
  margin: auto;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
} */

/*  */
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    /* font-size: 62.5%; */
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyles;

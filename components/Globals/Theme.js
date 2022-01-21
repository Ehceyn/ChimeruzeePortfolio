import { ThemeProvider } from "styled-components";

import theme from "../Theming/theme";
import GlobalStyles from "./GlobalStyles";

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;

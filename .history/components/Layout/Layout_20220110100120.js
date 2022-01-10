import React from "react";
import { Container } from "./LayoutStyles";

function Layout({ children }) {
  return <Container>hakka{children}</Container>;
}

export default Layout;

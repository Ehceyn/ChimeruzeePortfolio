import React from "react";
import { Containers } from "./LayoutStyles";

function Layout({ children }) {
  return <Containers>{children}</Containers>;
}

export default Layout;

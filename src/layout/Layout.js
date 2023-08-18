import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Nav/>
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

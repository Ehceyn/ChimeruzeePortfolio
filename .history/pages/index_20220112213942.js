import MetaHead from "../components/MetaHead/MetaHead";
import GlobalStyles from "../components/Globals/GlobalStyles";
import ThemeProvider from "styled-components";
import { theme } from "../components/Theming/theme";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/Timeline/Timeline";
import Accomplishments from "../components/Accomplishments/Accomplishments";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    // <ThemeProvider>
    <>
      <MetaHead
        title="Chimeruzee | Front-end developer"
        contentKeyword="web development, react development, frontend development, web design, programming"
        contentDescription="A Web designer and developer's portfolio"
      />
      <Header />
      <Hero />
      <Projects />
      <Technologies />
      <Timeline />
      <Accomplishments />
      <Contact />
      <Footer />
    </>
    // </ThemeProvider>
  );
}
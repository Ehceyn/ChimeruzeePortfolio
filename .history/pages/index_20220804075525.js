import MetaHead from "../src/components/MetaHead/MetaHead";
import Hero from "../src/components/Hero/Hero";
import Projects from "../src/components/Projects/Projects";
import Technologies from "../src/components/Technologies/Technologies";
import Timeline from "../src/components/Timeline/Timeline";
import Accomplishments from "../src/components/Accomplishments/Accomplishments";
import Contact from "../src/components/Contact/Contact";
import Footer from "../src/components/Footer/Footer";
import About from "../src/components/About/About";

export default function Home() {
  return (
    <section className="relative bg-[red]">
      <MetaHead
        title="Meruzee | Portfolio"
        contentKeyword="web development, react development, frontend development, web design, programming"
        contentDescription="A Web designer and developer's portfolio"
      />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </section>
  );
}

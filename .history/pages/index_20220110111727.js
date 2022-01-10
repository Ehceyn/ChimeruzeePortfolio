import Head from "next/head";
import GlobalStyles from "../components/globalStyles/globalStyles";
import Header from '../components/Header/Header'
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Accomplishments from "../components/Accomplishments/Accomplishments";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Chimeruzee | Front-end developer</title>
        <meta
          name="description"
          content="A Web designer and developer's portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Hero/>
     <Projects/>
     <Technologies/>
      <Timeline/>
      <Accomplishments>
      <Contact/>
      <Footer/>

    </>
  )
}

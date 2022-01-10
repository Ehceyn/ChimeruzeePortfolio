import Head from "next/head";
import GlobalStyles from "../components/globalStyles/globalStyles";
import Image from "next/image";
import { Suspense } from "react";

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
      Header
      <br />
      Hero
      <br />
      Projects
      <br />
      Technologies
      <br />
      About Me
      <br />
      Personal Achievement
      <br />
      Contact
      <br />
      Footer
      <br />
    </>
  );
}

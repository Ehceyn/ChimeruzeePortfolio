import Head from "next/head";
import { Container } from "../styles/globalStyles/BodyStyles";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
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
    </Container>
  );
}

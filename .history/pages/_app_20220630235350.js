import Layout from "../src/components/Layout/Layout";
import Theme from "../src/components/Globals/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
}

export default MyApp;

import Layout from "../components/Layout/Layout";
import Theme from "../components/Globals/Theme";

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

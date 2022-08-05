import Layout from "../src/components/Layout/Layout";
import WorksProvider from "../src/State/Providers/WorksProvider";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <WorksProvider>
        <Component {...pageProps} />
      </WorksProvider>
    </Layout>
  );
}

export default MyApp;

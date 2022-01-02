import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";
import SmoothScroll from "../components/SmoothScroll";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SmoothScroll>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SmoothScroll>
  );
}

export default MyApp;

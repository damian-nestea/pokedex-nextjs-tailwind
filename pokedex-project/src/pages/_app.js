import "@/styles/globals.css";
import Layout from "../../components/Layout";
import { GlobalState } from "@/contexts/GlobalContext";
import { BASE_URL } from "@/constants/url";

export default function App({ Component, pageProps }) {
  return (
    <GlobalState>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalState>
  );
}

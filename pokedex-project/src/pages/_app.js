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

export const getStaticProps = async () => {
  console.log("Aqui")
  try {
    const res = await fetch(BASE_URL);
    const pokemons = await res.json();

    return {
      props: {
        pokemons,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error,
      },
    };
  }
};

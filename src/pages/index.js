import Head from "next/head";
import { Header } from "../components";
import { Banner } from "../components/Banner/Banner";
import { ProductFeed } from "../components/ProductFeed/ProductFeed";
import { FAKE_STORE_API_URL } from "./constants";

export default function Home({ products }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title key="title">Amazon 2.0</title>
      </Head>

      <Header />

      <main className="h-full grid max-w-screen-xl mx-auto">
        <Banner />

        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch(`${FAKE_STORE_API_URL}/products`)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      products,
    },
  };
}

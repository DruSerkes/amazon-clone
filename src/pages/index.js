import Head from "next/head";
import { Header } from "../components";
import { Banner } from "../components/Banner/Banner";
import { ProductFeed } from "../components/Product/ProductFeed/ProductFeed";
import { FAKE_STORE_API_URL } from "../app/constants";

export default function Home({ products }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title key="title">Amazon Clone</title>
      </Head>

      <Header />

      <main className="h-full grid max-w-screen-xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const products = await fetch(`${FAKE_STORE_API_URL}/products`)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  const productsWithPrimeEligibility = products.map((product) => ({
    ...product,
    isEligibleForPrime: Math.random() < 0.5,
  }));

  return {
    props: {
      products: productsWithPrimeEligibility,
    },
  };
}

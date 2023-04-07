import Head from "next/head";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className="h-full grid place-items-center">
        Main Content
      </main>
    </div>
  );
}

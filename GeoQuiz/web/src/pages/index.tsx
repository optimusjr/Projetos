import Head from "next/head";
import Header from "@/components/Header";
import Main from "@/components/Main";

const Home = () => {
  return (
    <>
      <Head>
        <title>GeoQuiz</title>
      </Head>

      <Header />
      <Main />
    </>
  );
};

export default Home;

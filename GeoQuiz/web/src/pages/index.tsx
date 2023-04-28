import Head from "next/head";
import Header from "@/components/header";
import Main from "@/components/main";

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

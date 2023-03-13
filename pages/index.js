import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Running New E-Learning Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="This is my test project for mern stack app" />
        <hr />
        <p className="description">
          Here'This is a test project for hosting Mern Apps On Netlify
          submissions can be found in the Netlify Admin site.
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}

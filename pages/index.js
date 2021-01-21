import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ThemeBtnSection } from "../components/buttons/ThemeBtnSection";
import Orators from "../components/lists/Orators";

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Proclaim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ThemeBtnSection />

        <h1 className={styles.title}>
          Welcome to <a>Proclaim</a>
        </h1>

        <Orators />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

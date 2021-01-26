import styles from "../styles/Home.module.css";
import { ThemeBtnSection } from "../components/buttons/ThemeBtnSection";
import Orators from "../components/lists/Orators";
import Recorder from "../components/audio/Recorder/Recorder";

export default function Home() {
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <ThemeBtnSection />

        <h1 className={styles.title}>
          Welcome to <a>Proclaim</a>
        </h1>

        <Orators />
      </main>

      <footer className={styles.footer}>
        <Recorder />
      </footer>
    </div>
  );
}

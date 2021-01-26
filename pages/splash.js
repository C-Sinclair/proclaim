import styles from "../styles/Home.module.css";
import { ThemeBtnSection } from "../components/buttons/ThemeBtnSection";
import Link from "next/link";

export default function Splash() {
  return (
    <main className={styles.main}>
      <ThemeBtnSection />
      <h1 className={styles.title}>
        Welcome to <a>Radiogram</a>
      </h1>
      <article>
        <button>
          <Link href="/login">Log in</Link>
        </button>
        <button>
          <Link href="/register">Sign up</Link>
        </button>
      </article>
    </main>
  );
}

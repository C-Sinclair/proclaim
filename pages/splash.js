import Link from "next/link";
import Image from "next/image";

export default function Splash() {
  return (
    <main>
      <h1>
        Welcome to <a>Radiogram</a>
      </h1>
      <Image
        alt="Gramophone"
        src="/gramophone.png"
        width={800}
        height={1000}
        quality={100}
      />
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

import Head from "next/head";
import { urlToName } from "../../util/orator";

export default function Orator({ name }) {
  return (
    <div>
      <Head>
        <title>Orator {name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to {name}'s sound garden</h1>
      </main>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const name = urlToName(params.name);
  // check they exist
  // get their audio
  return {
    props: {
      name,
    },
  };
}

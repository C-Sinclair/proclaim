import { urlToName } from "../../util/orator";

export default function Orator({ name }) {
  return (
    <main>
      <h1>Welcome to {name}'s sound garden</h1>
    </main>
  );
}

/**
 *
 * @param {import('next').GetServerSidePropsContext} context
 */
export async function getServerSideProps({ params }) {
  const name = urlToName(params.name);
  const title = `Orator ${name}`;

  // check they exist
  // get their audio
  return {
    props: {
      title,
      name,
    },
  };
}

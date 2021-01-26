import Main from "../../components/layout/Main/Main";
import { urlToName } from "../../util/artist";

export default function Artist({ name }) {
  return (
    <Main>
      <h1>Welcome to {name}'s sound garden</h1>
    </Main>
  );
}

/**
 *
 * @param {import('next').GetServerSidePropsContext} context
 */
export async function getServerSideProps({ params }) {
  const name = urlToName(params.name);

  // check they exist
  // get their audio
  return {
    props: {
      title: `Artist ${name}`,
      name,
    },
  };
}

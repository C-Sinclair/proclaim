import Link from "next/link";
import useSWR from "swr";
import { nameToUrl } from "../../util/url";
import { fetcher } from "../../util/fetcher";

export default function Orators() {
  const { data, error } = useSWR("/api/orators", fetcher, {
    refreshInterval: 1000,
  });
  if (error) {
    return <h6>Error</h6>;
  }
  return (
    <section>
      <h4>Here's a list of orators</h4>
      <ul>
        {data?.map((orator) => (
          <li key={orator.name}>
            <Link href={`/orator/${nameToUrl(orator.name)}`}>
              {orator.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

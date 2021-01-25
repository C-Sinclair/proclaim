import fetch from "isomorphic-fetch";

export const fetcher = (...params) => fetch(...params).then((r) => r.json());

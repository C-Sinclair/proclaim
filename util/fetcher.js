export const fetcher = (...params) => fetch(...params).then((r) => r.json());

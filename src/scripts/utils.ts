import { Article } from "./Article";

export let Shuffle = (arr: Article[]) => {
  let randomizedArr = arr.slice(0);
  randomizedArr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return randomizedArr;
};

export function typedFetch<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  return fetch(url, config)
    .then((res) => res.json())
    .then((data) => data as TResponse);
}

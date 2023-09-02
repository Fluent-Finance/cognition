import { writable } from "svelte/store";

const storedCache = localStorage.getItem("api.cache");
export const cache = writable(storedCache);

cache.subscribe(value => {
  localStorage.setItem("api.cache", JSON.stringify(value));
});

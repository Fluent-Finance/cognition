import { browser }  from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = 'light';
const themeMode    = browser ? window.localStorage.getItem('color-theme') : 'light';
const initialValue = browser ? themeMode ?? themeMode : defaultValue;

export const theme = writable(initialValue);

theme.subscribe((value) => {
  if (browser && value) { window.localStorage.setItem('color-theme', value); }
});

export { theme as default };


import type { Dictionary } from 'lodash';

const Memoize = (fn: Function, cache: Dictionary<string>) => {
  return (...args: any[]) => {
    const key = JSON.stringify(args);
    if (key in cache) { return cache[key]; }

    const result = fn(...args);
    cache[key]   = result;

    return result;
  };
};

export default Memoize;

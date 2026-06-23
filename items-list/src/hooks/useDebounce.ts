import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay = 300) => {
  const [debouncedValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
        setDebounceValue(value)
    }, delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
};


const sum = ((2 * (3 + 2)) - 1)
console.log(sum)
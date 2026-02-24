import { useEffect, useState } from "react";

export function AnimatedNumber({ value }: { value: string }) {
  const numeric = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = Math.max(1, Math.floor(numeric / (duration / 16)));

    const interval = setInterval(() => {
      start += step;
      if (start >= numeric) {
        setCount(numeric);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [numeric]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

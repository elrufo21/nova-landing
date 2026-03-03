import { useEffect, useState } from "react";

export function AnimatedNumber({ value }: { value: string }) {
  const match = value.trim().match(/^(\d+)(\D*)$/);
  const numeric = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (numeric === null || Number.isNaN(numeric)) {
      return;
    }

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

  if (numeric === null || Number.isNaN(numeric)) {
    return <>{value}</>;
  }

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

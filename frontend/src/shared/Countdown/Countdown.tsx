import React, { useEffect, useState } from "react";

type CountdownProps = {
  targetDate: Date | string;
  format?: string; // e.g., 'DD:HH:mm:ss', 'HH:mm:ss'
};

const pad = (num: number) => String(num).padStart(2, "0");

const formatDuration = (ms: number, format: string): string => {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return format
    .replace("DD", pad(days))
    .replace("HH", pad(hours))
    .replace("mm", pad(minutes))
    .replace("ss", pad(seconds));
};

const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  format = "DD:HH:mm:ss",
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    const diff = new Date(targetDate).getTime() - Date.now();
    return Math.max(diff, 0);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(targetDate).getTime() - Date.now();
      setTimeLeft(Math.max(diff, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return <div>{formatDuration(timeLeft, format)}</div>;
};

export default Countdown;

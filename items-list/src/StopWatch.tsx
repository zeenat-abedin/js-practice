import { useEffect, useState } from 'react';
export default function StopWatch() {
  const [time, setTime] = useState(3600);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => {
          if (time > 0) {
            return time - 1;
          } else {
            setIsActive(false);
            return 0;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  function handleStart() {
    setIsActive(true);
  }

  function handlePauseResume() {
    setIsActive((prev) => !prev);
  }

  function handleStop() {
    setIsActive(false);
  }

  function formatTime(time: number) {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, '0');
    const mins = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(time % 60);
    return `${hours} : ${mins} : ${seconds}`;
  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <h1>{formatTime(time)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePauseResume}>{isActive ? 'Pause' : 'Resume'}</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

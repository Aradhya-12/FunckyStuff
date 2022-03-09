import React, { useState, useRef, useCallback, useMemo } from "react";
export default function TimeFormater() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef(null);
  const handleStart = useCallback(() => {
    ref.current = setInterval(() => {
      setTime((time) => {
        return time + 1;
      });
    }, 1000);
  }, []);

  const handleStop = useCallback(() => {
    clearInterval(ref.current);
    setStart(false);
  }, []);

  const TimeFormater = useMemo(() => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const hr = `${Math.floor(time / 3600)}`;
    const getHr = `0${hr}`.slice(-2);
    return `${getHr}:${getMinutes}:${getSeconds}`;
  }, [time]);

  const handleReset = useCallback(() => {
    clearInterval(ref.current);
    setTime(0);
    setStart(false);
  }, []);
  return (
    <div>
      <h3>StopWatch</h3>
      <button
        onClick={() => {
          if (!start) {
            setStart(true);
            handleStart();
          }
        }}
        disabled={start}
      >
        {" "}
        Start
      </button>
      <button onClick={handleStop}> Stop</button>
      <div>{TimeFormater}</div>
      <button onClick={handleReset}> Reset</button>
    </div>
  );
}

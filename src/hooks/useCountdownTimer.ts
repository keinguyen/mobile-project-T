import { useEffect, useState } from "react";

const useCountdownTimer = (initialSeconds) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          clearInterval(interval);
          setIsRunning(false);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const startCountdown = () => {
    setSeconds(initialSeconds);
    setIsRunning(true);
  };

  const stopCountdown = () => {
    setIsRunning(false);
  };

  return { seconds, isRunning, startCountdown, stopCountdown };
};

export default useCountdownTimer;

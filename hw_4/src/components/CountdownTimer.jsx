import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timer, setTimer] = useState(10);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clearInterval(intervalId);
    }
  }, [timer, intervalId]);

  return (
    <div>
      <h1>Countdown Timer: {timer}</h1>
    </div>
  );
};

export default CountdownTimer;

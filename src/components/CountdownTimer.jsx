import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CountdownContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Display = styled.div`
  font-size: 3em;
`;

const Button = styled.button`
  font-size: 30px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: lightGreen;
  border-radius: 5px;
`;

function CountdownTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(120); // 2 minutes in seconds

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const startStop = () => {
    setIsRunning((prevState) => !prevState);
  };

  const reset = () => {
    setTime(120);
    setIsRunning(false);
  };

  const adjustTime = (amount) => {
    setTime((prevTime) => prevTime + amount);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return (
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds
    );
  };

  return (
    <CountdownContainer>
      <Button style={{ backgroundColor: "coral" }} onClick={reset}>
        Reset
      </Button>
      <Button onClick={startStop}>{isRunning ? "Pause" : "Start"}</Button>
      <Display>{formatTime(time)}</Display>
      <Button
        style={{ backgroundColor: "cornflowerBlue" }}
        onClick={() => adjustTime(30)}
      >
        +30s
      </Button>
      <Button
        style={{ backgroundColor: "cornflowerBlue" }}
        onClick={() => adjustTime(-30)}
      >
        -30s
      </Button>
    </CountdownContainer>
  );
}

export default CountdownTimer;

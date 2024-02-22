import React from "react";
import Card from "./Card";
import styled from "styled-components";
import Button from "./Button";
import CountdownTimer from "./CountdownTimer";

const StyledGameArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  font-size: 50px;
  height: 100px;
  margin-bottom: 20px;
`;

const StyledCardArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 50px;
  min-height: 90px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  overflow: auto;
`;

export default function Game() {
  const [cardDigits, updateCardDigits] = React.useState([]);
  const [target, updateTarget] = React.useState(0);
  const cardElements = cardDigits.map((card) => {
    return <Card key={card.id} value={card} />;
  });

  const newOneDigitNumber = () => {
    const newDigit = Math.floor(Math.random() * 9 + 1);
    const newDigits = [...cardDigits, newDigit];
    updateCardDigits(newDigits);
  };

  const newTwoDigitNumber = () => {
    function newMultiple25() {
      const newDigit = Math.floor(Math.random() * 4);
      switch (newDigit) {
        case 0:
          return 25;
        case 1:
          return 50;
        case 2:
          return 75;
        case 3:
          return 100;
        default:
          return 50;
      }
      return newDigit;
    }
    const newDigit = newMultiple25();
    const newDigits = [...cardDigits, newDigit];
    updateCardDigits(newDigits);
  };

  const newTarget = () => {
    const newTargetNumber = Math.floor(Math.random() * 999 + 1);
    const sortedArrayOfDigits = cardDigits.sort((a, b) => a - b);
    updateTarget(newTargetNumber);
    updateCardDigits(sortedArrayOfDigits);
  };

  const resetGame = () => {
    updateTarget(0);
    updateCardDigits([]);
  };
  return (
    <>
      <StyledGameArea>
        <Button
          text={"Small Number"}
          backgroundColor={"lightGreen"}
          handleClick={() => {
            newOneDigitNumber();
          }}
        ></Button>
        <Button
          text={"Big number"}
          backgroundColor={"lightGreen"}
          handleClick={() => {
            newTwoDigitNumber();
          }}
        ></Button>
        <Button
          text={"Set Target"}
          backgroundColor={"lightGreen"}
          handleClick={() => {
            newTarget();
          }}
        ></Button>
        <Button
          text={"Reset Game"}
          backgroundColor={"coral"}
          handleClick={() => {
            resetGame();
          }}
        ></Button>
      </StyledGameArea>
      <StyledCardArea>{cardElements}</StyledCardArea>
      <StyledGameArea>Target: {target}</StyledGameArea>
      <CountdownTimer />
    </>
  );
}

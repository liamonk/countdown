import React from "react";
import Card from "./Card";
import styled from "styled-components";
import Header from "./Header";

const StyledGameArea = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 50px;
`;
const StyledCardArea = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 50px;
`;

const StyledButton = styled.button`
  font-size: 30px;
  margin-bottom: 50px;
  margin-top: 50px;
  background-color: lightGreen;
  border-radius: 5px;
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
      const newDigit = Math.floor(Math.random() * 3);
      switch (newDigit) {
        case 0:
          return 25;
        case 1:
          return 50;
        case 2:
          return 75;
        default:
          return 25;
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
  return (
    <>
      <StyledGameArea>
        <StyledButton onClick={newOneDigitNumber}>
          Add a one digit number
        </StyledButton>
        <StyledButton onClick={newTwoDigitNumber}>
          Add a two digit number
        </StyledButton>
      </StyledGameArea>
      <StyledCardArea>{cardElements}</StyledCardArea>
      <StyledGameArea>
        <StyledButton onClick={newTarget}>Set Target</StyledButton>
      </StyledGameArea>
      <StyledGameArea>Your target is: {target}</StyledGameArea>
    </>
  );
}

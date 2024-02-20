import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: lightYellow;
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Countdown!</h1>
      <br></br>
      <h3>Select your numbers then try to hit the target!</h3>
    </StyledHeader>
  );
}

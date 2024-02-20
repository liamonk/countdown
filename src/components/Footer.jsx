import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: lightYellow;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 97%;
  padding-left: 30px;
  padding-right: 30px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>PiAndSeek@gmail.com</p>
      <p>2024</p>
    </StyledFooter>
  );
}

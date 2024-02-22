import React from "react";
import styled from "styled-components";

export default function Button(props) {
  const StyledButton = styled.button`
    font-size: 30px;
    height: 50px;
    background-color: ${props.backgroundColor};
    border-radius: 5px;
  `;

  return <StyledButton onClick={props.handleClick}>{props.text}</StyledButton>;
}

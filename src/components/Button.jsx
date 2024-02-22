import React from "react";
import styled from "styled-components";

export default function Button(props) {
  const StyledButton = styled.button`
    font-size: 30px;
    max-height: 50px;
    background-color: ${props.backgroundColor};
    border-radius: 5px;
    margin-top: 5px;
    margin-right: auto;
    margin-left: auto;
  `;

  return <StyledButton onClick={props.handleClick}>{props.text}</StyledButton>;
}

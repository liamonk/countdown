import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: lightBlue;
  padding: 5px;
  width: 50px;
  text-align: center;
  margin: 10px;
  font-size: 50px;
  border-radius: 5px;
`;

export default function Card(props) {
  const digits = React.useState([]);
  return <StyledCard>{props.value}</StyledCard>;
}

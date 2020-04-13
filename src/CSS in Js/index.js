import React, { Component } from "react";
import styled from "styled-components";
import Card from "./components/card.component";
import "./index.css";

const Text = styled.div`
  color: red;
  font-size: 20px;
  background-color: lightblue;
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 4vw;
  margin-top: 20px;
  border: ${({ isActive }) =>
    isActive ? "1px solid black" : "3px dotted yellow"};
`;
function CssPractice() {
  return (
    <div className="csspractice">
      This is Css Practice of react course
      <hr />
      <Card name="Ramesh">
        <div style={textStyle}>Hello everyone</div>
      </Card>
      <Text isActive={false}>Hello Noone</Text>
    </div>
  );
}

const textStyle = {
  Color: "red",
  fontSize: "24px",
};

export default CssPractice;

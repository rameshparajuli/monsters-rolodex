import React, { Component } from "react";

export class UpdateCheck extends Component {
  constructor() {
    super();
    console.log("Constructor");
  }
  componentDidMount() {
    console.log("ComponentDidMount");
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldCoponentUpdate", nextProps);
    return nextProps.text !== this.props.text;
  }
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default UpdateCheck;

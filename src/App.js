import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    console.log("This is constructor");
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
    return true;
  }
  render() {
    return (
      <div className="App">
        <h1>Life Cycle of React</h1>
        {console.log("This is Render")}
        {this.props.text}
      </div>
    );
  }
}

export default App;

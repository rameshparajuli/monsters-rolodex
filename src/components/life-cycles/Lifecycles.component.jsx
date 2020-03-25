import React, { Component } from "react";
import UpdateCheck from "./UpdateCheck.component";
import "./Lifecycles.styles.css";
export class Lifecycles extends Component {
  constructor() {
    super();
    this.state = {
      showChild: true,
      text: ""
    };
    console.log("This is constructor");
  }

  render() {
    return (
      <div className="App">
        <h1>Life Cycle of React</h1>
        {console.log("This is Render with button")}
        {/* {this.props.text} */}
        <button
          onClick={() =>
            this.setState(state => ({
              showChild: !state.showChild
            }))
          }
        >
          Toggle Lifecycles
        </button>
        <button
          onClick={() =>
            this.setState(state => ({
              text: state.text + "_hello"
            }))
          }
        >
          Update Text
        </button>
        {this.state.showChild ? <UpdateCheck text={this.state.text} /> : null}
      </div>
    );
  }
}

export default Lifecycles;

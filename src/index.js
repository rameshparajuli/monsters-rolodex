import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Monsters from "./Monsters";
import Hoc from "./hocPractice/App";
import CssPractice from "../src/CSS in Js";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<Monsters />, document.getElementById("root"));
ReactDOM.render(<Hoc />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

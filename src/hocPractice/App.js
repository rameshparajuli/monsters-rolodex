import React, { Component } from "react";
import UserList from "./components/user-list/user-list.component";
import UserProfile from "./components/user-profile/user-profile.component.jsx";
import "./App.scss";
export class Hoc extends Component {
  render() {
    return (
      <div className="App">
        <UserList dataSource={`https://jsonplaceholder.typicode.com/users`} />
        <UserProfile
          name="Ramesh Parajuli"
          email="rameshparajuli09@gmail.com"
          dataSource={`https://jsonplaceholder.typicode.com/posts`}
        />
      </div>
    );
  }
}

export default Hoc;

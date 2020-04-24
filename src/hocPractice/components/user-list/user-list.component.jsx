import React from "react";
import withData from "../../with-data";
const UserList = ({ data, name, email }) => (
  <div className="container">
    {console.log("data user are", data)}
    <h1>{name} </h1>
    <h2> {email} </h2>
    users:
    {data.map((user) => (
      <div key={user.id} className="post">
        <h1> {user.name} </h1>
        <p> {user.email} </p>
      </div>
    ))}
  </div>
);

export default withData(UserList);

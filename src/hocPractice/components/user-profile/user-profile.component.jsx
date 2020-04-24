import React from "react";
import withData from "../../with-data";
const UserProfile = ({ data, name, email }) => (
  <div className="container">
    {console.log("data post are", data)}
    <h1>{name} </h1>
    <h2> {email} </h2>
    posts:
    {data.map((post) => (
      <div key={post.id} className="post">
        <h1> {post.title} </h1>
        <p> {post.body} </p>
      </div>
    ))}
  </div>
);

export default withData(UserProfile);

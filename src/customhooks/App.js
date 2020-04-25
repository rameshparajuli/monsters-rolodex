import React from "react";

import Post from "./components/post.component";
import User from "./components/user.component";
import UseReducerExample from "./components/use-reducer.component";

const CustomHooks = () => {
  return (
    <div>
      This is custom hooks example
      <User userId={4} /> <br />
      <br />
      <Post postId={2} />
      <br />
      <br />
      <UseReducerExample />
    </div>
  );
};

export default CustomHooks;

import React, { useState, useEffect } from "react";

import Card from "./components/card.component";
import { Name, MainContainer } from "./App.styles";

const basicJsArrayDemo = () => {
  const arr = [1, 2, 3];
  const [a, b, c] = arr;
  return (
    <div>
      {a} {b} {c}
    </div>
  );
};
export const Hooks = () => {
  const [userName, setName] = useState("Rohit");
  const [address, setAddress] = useState("Bhandara");

  // for second one
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("Bret");

  // useEffect mimicing componentDidMount lifecycle method
  useEffect(() => {
    if (searchQuery.length > 0) {
      const fetchFunc = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
        );
        const resJson = await response.json();
        setUser(resJson[0]);
      };
      fetchFunc();
    }
  }, [searchQuery]);

  return (
    <div>
      This is hooks
      <MainContainer>
        <Card>
          <Name>{userName}</Name>
          <Name>{address} </Name>
          <button onClick={() => setName(`Ramesh`)}>Change Name</button>
          <button onClick={() => setAddress(`Kathmandu`)}>
            Change Address
          </button>
        </Card>

        {/* Second One */}
        <Card>
          <input
            placeholder="search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </Card>
      </MainContainer>
      {user ? (
        <MainContainer>
          <Card>
            <h3> {user.name} </h3>
            <h3> {user.username} </h3>
            <h3> {user.email} </h3>
          </Card>
        </MainContainer>
      ) : (
        <MainContainer>
          <Card>
            <p>No user found</p>
          </Card>
        </MainContainer>
      )}
    </div>
  );
};

export default Hooks;

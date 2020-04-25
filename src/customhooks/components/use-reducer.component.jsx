import React, { useState, useEffect, useReducer } from "react";

import Card from "./card.component";
import { Name, MainContainer } from "../../Hooks/App.styles";

const INITIAL_STATE = {
  user: null,
  searchQuery: "Bret",
};

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case `SET_USER`:
      return {
        ...state,
        user: action.payload,
      };

    case `SET_SEARCH_QUERY`:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

// actions
const setSearchUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

const setSearchQuery = (queryString) => ({
  type: `SET_SEARCH_QUERY`,
  payload: queryString,
});

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const { user, searchQuery } = state;

  // useEffect mimicing componentDidMount lifecycle method
  useEffect(() => {
    if (searchQuery.length > 0) {
      const fetchFunc = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
        );
        const resJson = await response.json();
        dispatch(setSearchUser(resJson[0]));
      };
      fetchFunc();
    }
  }, [searchQuery]);

  return (
    <div>
      This is useReducer hooks example ie: redux method
      <MainContainer>
        <Card>
          <input
            placeholder="search"
            type="search"
            value={searchQuery}
            onChange={(event) => dispatch(setSearchQuery(event.target.value))}
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

export default UseReducerExample;

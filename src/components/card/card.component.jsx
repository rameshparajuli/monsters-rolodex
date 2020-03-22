import React from "react";
import "./card.styles.css";
export const Card = props => (
  <div className="card-container">
    <img
      alt="monoster"
      src={`https://robohash.org/${props.monoster.id}?set=set7`}
    />
    <h3>{props.monoster.name}</h3>
    <h4>{props.monoster.email}</h4>
  </div>
);

export default Card;

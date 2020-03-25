import React from "react";
import "./card.styles.css";
export const Card = props => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set7`}
    />
    <h3>{props.monster.name}</h3>
    <h4>{props.monster.email}</h4>
  </div>
);

export default Card;

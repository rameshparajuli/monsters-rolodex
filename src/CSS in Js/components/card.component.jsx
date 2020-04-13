import React from "react";
import "./card.css";
const Card = ({ children, ...props }) => <div className="card">{children}</div>;
export default Card;

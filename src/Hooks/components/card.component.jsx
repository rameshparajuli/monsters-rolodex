import React from "react";

import { CardItemContainer } from "./card.styles";

const Card = ({ children }) => (
  <CardItemContainer className="container">{children}</CardItemContainer>
);

export default Card;

import React from "react";

import "./card.styles.css";

export const Card = props => (
  <div className="card-container" key={props.monster.name}>
    <h2>{props.monster.name}</h2>
  </div>
);

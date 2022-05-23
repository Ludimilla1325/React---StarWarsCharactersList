import React from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = ({ characters }) => {
  return (
    <div className="card-list">
      {characters.map((character) => (
        <Card key={character.url} monster={character} />
      ))}
    </div>
  );
};

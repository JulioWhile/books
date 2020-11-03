import React from "react";

import { Book } from "./BookCard.component.styled";

function BookCard({ title, covers, id }) {
  return (
    <Book>
      <img src={covers} alt={title} />
      <h3>{title}</h3>
    </Book>
  );
}

export default BookCard;

import React from "react";
import { Link } from "react-router-dom";

import { Book } from "./BookCard.component.styled";

function BookCard({ title, covers, id }) {
  return (
    <Book>
      <Link to={`/book/${id}`}>
        <img src={covers} alt={title} />
        <h3>{title}</h3>
      </Link>
    </Book>
  );
}

export default BookCard;

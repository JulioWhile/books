import React from "react";
import { useParams } from "react-router-dom";

import { books } from "../../mockedData";
import MainPane from "../MainPane";
import { Details } from "./BookDetails.component.styled";

function BookDetails() {
  const { id } = useParams();
  const book = books[id];

  return (
    <MainPane>
      <Details>
        <img src={book.covers} alt={book.title} />
        <div>
          <h1>{book.title}</h1>
          <p>Publishers: {book.publishers}</p>
          <p>Number of pages: {book.numPages}</p>
          <p>ISBN 10: {book.isbn_10}</p>
          <p>ISBN 13: {book.isbn_13}</p>
          <p>
            <a href={book.url}>View book</a>
          </p>
        </div>
      </Details>
    </MainPane>
  );
}

export default BookDetails;

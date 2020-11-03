import React from "react";

import MainPane from "../../components/MainPane";
import BookCard from "../../components/BookCard";
import { BookList } from "./Books.page.styled";
import { books } from "../../mockedData";

function Books() {
  return (
    <MainPane>
      <BookList>
        {books.map((book, index) => (
          <BookCard
            title={book.title}
            covers={book.covers}
            id={index}
            key={book.title}
          />
        ))}
      </BookList>
    </MainPane>
  );
}

export default Books;

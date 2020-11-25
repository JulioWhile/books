import React, { lazy, Suspense } from "react";

import MainPane from "../../components/MainPane";
import { BookList } from "./Books.page.styled";
import { books } from "../../mockedData";
const BookCard = lazy(() => import("../../components/BookCard"));

function Books() {
  return (
    <MainPane>
      <BookList>
        <Suspense fallback={<h1>...Loading</h1>}>
          {books.map((book, index) => (
            <BookCard
              title={book.title}
              covers={book.covers}
              id={index}
              key={book.title}
            />
          ))}
        </Suspense>
      </BookList>
    </MainPane>
  );
}

export default Books;

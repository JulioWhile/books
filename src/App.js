import React from "react";
import { BrowserRouter } from "react-router-dom";

import Container from "./App.styled";
import AuthProvider from "./providers/Auth";
import NavBar from "./components/NavBar";
import Books from "./pages/books";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container>
          <NavBar />
          <Books />
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Container from "./App.styled";
import AuthProvider from "./providers/Auth";
import NavBar from "./components/NavBar";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container>
          <NavBar />
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

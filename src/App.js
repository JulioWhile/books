import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Container from "./App.styled";
import AuthProvider from "./providers/Auth";
import NavBar from "./components/NavBar";
import Books from "./pages/books";
import Login from "./pages/login";
import Home from "./pages/home";
import BookDetails from "./components/BookDetails";
import Protected from "./components/Protected";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Protected path="/book/:id" component={BookDetails} />
            <Route path="/books" component={Books} />
          </Switch>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

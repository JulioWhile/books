import React from "react";

import MainPane from "../../components/MainPane";
import { HomeContainer } from "./Home.page.styled";
import image from "../../assets/img/notebook.jpg";

function Home() {
  return (
    <MainPane>
      <HomeContainer>
        <h1>Welcome to the Crazy Books Library!</h1>
        <img src={image} alt="book and glasses" />
      </HomeContainer>
    </MainPane>
  );
}

export default Home;

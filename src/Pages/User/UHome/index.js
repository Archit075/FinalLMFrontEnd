import React from "react";
import UHome from "./UHome";
import styled from "styled-components";
import SHeader from "../../../AllHeaders/SHeader";
import Footer from "../../../Footer/Footer";

const UserHome = () => {
  return (
    <Container>
      <br />
      <SHeader />
      <Background>
        <img src="/images/LM3.png" alt="blank" style={{filter: "blur(5px)"}}/>
      </Background>
      <UHome />
      <Footer />
    </Container>
  );
};

export default UserHome;

const Container = styled.div`
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

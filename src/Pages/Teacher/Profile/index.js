import React from "react";
import TProfile from "./TProfile";
import styled from "styled-components";
// import SHeader from "../../../AllHeaders/SHeader";
import Footer from "../../../Footer/Footer";
import AHeader from "../../../AllHeaders/AHeader";

export default function TeacherProfile() {
  return (
    <Container>
      <AHeader />
      <Background>
        <img src="/images/LM3.png" style={{filter: "blur(3px)"}}/>
      </Background>
      <TProfile />
      <Footer />
    </Container>
  );
}


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

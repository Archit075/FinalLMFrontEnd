import React from "react";
import styled from "styled-components";
import AHeader from "../../../AllHeaders/AHeader";
// import LM3 from "./LM3.png";
// import LM3 from "./img5.jpg";
// import LM3 from "./img6.jpg";
import LM3 from "./img7.jpg";
import Footer from "../../../Footer/Footer";
import BinStudent from "./BinStudent";

export default function ViewBinUsers() {
  return (
    <Container>
      <br/>
      <AHeader />

      <Background>
      <img src={LM3} 
      // style={{filter: "blur(5px)"}} 
      />
      </Background>

      <BinStudent />
      
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




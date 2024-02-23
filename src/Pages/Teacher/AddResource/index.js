import React from "react";
import styled from "styled-components";
import TAddResource from "./AddResource";
import AHeader from "../../../AllHeaders/AHeader";
import LM3 from "./LM3.png";

export default function AddResource() {
  return (
    <Container>
      <br/>
      <AHeader />
      <Background>
      <img src={LM3} style={{opacity: "0.5"}} />
      </Background>
      <TAddResource />
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




import React from "react";
import styled from "styled-components";
import SHeader from "../../../AllHeaders/SHeader";
import ViewVideo from "../../Teacher/ViewVideo/View-video";

const VIDEOUser = () => {
  return (
    <Container>
      <SHeader />
      <Background>
        <img src="/images/LM3.png" style={{filter: "blur(5px)"}} />
        <Overlay />
      </Background>
      <ViewVideo />
    </Container>
  );
};

export default VIDEOUser;

const Container = styled.div`
  position: relative;
`;

const Background = styled.div`
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity: ;

    img {
        width:100%;
        height:100%;
        object-fit:cover;
    }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
`;
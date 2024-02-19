import React from "react";
import SinglePage from "./Single-page";
import styled from "styled-components";
import AHeader from "../../../AllHeaders/AHeader";

const PDF = () => {
  return (
    <Container>
      <AHeader />
      <Background>
        <img src="/images/LM3.png" style={{opacity: "0.5"}} />
      </Background>
      <SinglePage />
    </Container>
  );
};

export default PDF;

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
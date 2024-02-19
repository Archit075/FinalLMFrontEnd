import React from "react";
import styled from "styled-components";
import SHeader from "../../../AllHeaders/SHeader";
import SinglePage from "../../Teacher/ViewPdf/Single-page";

const PDFUser = () => {
  return (
    <Container>
      <SHeader/>
      <Background>
        <img src="/images/LM3.png" style={{opacity: "0.9"}}/>
      </Background>
      <SinglePage />
    </Container>
  );
};

export default PDFUser;

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
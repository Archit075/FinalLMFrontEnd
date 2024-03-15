import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import { UrlResources } from "../../../config";

export default function ViewVideo(props) {
  const { state } = useLocation();
  const { pdfName } = state;

  return (
    <VideoWrapper style={{paddingTop: "10%"}}>
        <TvScreen>
      <VideoPlayer style={{width: "100%"}} controls>
        <source src={`${UrlResources}/api/Pdf/get/pdf/` + pdfName} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoPlayer>
      </TvScreen>
    </VideoWrapper>
  );
}

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const VideoPlayer = styled.video`
  width: 100%;
  max-height: 80vh;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;


const TvScreen = styled.div`
  width: 800px; /* Adjust width as needed */
  height: 600px; /* Adjust height as needed */
  border: 20px solid black; /* TV border */
  border-radius: 20px; /* Rounded corners */
  background-color: #000; /* TV screen background color */
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.5); /* Inner shadow effect */
  position: relative;
  overflow: hidden; /* Hide overflow content */
  
  /* Screen reflection effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
    background: rgba(255, 255, 255, 0.1);
    transform: skewX(-30deg) translateX(20px) translateY(-10px);
  }
  
//   &::after {
//     content: "";
//     position: absolute;
//     top: 0;
//     right: 0;
//     width: 50%;
//     height: 50%;
//     background: rgba(255, 255, 255, 0.1);
//     transform: skewX(30deg) translateX(-20px) translateY(-10px);
//   }

  video {
    width: 100%;
    height: 100%;
  }
`;

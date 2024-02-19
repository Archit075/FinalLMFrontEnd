import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Parallax, Background } from "react-parallax";
import video2 from "../Home/video2.mp4";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import Header from "../../../AllHeaders/HNavbar";
import Footer from "../../../Footer/Footer";

// import "./Home.css";
// import { Container } from "react-bootstrap"; linear-gradient(90deg, rgb(127, 255, 212)  0%, rgb(41, 160, 150) )

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const Home = () => {
  const [data, setData] = useState([]);
  const img1 =
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
  const img2 = "https://unsplash.com/photos/library-interior-z_DkoUqgx6M";
  const img3 =
    "https://unsplash.com/photos/brown-wooden-book-shelf-with-books-BEEyeib-am8";

  useEffect((e) => {
    fetchData();
  }, []);

  const arrFeedback = [
    {
      id: 1,
      feedback:
        "I can't express how grateful I am to LearningMate for my success. Their expert guidance, doubt-clearing sessions, and resources played a pivotal role in my high rank. Thank you, LMS, for making my dream come true!",
      name: "Abdur Rahman",
      std: "10th",
      rating: "⭐⭐⭐⭐"
      
    },
    {
      id: 2,
      feedback:
        "Studying at LMS was a game-changer for me. The well-structured courses, doubt-solving sessions, and constant support from the faculty were instrumental in my success. I couldn't have done it without them",
      name: "Suraj Shinde",
      std: "12th",
      rating: "⭐⭐⭐⭐"

    },
    {
      id: 3,
      feedback:
        "I can't express how grateful I am to LearningMate for my success. Their expert guidance, doubt-clearing sessions, and resources played a pivotal role in my high rank. Thank you, LMS, for making my dream come true!",
      name: "Archit Pandey",
      std: "11th",
      rating: "⭐⭐⭐⭐⭐"

    },
    {
      id: 4,
      feedback:
        "Studying at LMS was a game-changer for me. The well-structured courses, doubt-solving sessions, and constant support from the faculty were instrumental in my success. I couldn't have done it without them",
      name: "Preet",
      std: "9th",
      rating: "⭐⭐⭐"

    },
  ];

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
      );
      //   const data = await response.json()
      const mydata = response.data.photos;
      setData(mydata);
      console.log(mydata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div  style={{width: "100vw"}}>
      <Header />
      <Parallax
        className="h1"
        bgImage = {img1}
        strength={200}
        renderLayer={(percentage) => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgb(15, 203, 153, ${percentage * 0.8})`,
                // rgb(41, 160, 150
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500,
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles}>COME! LET'S LEARN</div>
        </div>
      </Parallax>

      <Container>
        <Row>
          {arrFeedback.map((item) => (
            <Col key={item.id} sm={6} md={4} lg={3}>
              <Card
                 style={{
                //   width: "15rem",
                //   height: "15rem",
                marginTop: "2rem",
                marginBottom: "2rem"
                //   overflowY: "auto",
                }}
              >
                <Card.Img variant="top" src={item.url} />
                <Card.Body>
                  <Card.Text style={{ fontSize: "9px", margin: "2px" }}>
                    {item.std}
                  </Card.Text>
                  <Card.Title style={{ fontSize: "15px" }}>
                    {item.name}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "12px" }}>
                    {item.feedback}
                  </Card.Text>
                  <Card.Text style={{ fontSize: "12px", float: "right" }}>
                    {item.rating}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <MDBFooter
        className="text-center text-white"
        style={{ backgroundColor: "#201A43" }}
      >
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="6">
                <div className="ratio ratio-16x9">
                  <video
                    style={{
                      borderWidth: "0",
                      height: "350px",
                    }}
                    loop
                    autoPlay={true}
                    muted
                  >
                    <source
                      style={{
                        borderWidth: "0",
                        height: "300px",
                      }}
                      width="500vw"
                      src={video2}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </MDBCol>
            </MDBRow>
      </MDBFooter>
      <Footer />
    </div>
  );
};

export default Home;

{
  /* <Parallax
        blur={10}
        bgImage={
          "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
        }
        bgImageAlt="the cat"
        strength={200}
      ></Parallax> */
}

{
  /* <iframe
                    loop="1"
                    control="0"
                    className="shadow-1-strong rounded"
                    src={video2}
                    allow="autoplay"
                    title="YouTube video"
                    allowFullScreen
                    data-gtm-yt-inspected-2340190_699="true"
                    id="388567449"
                  ></iframe> */
}
{/* <div className="homepage">
         <div
          style={{
            background: `#00849A`,
            borderWidth: "0",
            height: "250px",
            marginTop: "-47px",
          }}
        >
          <video
            style={{
              justifyContent: "center",
              alignContent: "center",
              paddingLeft: "390px",
              borderWidth: "0",
              height: "250px",
            }}
            loop
            autoPlay={true}
            muted
          >
            <source
              style={{
                justifyContent: "center",
                alignContent: "center",
                borderWidth: "0",
                height: "250px",
              }}
              width="500vw"
              src={video11}
              type="video/mp4"
            />
          </video>
        </div>
      </div> */}

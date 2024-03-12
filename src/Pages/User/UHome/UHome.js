import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Res1 from "./YourBooks.jpg";
// import { Link } from 'react-router-dom'
// import { URL, SPRING_URL, URLUser, UrlResources } from "../../../config";
import Download1 from "./downloading.png";
import { toast } from "react-toastify";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { UrlResources } from "../../../config";
import "./UHome.css";

const UHome = () => {
  const navigate = useNavigate();
  const { standard } = sessionStorage;
  const [Resources, setResources] = useState([]);

  const searchResources = async () => {
    const urlResource = `${UrlResources}/api/Pdf/Pdf/Standard/${standard}`;
    await axios
      .post(urlResource)
      .then((response) => {
        const result = response.data;
        console.log("result is :" + result[0]);
        console.log(result);

        if (result !== null) {
          setResources(result);
          console.log("result dat a is" + result);
        } else {
          toast.error("Resources are empty");
        }
      })
      .catch((error) => {
        toast.error(`${error.response.data.error}`);
      });
  };

  const downloadFile = (date, resourceName) => {
    // const url = `${UrlResources}/api/pdf/get/pdf/${resourceName}`;
    console.log("FILENAME " + resourceName);
    window.location.href = `https://localhost:7030/api/Pdf/DownloadFile/${resourceName}/${date}`;
  };

  useEffect(() => {
    searchResources();
    console.log("getting called");
  }, []);

  return (
    // <div className="page-wrapper" id="YBC" style={{ paddingBottom: "300px" }}>
    //   <Container style={{ paddingLeft: "0", marginLeft: "4%" }}>
    //     <Row>
    //       {Resources.map((Resource, index) => (
    //         <Col className="infographic-cards" md={4} sm={12} lg={3}>
    //           <Card>
    //             <div
    //               class="color-4"
    //               onClick={() => {
    //                 navigate("/pdfUser", {
    //                   state: { pdfName: Resource.pdfName },
    //                 });
    //                 console.log(
    //                   "pdfName in resourcelist is : " + Resource.pdfName
    //                 );
    //               }}
    //             >
    //               <h4>{Resource.pdfName}</h4>
    //               <h5>{"Category: " + Resource.category}</h5>
    //               <h5>{"Subject: " + Resource.subject}</h5>
    //               <p>{Resource.description}</p>
    //               {/* <span style={{}}> */}
    //               <h6 style={{ paddingTop: "0" }}>
    //                 {"Date: " +
    //                   Resource.created.slice(0, 10) +
    //                   " - Time: " +
    //                   Resource.created.slice(12, 16)}
    //               </h6>
    //               <p style={{ fontWeight: "bolder" }}>Click on Card to View</p>
    //               {/* <h6 style={{float: "right", paddingRight: "10%"}}>{Resource.created.slice(12, 16)}</h6> */}
    //               {/* </span> */}

    //               {/* <Button
    //                 style={{ marginRight: "2%" }}
    //                 variant="primary"
    //                 className="btn btn-success btn-sm"
    //                 id="vbtn"
    //                 onClick={() => {
    //                   navigate("/pdfUser", {
    //                     state: { pdfName: Resource.pdfName },
    //                   });
    //                   console.log(
    //                     "pdfName in resourcelist is : " + Resource.pdfName
    //                   );
    //                 }}
    //               >
    //                 View
    //               </Button> */}

    //               {/* <p class="number-box" style={{ color: "black" }}> */}
    //               {/* {Resource.standard} */}
    //             </div>
    //             <button
    //               class="number-box"
    //               style={{ marginLeft: "42%" }}
    //               onClick={() =>
    //                 downloadFile(Resource.created, Resource.pdfName)
    //               }
    //             >
    //               <img
    //                 style={{ marginLeft: "5%" }}
    //                 width={"40px"}
    //                 src={Download1}
    //                 alt="blank"
    //               />
    //             </button>
    //             {/* </p> */}

    //             {/* <Card.Img
    //               style={{ height: "8rem", width: "100%" }}
    //               variant="top"
    //               src={Res1}
    //             /> */}
    //             {/* <Card.Body style={{ paddingTop: "5px", paddingBottom: "5px" }}>
    //               <Card.Title
    //                 style={{
    //                   paddingTop: "2px",
    //                   paddingBottom: "2px",
    //                   margin: "0",
    //                 }}
    //               >
    //                 {Resource.pdfName}
    //               </Card.Title>
    //               <Card.Text
    //                 style={{
    //                   paddingTop: "2px",
    //                   paddingBottom: "2px",
    //                   margin: "0",
    //                 }}
    //               >
    //                 {Resource.category}
    //               </Card.Text>
    //               <Card.Text
    //                 style={{
    //                   paddingTop: "2px",
    //                   paddingBottom: "2px",
    //                   margin: "0",
    //                 }}
    //               >
    //                 {Resource.standard}
    //               </Card.Text>
    //               <Button
    //                 style={{ marginTop: "0" }}
    //                 variant="primary"
    //                 className="btn btn-success btn-sm"
    //                 id="vbtn"
    //                 onClick={() => {
    //                   navigate("/pdfUser", {
    //                     state: { pdfName: Resource.pdfName },
    //                   });
    //                   console.log(
    //                     "pdfName in resourcelist is : " + Resource.pdfName
    //                   );
    //                 }}
    //               >
    //                 View
    //               </Button>
    //             </Card.Body> */}
    //           </Card>
    //         </Col>
    //       ))}
    //     </Row>
    //   </Container>
    // </div>

    <div class="card-row" style={{ paddingTop: "10%", paddingBottom: "20%" }}>
      {Resources.map((Resource, index) => (
        <div class="cards">
          <h2>{Resource.pdfName}</h2>
          <h6 style={{ paddingTop: "0" }}>
            {"Date: " +
              Resource.created.slice(0, 10) +
              " - Time: " +
              Resource.created.slice(12, 16)}
          </h6>
          <div class="card-text">
            <h5>{"Category: " + Resource.category}</h5>
            <h5>{"Subject: " + Resource.subject}</h5>
            <p>{Resource.description}</p>
            <Col style={{float: "left"}}>
              <button
                onClick={() => {
                  navigate("/pdfUser", {
                    state: { pdfName: Resource.pdfName },
                  });
                  console.log(
                    "pdfName in resourcelist is : " + Resource.pdfName
                  );
                }}
              >
                {" "}
                view{" "}
              </button>

              <button style={{float: "right"}}
                onClick={() => downloadFile(Resource.created, Resource.pdfName)}
              >
                {" "}
                download{" "}
              </button>
            </Col>
          </div>
        </div>
      ))}
    </div>

    // <div class="cards-list" style={{ paddingTop: "10%", paddingBottom: "20%" }}>

    //   {Resources.map((Resource, index) => (
    //     <div class="card1">
    //       <div class="card_image">
    //         <img src="https://i.redd.it/b3esnz5ra34y.jpg" />

    //         <button
    //           onClick={() => {
    //             navigate("/pdfUser", {
    //               state: { pdfName: Resource.pdfName },
    //             });
    //             console.log("pdfName in resourcelist is : " + Resource.pdfName);
    //           }}
    //         >
    //           {" "}
    //           view{" "}
    //         </button>

    //         <button
    //           onClick={() => downloadFile(Resource.created, Resource.pdfName)}
    //         >
    //           {" "}
    //           download{" "}
    //         </button>
    //       </div>
    //       <div class="card_title title-white">
    //         <p>{Resource.pdfName}</p>
    //         <h4></h4>
    //         <h5>{"Category: " + Resource.category}</h5>
    //         <h5>{"Subject: " + Resource.subject}</h5>
    //         <p>{Resource.description}</p>
    //       </div>
    //     </div>
    //   ))}

    // </div>
  );
};

export default UHome;

import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Res1 from "./YourBooks.jpg";
// import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { URL, SPRING_URL, URLUser, UrlResources } from "../../../config";
import "./UHome.css";

const UHome = () => {
  const [book_id, setBook_Id] = useState("");
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
    console.log("FILENAME "+resourceName);
    window.location.href = `https://localhost:7030/api/Pdf/DownloadFile/${resourceName}/${date}`;
  };

  useEffect(() => {
    searchResources();
    console.log("getting called");
  }, []);

  return (
    <div className="page-wrapper" id="YBC">
      <Container>
        <Row>
          {Resources.map((Resource, index) => (
            <Col className="infographic-cards" md={4} sm={12} lg={3}>
              <Card style={{ margin: "5rem" }}>
                <div
                  class="color-4"
                  onClick={() => {
                    navigate("/pdfUser", {
                      state: { pdfName: Resource.pdfName },
                    });
                    console.log(
                      "pdfName in resourcelist is : " + Resource.pdfName
                    );
                  }}
                >
                  <h4>{Resource.pdfName}</h4>
                  <h5>{"Category: " + Resource.category}</h5>
                  <h5>{"Subject: " + Resource.subject}</h5>
                  <p>{Resource.description}</p>
                  {/* <span style={{}}> */}
                  <h6 style={{ marginTop: "0" }}>
                    {"Date: " +
                      Resource.created.slice(0, 10) +
                      " - Time: " +
                      Resource.created.slice(12, 16)}
                  </h6>
                  {/* <h6 style={{float: "right", paddingRight: "10%"}}>{Resource.created.slice(12, 16)}</h6> */}
                  {/* </span> */}

                  {/* <Button
                    style={{ marginRight: "2%" }}
                    variant="primary"
                    className="btn btn-success btn-sm"
                    id="vbtn"
                    onClick={() => {
                      navigate("/pdfUser", {
                        state: { pdfName: Resource.pdfName },
                      });
                      console.log(
                        "pdfName in resourcelist is : " + Resource.pdfName
                      );
                    }}
                  >
                    View
                  </Button> */}

                  {/* <p class="number-box" style={{ color: "black" }}> */}
                  {/* {Resource.standard} */}
                </div>
                <button
                  class="number-box"
                  style={{ marginLeft: "42%" }}
                  onClick={()=> downloadFile(Resource.created, Resource.pdfName)}
                >
                  ⬇️
                </button>
                {/* </p> */}

                {/* <Card.Img
                  style={{ height: "8rem", width: "100%" }}
                  variant="top"
                  src={Res1}
                /> */}
                {/* <Card.Body style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                  <Card.Title
                    style={{
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      margin: "0",
                    }}
                  >
                    {Resource.pdfName}
                  </Card.Title>
                  <Card.Text
                    style={{
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      margin: "0",
                    }}
                  >
                    {Resource.category}
                  </Card.Text>
                  <Card.Text
                    style={{
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      margin: "0",
                    }}
                  >
                    {Resource.standard}
                  </Card.Text>
                  <Button
                    style={{ marginTop: "0" }}
                    variant="primary"
                    className="btn btn-success btn-sm"
                    id="vbtn"
                    onClick={() => {
                      navigate("/pdfUser", {
                        state: { pdfName: Resource.pdfName },
                      });
                      console.log(
                        "pdfName in resourcelist is : " + Resource.pdfName
                      );
                    }}
                  >
                    View
                  </Button>
                </Card.Body> */}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default UHome;

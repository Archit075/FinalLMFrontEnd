import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import Res1 from "./YourBooks.jpg";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { UrlResources } from "../../../config";
import "./Publishable.css";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import Res1 from "./YourBooks.jpg";

export default function Publishable() {
  const { standard } = sessionStorage;

  const { state } = useLocation();
  const classtd = state ? state.classtd : null;

  console.log("classstd : " + classtd);

  console.log("Value of standard in resourcelist : " + standard);
  const navigate = useNavigate();
  const [Resources, setResources] = useState([]);

  const searchResources = () => {
    if (!classtd) {
      console.error("Class standard is not available in the state.");
      return;
    }

    console.log(standard);
    // const urlSpring = `${SPRING_URL}/student/viewIssuedBooks/${stud_id}`;
    const url = `${UrlResources}/api/Pdf/Pdf/Standard/Publishable/${classtd}`; //https://localhost:7030/api/Pdf/productPdf/delete/1
    console.log("url is : " + url);
    console.dir(Resources);

    axios
      .post(url)
      .then((response) => {
        const result = response.data;
        console.log("result is :" + result[0]);
        console.log(result);

        if (result != null) {
          setResources(result);
          toast.info("Welcome to Publishable!!", { autoClose: 800 });
          console.log(result["message"]);
        } else {
          toast.error("Resources are empty");
          console.log("PDf List is empty.");
          console.error(result["message"]);
        }
      })
      .catch((error) => {
        toast.warning("Resources are empty");
      });
  };

  const PublishBook = (pdf_Name, std) => {
    const urlResource = `${UrlResources}/api/Pdf/Publish/${pdf_Name}/${std}`;
    console.log("pdf name is : " + pdf_Name);
    console.log("url is : " + urlResource);

    axios
      .post(urlResource)
      .then((response) => {
        console.log("response is : " + response);
        const result = response.data;

        if (result["statusCode"] === 1) {
          toast.success("Resource Published successfully!!", {
            autoClose: 800,
          });
          console.log("message is " + result["message"]);
          setResources((prevResources) =>
            prevResources.filter((resource) => resource.pdfName !== pdf_Name)
          );
          // searchIssuedBooksBySpring();
        } else {
          console.log(result["message"]);
          // toast.error(result["message"]);
        }
      })
      .catch((error) => {
        console.log("error");
        searchResources();
        console.error(error.response.data.error);
      });
  };

  useEffect(() => {
    searchResources();

    console.log("getting called");
  }, []);

  return (
    <div
      style={{ paddingBottom: "100px" }}
      className="container"
      id="YBC"
    >
      <Container style={{ paddingTop: "30px", paddingBottom: "200px" }}>
        <Row>
          {Resources.map((Resource) => (
            <Col md={4} sm={12} lg={3} style={{ padding: "20px" }}>
              {/* <Card >
            <Card.Img
              style={{ height: "8rem", width: "100%" }}
              variant="top"
              src={Res1}
            />
            <Card.Body style={{ paddingTop: "5px", paddingBottom: "5px", backgroundColor: "#DDF5FF" }}>
              <Card.Title
                style={{ paddingTop: "2px", paddingBottom: "2px", margin: "0" }}
              >
                {Resource.pdfName}
              </Card.Title>
              <Card.Text
                style={{ paddingTop: "2px", paddingBottom: "2px", margin: "0" }}
              >
                {Resource.category}
              </Card.Text>
              <Card.Text
                style={{ paddingTop: "2px", paddingBottom: "2px", margin: "0" }}
              >
                {Resource.dateCreated}
              </Card.Text>
              <Card.Text
                style={{ paddingTop: "2px", paddingBottom: "2px", margin: "0" }}
              >
                {Resource.created}
              </Card.Text>
              <Card.Text
                style={{ paddingTop: "2px", paddingBottom: "2px", margin: "0" }}
              >
                {Resource.standard}
              </Card.Text>
              <Button
                variant="primary"
                className="btn mr-5 btn-sm"
                id="rbtn"
                onClick={() => PublishBook(Resource.pdfName, standard)}
              >
                Publish
              </Button>
            </Card.Body>
          </Card> */}

              <div className="cardBox3" style={{ marginBottom: "24px" }}>
                <div className="card3">
                  <h2>{Resource.pdfName}</h2>
                  <span1>{Resource.category}</span1>
                  <div class="content">
                    {/* <h3> {Resource.created.slice(0, 10)}</h3> */}
                    <p>{Resource.description}</p>
                    {/* <Button
                        style={{ marginTop: "0" }}
                        variant="primary"
                        className="btn btn-success btn-sm"
                        id="vbtn"
                        onClick={() => {
                          navigate("/pdfPage", {
                            state: { pdfName: Resource.pdfName },
                          });
                          console.log(
                            "pdfName in resourcelist is : " + Resource.pdfName
                          );
                        }}
                      >
                        View
                      </Button> */}
                    <Button
                      variant="primary"
                      className="btn mr-5 btn-sm"
                      id="rbtn"
                      onClick={() => PublishBook(Resource.pdfName, standard)}
                    >
                      Publish
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      {/* </div> */}
    </div>
  );
}

// import res2 from './images'
// import res3 from './images'

// let colors = {true ? res2 : res3}

// resourcce.map((key) => {
//   <card
//   bg={colors}
//   style={{ backgroundColor : {colors}}}>

//   </card>
// }, )

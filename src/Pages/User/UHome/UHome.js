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

  useEffect(() => {
    searchResources();
    console.log("getting called");
  }, []);

  return (
    <div className="container" id="YBC">
      <h1 id="YBID">Your Resources</h1>
      <Container>
        <Row>
          {Resources.map((Resource, index) => (
            <Col md={4} sm={12} lg={3}>
              <Card className={index % 2 === 0 ? "card-even" : "card-odd"}>
                {/* <Card.Img
                  style={{ height: "8rem", width: "100%" }}
                  variant="top"
                  src={Res1}
                /> */}
                <Card.Body style={{ paddingTop: "5px", paddingBottom: "5px" }}>
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
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default UHome;

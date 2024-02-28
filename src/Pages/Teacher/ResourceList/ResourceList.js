import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Res1 from "./YourBooks.jpg";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { UrlResources } from "../../../config";
// import { toast } from "react-toastify";
import moment from "moment";
import "./ResourceList.css";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";

export default function ResourceList() {
  
  const { standard } = sessionStorage;
 
  const { state } = useLocation();
  const classtd = state ? state.classtd : null;

  // console.log("classstd : " +state.classtd);
  console.log("classtd : " + classtd);

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
    const url = `${UrlResources}/api/Pdf/Pdf/Standard/${classtd}`;
    console.log("url is : " + url);
    // console.dir(Resources);

    axios
      .post(url)
      .then((response) => {
        const result = response.data;
        const str1 = result[1].created;
        const str2 = result[1].dateCreated;
        console.log("result is :" + result[0]);
        console.log(result);

        if (result != null) {
          setResources(result);
          toast.info("Welcome to Resources");
          console.log(result[1].message);
          console.dir( "********** "+ str1.slice(0, 10) + "  "+typeof(str2) + " **********");
        } else {
          // toast.error("Resources are empty");
          console.log("PDf List is empty.");
          console.error(result["message"]);
        }
      })
      .catch((error) => {
        // toast.warning("Resources are empty");
      });
  };

  const returnBook = (pdf_Name, id) => {
    const urlResource = `${UrlResources}/api/Pdf/productPdf/delete/${pdf_Name}/${id}`;
    //https://localhost:7030/api/Pdf/productPdf/delete/Pdf2?date=2024-02-23T16%3A49%3A18.824678
    // https://localhost:7030/api/Pdf/productPdf/delete/Pdf2?date=2024-02-23T16%3A49%3A18.824678
   // https://localhost:7030/api/Pdf/productPdf/delete/Pdf5?/date=2024-02-23T17:09:28.0920332
    console.log("pdf name is : " + pdf_Name);
    console.log("pdf date is  : " + id);
    // console.log(urlResource, UrlResources);
    console.log("url is "+urlResource);


    axios
      .delete(urlResource)
      .then((response) => {
       
        const result = JSON.parse(response);
        console.log("response is : " + result);

        if (result["statusCode"] === 1) {
          toast.success("Resources deleted successfully!!");
          console.log(result["message"]);
          setResources((prevResources) =>
            prevResources.filter((resource) => resource.pdfName !== pdf_Name)
          );
          // searchIssuedBooksBySpring();
        } else {
          console.log("Did not delete");
          console.log(result["message"]);
          // toast.error(result["message"]);
        }
      })
      .catch((error) => {
        console.log("error");
        searchResources();
        console.log("There is an error");
       // console.error(error.response.data.error);
      });
  };

  useEffect(() => {
    searchResources();
    console.log("getting called");
  }, []);

  return (
    <div style={{ paddingTop: "50px", paddingBottom: "100px" }} className="container" id="YBC">
      <Container>
        <Row>
          {Resources != { } ? Resources.map((Resource) => (
            <Col md={4} sm={12} lg={3}>
              <Card style={{marginBottom: "24px"}}>
                <Card.Img
                  style={{ height: "8rem", width: "100%" }}
                  variant="top"
                  src={Res1}
                />
                <Card.Body
                  style={{
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    backgroundColor: "#DDF5FF",
                  }}
                >
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
                    {Resource.dateCreated}
                  </Card.Text>
                  <br />
                  <Card.Text
                    style={{
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      margin: "0",
                    }}
                  >
                    {Resource.created.slice(0, 10)}
                  </Card.Text>
                  <Button
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
                  </Button>
                  <Button
                    variant="danger"
                    className="btn mr-5 btn-sm"
                    id="rbtn"
                    onClick={() =>
                      returnBook(Resource.pdfName, Resource.id)
                    }
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))  : <div> </div>}
        </Row>
      </Container>
      {/* </div> */}
    </div>
  );
}

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Res1 from "./YourBooks.jpg";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { UrlResources } from "../../../config";
import axios from "axios";
// import { toast } from "react-toastify";
import moment from "moment";
import "./ResourceList.css";
import { Col, Container, Row } from "react-bootstrap";

export default function ResourceList() {
  const { state } = useLocation();
  const { classtd } = state;
  const { standard } = sessionStorage;

  console.log("Value of standard in resourcelist : " + classtd);
  const navigate = useNavigate();
  const [Resources, setResources] = useState([]);

  const searchResources = () => {
    console.log(classtd);
    // const urlSpring = `${SPRING_URL}/student/viewIssuedBooks/${stud_id}`;
    const url = `${UrlResources}/api/Pdf/Pdf/Standard/${classtd}`;
    console.log("url is : " + url);

    axios
      .post(url)
      .then((response) => {
        const result = response.data;
        console.log("result is :" + result[0]);
        console.log(result);

        if (result != null) {
          setResources(result);
          console.log(result["message"]);
        } else {
          // toast.error("Resources are empty");
          console.log("PDf List is empty.");
          console.error(result["message"]);
        }
      })
      .catch((error) => {
        console.error("Resources are empty.");
      });
  };

  const returnBook = (pdf_Name, std) => {
    if (std != standard) {
      console.log("session storage standard is : " + standard);
      console.log("Your are not authorized to delete in class :" + std);
      // toast.error("Your are not authorized to modify the data in class : "+std);
    } else {
      const urlResource = `${UrlResources}/api/Pdf/productPdf/delete/${pdf_Name}`;
      console.log("pdf name is : " + pdf_Name);

      axios
        .delete(urlResource)
        .then((response) => {
          console.log("response is : " + response);
          const result = response.data;

          if (result["statusCode"] === 1) {
            // toast.success("Resources deleted successfully!!");
            console.log(result["message"]);
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
    }
  };

  useEffect(() => {
    searchResources();
    returnBook(Resources.pdfName, classtd);
    console.log("getting called");
  }, []);

  return (
    <div className="container" id="YBC">
      <h1 id="YBID" style={{ paddingTop: "30px" }}>
        Your Resources
      </h1>
      {/* <table class="table table-hover" id="reqTable">
        <thead>
          <tr className="YBTR">
            <th scope="col">Resource Name</th>
            <th scope="col">Resource Category</th>
            <th scope="col">Standard</th>
          </tr>
        </thead>
        <tbody>
          {Resources.map((Resource) => (
            <tr>
              <th scope="row">{Resource.pdfName}</th>
              <td id="ybs">{Resource.category}</td>
              <td id="ybs">{Resource.standard}</td>

              <td id="ybs">
                <button
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
                  VIEW
                </button>
                <button
                  className="btn btn-danger mr-5 btn-sm"
                  id="rbtn"
                  onClick={() =>
                    returnBook(Resource.pdfName, Resource.standard)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <Container >
        <Row >
          {Resources.map((Resource) => (
            <Col md={4} sm={12} lg={3}>
          <Card >
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
                {Resource.standard}
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
                onClick={() => returnBook(Resource.pdfName, Resource.standard)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
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
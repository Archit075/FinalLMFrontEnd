import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import Res1 from "./YourBooks.jpg";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { UrlGateway, UrlResources } from "../../../config";
import "./TResourceBin.css";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import Res1 from "./YourBooks.jpg";

export default function TResourceBin() {
  const { standard } = sessionStorage;

  const { state } = useLocation();
  const classtd = state ? state.classtd : null;

  console.log("classstd : " + classtd);

  console.log("Value of standard in resourcelist : " + standard);
  const navigate = useNavigate();
  const [Resources, setResources] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterResult, setFilterResult] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = Resources.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilterResult(filteredData);
    } else {
      setFilterResult(Resources);
    }
  };

  const searchResources = () => {
    if (!classtd) {
      console.error("Class standard is not available in the state.");
      return;
    }

    console.log(standard);

    // const url = `${UrlResources}/api/Pdf/Pdf/Standard/Deleted/${classtd}`;
    const url = `${UrlGateway}/gateway/pdf/getDeletedbystd/${classtd}`;

    https: console.log("url is : " + url);
    console.dir(Resources);

    axios
      .post(url)
      .then((response) => {
        const result = response.data;
        console.log("result is :" + result[0]);
        console.log(result);

        if (result != null) {
          setResources(result);
          toast.info("Welcome to Bin!!", { autoClose: 800 });
          console.log(result["message"]);
        } else {
          toast.error("Resources are empty");
          console.log("PDf List is empty.");
          console.error(result["message"]);
        }
      })
      .catch((error) => {
        toast.warning("Resources are empty", { autoClose: 800 });
      });
  };

  const binBook = (pdf_Name, id) => {
    // const urlResource = `${UrlResources}/api/Pdf/Publish/${pdf_Name}/${id}`;
    const urlResource = `${UrlGateway}/gateway/pdf/Publish/${pdf_Name}/${id}`;

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
            prevResources.filter((resource) => resource.id !== id)
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

  useEffect(() => {
    setFilterResult(
      Resources.filter((item) =>
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, Resources]);

  return (
    <div style={{ paddingBottom: "200px" }} className="container" id="YBC">
      <Container style={{ paddingTop: "30px", paddingBottom: "100px" }}>
        <Row>
          <Col>
            <input
              style={{ marginTop: "1.6%" }}
              placeholder="Search resource here..."
              className="form-control"
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          {searchInput.length > 1
            ? filterResult.map((Resource) => (
                <Col md={4} sm={12} lg={3} style={{ marginBottom: "10px" }}>
                  <div
                    className="cardBox2"
                    style={{ marginBottom: "10px", margin: "1rem" }}
                  >
                    <div className="card2">
                      <h2>{Resource.pdfName}</h2>
                      <span1>{Resource.subject}</span1>
                      {/* <h3> {Resource.created.slice(0, 10)}</h3> */}
                      {/* <h3>{Resource.created.slice(11, 20)}</h3> */}
                      <div class="content">
                        <p>{Resource.description}</p>
                        <p style={{backgroundColor: Resource.category === "pdf" ? 'orange' : 'purple', padding: "2%", borderRadius: "10%"}}>{Resource.category}</p>
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
                          onClick={() => binBook(Resource.pdfName, Resource.id)}
                        >
                          Publish
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))
            : Resources.map((Resource) => (
                <Col md={4} sm={12} lg={3} style={{ marginBottom: "10px" }}>
                  <div
                    className="cardBox2"
                    style={{ marginBottom: "10px", margin: "1rem" }}
                  >
                    <div className="card2">
                      <h2>{Resource.pdfName}</h2>
                      <span1>{Resource.subject}</span1>
                      {/* <h3> {Resource.created.slice(0, 10)}</h3> */}
                      {/* <h3>{Resource.created.slice(11, 20)}</h3> */}
                      <div class="content">
                        <p>{Resource.description}</p>
                        <p style={{backgroundColor: Resource.category === "pdf" ? 'orange' : 'purple', padding: "2%", borderRadius: "10%", width: "50px", marginLeft: "33%"}}>{Resource.category}</p>
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
                          onClick={() => binBook(Resource.pdfName, Resource.id)}
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

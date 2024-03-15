// import Card from "react-bootstrap/Card";
// import Res1 from "./YourBooks.jpg";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import moment from "moment";
import { UrlGateway, UrlResources } from "../../../config";
// import NotFound from "./NotFound/NotFound";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
// import { UrlGateway } from "../../../config";
import "./ResourceList.css";
import { Col, Container, Row } from "react-bootstrap";

export default function ResourceList() {
  const { standard } = sessionStorage;

  const { state } = useLocation();
  const classtd = state ? state.classtd : null;

  // console.log("classstd : " +state.classtd);
  console.log("classtd : " + classtd);

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
    // const url = `${UrlResources}/api/Pdf/Pdf/Standard/${classtd}`;
    const url = `${UrlGateway}/gateway/pdf/getallbystd/${classtd}`;

    console.log("url is : " + url);
    // console.dir(Resources);

    axios
      .post(url)
      .then((response) => {
        const result = response.data;
        const str1 = result[0].created;
        const str2 = result[0].dateCreated;
        console.log("result is :" + result[0]);
        console.log(result);

        if (result != null) {
          setResources(result);
          toast.info("Welcome to Resources", { autoClose: 800 });
          console.log(result[0].message);
          console.dir(
            "********** " +
              str1.slice(0, 10) +
              "  " +
              typeof str2 +
              " **********"
          );
        } else {
          toast.error("Resources are empty", { autoClose: 800 });
          console.log("PDf List is empty.");
          console.error(result["message"]);
        }
      })
      .catch((error) => {
        toast.warning("Resources are empty", { autoClose: 800 });
      });
  };

  const returnBook = (pdf_Name, id) => {
    // const urlResource = `${UrlResources}/api/Pdf/productPdf/delete/${pdf_Name}/${id}`;
console.log("standard is : "+standard);

    if( classtd != standard){
      toast.error(`You are not authorized to modify the resources in class ${classtd}`)
    }
    else{
    const urlResource = `${UrlGateway}/gateway/pdf/delete/${pdf_Name}/${id}`;

    console.log("pdf name is : " + pdf_Name);
    console.log("pdf date is  : " + id);
    // console.log(urlResource, UrlResources);
    console.log("url is " + urlResource);

    axios
      .delete(urlResource)
      .then((response) => {
        const result = response.data;
        console.log("response is : " + result);

        if (result["statusCode"] === 1) {
          toast.success("Resources deleted successfully!!", { autoClose: 800 });
          console.log(result["message"]);
          setResources((prevResources) =>
            prevResources.filter((resource) => resource.id !== id)
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
}};

  useEffect(() => {
    searchResources();
    // returnBook();
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
    <div
      style={{ paddingTop: "50px", paddingBottom: "100px" }}
      className="container"
      id="YBC"
    >
      <Container style={{ paddingBottom: "200px" }}>
        <Row>
          <Col>
              <input
              placeholder="Search resource here..."
              className="form-control"
              onChange={(e) => searchItems(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          {searchInput.length > 1
            ? filterResult.map((Resource) => (
                <Col md={4} sm={12} lg={3}>
                  <div className="cardBox1" style={{ marginBottom: "24px" }}>
                    <div className="card1">
                      <span1>{Resource.subject}</span1>
                      <h5>{Resource.pdfName}</h5>
                      <h5>{Resource.created.slice(0, 10)}</h5>
                      <h5>{Resource.created.slice(11, 20)}</h5>
                        
                      <p style={{backgroundColor: Resource.category === "pdf" ? 'red' : 'blue', padding: "2%", borderRadius: "7%"}}>{Resource.category}</p>
                      <div class="content">
                        <p>{Resource.description}</p>

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
                      </div>
                    </div>
                  </div>
                </Col>
              ))
            : 
            Resources.map((Resource) => (
                <Col md={4} sm={12} lg={3}>
                  <div className="cardBox1" style={{ marginBottom: "24px" }}>
                    <div className="card1">
                      <span1>{Resource.subject}</span1>
                      <h5>{Resource.pdfName}</h5>
                      <h5>{Resource.created.slice(0, 10)}</h5>
                      <h5>{Resource.created.slice(11, 20)}</h5>
                      <p style={{backgroundColor: Resource.category === "pdf" ? 'orange' : 'purple', padding: "2%", borderRadius: "10%"}}>{Resource.category}</p>
                      <div class="content">
                        <p>{Resource.description}</p>

                        <Button
                          style={{ marginTop: "0" }}
                          variant="primary"
                          className="btn btn-success btn-sm"
                          id="vbtn"
                          onClick={() => {
                            if(Resource.category == "pdf"){
                              navigate("/pdfPage", {
                                state: { pdfName: Resource.pdfName },
                              });
                              console.log(
                                "pdfName in resourcelist is : " + Resource.pdfName
                              );
                            }
                            else if(Resource.category == "video"){
                              navigate("/videoPage", {
                                state: { pdfName: Resource.pdfName },
                              });
                              console.log(
                                "pdfName in resourcelist is : " + Resource.pdfName
                              );
                            }
                            
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

{
  /* <div class="cardBox">
  <div class="card">
    <h2>Animated Card</h2>
    <span>Hover Me</span>
    <div class="content">
      <h3>How's it goin Fam ?</h3>
      <p>This is Sachin Samal, your tech mate!!! I love you all. Lets make this world a better place for all of us. Keep prospering...Keep learning!!!</p>
    </div>
  </div>
</div> */
}

import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
// import { toast } from 'react-toastify'
import { UrlResources } from "../../../config";
import "./AddResource.css";
import { logDOM } from "@testing-library/react";
import { toast } from "react-toastify";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBSelect,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

function TAddResource() {
  const [ResourceName, setResourceName] = useState("");
  const [ResourceCategory, setResourceCategory] = useState("");
  const [Subject, setSubject] = useState("");
  const [ResourceDescription, setResourceDescription] = useState("");
  const [DateCreated, setDateCreated] = useState("");
  const [PdfFile, setPdfFile] = useState("");
  const { standard } = sessionStorage;

  const navigate = useNavigate();

  const addResource = () => {
    if (ResourceName.length === 0) {
      toast.warning("please enter resource name");
    } else if (ResourceCategory.length === 0) {
      toast.warning("Please enter resource category");
    } else if (standard.length === 0) {
      toast.warning("Please enter standard");
    } else if (Subject.length === 0) {
      toast.warning("Please enter Subject");
    } else if (ResourceDescription.length === 0) {
      toast.warning("Please enter Description");
    } else if (PdfFile.length === 0) {
      toast.warning("Please upload pdf file");
    } else {
      const data = new FormData();
      data.append("ResourceName", ResourceName);
      data.append("ResourceCategory", ResourceCategory);
      data.append("Standard", standard);
      data.append("PdfFile", PdfFile);
      data.append("Subject", Subject);
      data.append("ResourceDescription", ResourceDescription);
      data.append("DateCreated", DateCreated);

      const url = `${UrlResources}/api/Pdf`;

      axios.post(url, data).then((response) => {
        console.log("hello");
        const result = response.data;
        console.log("result is : " + result);
        console.log("Status code is : " + result["statusCode"]);
        if (result["statusCode"] === 1) {
          toast.success("resource successfully added");

          navigate("/Publish-List", { state: { classtd: standard } });
        } else {
          // toast.error("something went wrong!!!")
          console.log("message is  : " + result["message"]);

          console.log("something went wrong");
        }
      }).catch((error) =>{
          console.log("error occured.");
      });
    }
  };

  return (
    <div className="container mt-3" style={{paddingLeft: "180px", }}>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="8">
            <MDBCard className="my-5 rounded-3" style={{ maxWidth: "600px", overflow: "hidden" }}>
              {/* <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp' className='w-100 rounded-top'  alt="Sample photo"/> */}

              <MDBCardBody className="px-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  --------Adding Study Material--------
                </h3>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Name"
                  id="form1"
                  type="text"
                  onChange={(e) => {
                    setResourceName(e.target.value);
                  }}
                />

                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Resource category"
                      id="form2"
                      type="text"
                      value="PDF"
                      onChange={(e) => {
                        setResourceCategory(e.target.value);
                      }}
                    />
                  </MDBCol>

                  <MDBCol md="6" className="mb-4">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Subject"
                      id="form2"
                      type="text"
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Standard"
                      id="form3"
                      value={standard}
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBInput
                      wrapperClass="datepicker mb-4"
                      label="Select a date"
                      id="form2"
                      type="datetime-local"
                      onChange={(e) => {
                        setDateCreated(e.target.value);
                      }}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Description"
                  id="form2"
                  type="text"
                  onChange={(e) => {
                    setResourceDescription(e.target.value);
                  }}
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Standard"
                  id="form3"
                  onChange={(e) => {
                    setPdfFile(e.target.files[0]);
                  }}
                  accept="pdf/*"
                  type="file"
                />

                <Button
                  variant="success"
                  className="mb-2"
                  size="lg"
                  onClick={addResource}
                >
                  Add
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>

    // <div className="container"
    //   style={{paddingTop: "100px", paddingBottom: "300px"}}
    // >
    //   {/* <h1 className="title" style={{ padding: "50px" }}>
    //     Add Resource
    //   </h1> */}

    //   <div className="row">
    //     <div className="col"></div>
    //     <div className="col">
    //       <div
    //         className="form"
    //         style={{
    //           width: "400px",
    //           borderRadius: "30px",
    //           backgroundColor: "#E18E56",
    //         }}
    //       >
    //         <div className="mb-1">
    //           <label
    //             style={{
    //               alignItems: "center",
    //               justifyContent: "center",
    //               // fontWeight: "bold",
    //             }}
    //             className="label-control"
    //           >
    //             Resource Name
    //           </label>
    //           <input
    //             style={{ position: "relative", left: "75px", width: "250px" }}
    //             onChange={(e) => {
    //               setResourceName(e.target.value);
    //             }}
    //             type="text"
    //             className="form-control"
    //           />
    //         </div>

    //         <div className="mb-3">
    //           <label
    //             style={{
    //               alignItems: "center",
    //               justifyContent: "center",
    //               // fontWeight: "bold",
    //             }}
    //             className="label-control"
    //           >
    //             Resource Category
    //           </label>
    //           <input
    //             style={{ position: "relative", left: "75px", width: "250px" }}
    //             onChange={(e) => {
    //               setResourceCategory(e.target.value);
    //             }}
    //             type="text"
    //             className="form-control"
    //           />
    //         </div>

    //         <div className="mb-3">
    //           <label
    //             style={{
    //               alignItems: "center",
    //               justifyContent: "center",
    //               // fontWeight: "bold",
    //             }}
    //             className="label-control"
    //           >
    //             Subject
    //           </label>
    //           <input
    //             style={{ position: "relative", left: "75px", width: "250px" }}
    //             onChange={(e) => {
    //               setSubject(e.target.value);
    //             }}
    //             type="text"
    //             className="form-control"
    //           />
    //         </div>

    //         <div className="mb-3">
    //           <label
    //             style={{
    //               alignItems: "center",
    //               justifyContent: "center",
    //               // fontWeight: "bold",
    //             }}
    //             className="label-control"
    //           >
    //             Description
    //           </label>
    //           <input
    //             style={{ position: "relative", left: "75px", width: "250px" }}
    //             onChange={(e) => {
    //               setResourceDescription(e.target.value);
    //             }}
    //             type="text"
    //             className="form-control"
    //           />
    //         </div>

    //         <div className="mb-3">
    //           <label
    //             style={{
    //               alignItems: "center",
    //               justifyContent: "center",
    //               // fontWeight: "bold",
    //             }}
    //             className="label-control"
    //           >
    //             Date
    //           </label>
    //           <input
    //             style={{ position: "relative", left: "75px", width: "250px" }}
    //             onChange={(e) => {
    //               setDateCreated(e.target.value);
    //             }}
    //             type="datetime-local"
    //             className="form-control"
    //           />
    //         </div>

    //         <div className="mb-3">
    //           <label
    //             style={{
    //               alignItems: "center",
    //               justifyContent: "center",
    //               // fontWeight: "bold",
    //             }}
    //             htmlFor=""
    //             className="label-control"
    //           >
    //             Standard
    //           </label>
    //           <input
    //             style={{ position: "relative", left: "75px", width: "250px" }}
    //             value={standard}
    //             type="text"
    //             className="form-control"
    //           />
    //         </div>

    //         <div className="mb-3">
    //           <label
    //             style={{
    //               alignItems: "center",
    //               justifyContent: "center",
    //               // fontWeight: "bold",
    //             }}
    //             htmlFor=""
    //             className="label-control"
    //           >
    //             Resource
    //           </label>
    //           <input
    //             style={{ position: "relative", left: "75px", width: "250px" }}
    //             onChange={(e) => {
    //               setPdfFile(e.target.files[0]);
    //             }}
    //             accept="pdf/*"
    //             type="file"
    //             className="form-control"
    //           />
    //         </div>

    //         <div className="mb-3 py-3">
    //           <button onClick={addResource} className="btn btn-primary">
    //             Add
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col"></div>
    //   </div>
    // </div>
  );
}

export default TAddResource;

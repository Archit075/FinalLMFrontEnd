import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { URLUser, UrlGateway, UrlResources } from "../../../config";
// import "./AddUser.css";
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
import AHeader from "../../../AllHeaders/AHeader";
import Footer from "../../../Footer/Footer";

function AddUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roll, setRoll] = useState("");
  const [dob, setDob] = useState("");
  const { standard } = sessionStorage;

  const navigate = useNavigate();

  const addUser = () => {
    if (username.length === 0) {
      toast.error("please enter resource name");
    } else if (email.length === 0) {
      toast.error("Please enter email");
    } else if (password.length === 0) {
      toast.error("Please enter password");
    } else if (roll.length === 0) {
      toast.error("Please enter roll");
    } else if (dob.length === 0) {
      toast.error("Please enter date of birth");
    } else if (standard.length === 0) {
      toast.error("Please enter standard");
    }  else {
      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("standard", standard)
      data.append("roll", roll);
      data.append("dob", dob);


      // const url = `${URLUser}/api/UserControllers/Register`;
      const url = `${UrlGateway}/gateway/user/register`;

   

      axios.post(url, data).then((response) => {
        console.log("hello");
        const result = response.data;
        console.log("result is : " + result);
        console.log("Status code is : " + result["statusCode"]);
        if (result != null) {
          toast.success("resource successfully added");

          navigate("/ViewStudent" );
        } else {
          // toast.error("something went wrong!!!")
          console.log("message is  : " + result);

          console.log("something went wrong");
        }
      }).catch((error) =>{
        toast.warning(error.response.data)
        console.log(error);
          console.log("error occured.");
      });
    }
  };

  return (
    <div className="container mt-3" >
      {/* <AHeader /> */}
      <MDBContainer fluid style={{paddingLeft: "13%"}}>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="8">
            <MDBCard className="my-5 rounded-3" style={{ maxWidth: "600px", overflow: "hidden" }}>
              {/* <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp' className='w-100 rounded-top'  alt="Sample photo"/> */}

              <MDBCardBody className="px-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  --------Adding Students--------
                </h3>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Username"
                  id="form1"
                  type="text"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />

                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="email"
                      id="form2"
                      type="text"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </MDBCol>

                  <MDBCol md="6" className="mb-4">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      id="form2"
                      type="text"
                      onChange={(e) => {
                        setPassword(e.target.value);
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
                      label="Roll Number"
                      id="form2"
                      type="number"
                      onChange={(e) => {
                        setRoll(e.target.value);
                      }}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Date of Birth"
                  id="form2"
                  type="date"
                  onChange={(e) => {
                    var res = e.target.value.slice(0, 10)
                    console.log(res)
                    setDob(res);
                  }}
                />
                <Button
                  variant="success"
                  className="mb-2"
                  size="lg"
                  onClick={addUser}
                >
                  Add
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {/* <Footer style={{paddingLeft: "0", marginLeft: "0"}}/> */}
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

export default AddUser;
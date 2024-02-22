// import React from "react";
// import { Link } from "react-router-dom";
// import { styled } from "styled-components";

// const HNavbar = () => {
//     return (
//       <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark py-2">
//         <div className="container-fluid ">
//           <a className="navbar-brand" href="#">Edu-Res Repository</a>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent" class="d-flex justify-content-end fs-4">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <NavMenu>
//                 <li>
//                   <span><Link to="/User-UserSignin" style={{ color: '#FFF' ,textDecoration: 'none' }}>Student</Link></span>
//                 </li>
//                 <li>
//                   <span><Link to="/Teacher-Signin" style={{ color: '#FFF',textDecoration: 'none' }}>Teacher</Link></span>
//                 </li>
//               </NavMenu>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     )
// }

// export default HNavbar

// const NavMenu = styled.span`
//   display:flex;

//   li{
//     display: flex;
//     align-items: center;
//     padding: 0 12px;
//     cursor: pointer;

//     span {
//         font-size: 20px;
//         color: white;
//         letter-spacing: 1.42px;
//         position: relative;

//         &:after {
//             content: "";
//             height: 2px;
//             background: red;
//             position: absolute;
//             left:0;
//             right:0;
//             bottom:-6px;
//             opacity:0;
//             transfer-origin: left center;
//             transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
//             transform: scaleX(0);
//         }
//     }

//     &:hover {
//         span:after {
//             transform: scaleX(1);
//             opacity: 1;
//         }
//     }
// }`

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import "./HNavbar.css";
import { useNavigate } from "react-router";
import { URLTeacher, URLUser, UrlResources } from "../config";
import axios from "axios";
import logo1 from "./logoerr1.png";

export default function Header() {
  const [modalTeacher, setModalTeacher] = useState(false);
  const [modalStudent, setModalStudent] = useState(false);

  return (
    <div style={{ width: "100vw" }}>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        className="Navbar active"
        style={{ backgroundColor: "#a4e7f3" }}
      >
        <Container>
          <Navbar.Brand href="#home" style={{ float: "left" }}>
            <img
              alt=""
              src={logo1}
              width="30px"
              height="30px"
              className="d-inline align-top"
            />
            {""}
            ER-Repo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">AboutUS</Nav.Link>
              <Nav.Link href="#contact">ContactUs</Nav.Link>
            </Nav>
            <Nav>
              <Button
                type="button"
                className="btn"
                style={{ backgroundColor: "rgb(15, 203, 153)" }}
                onClick={() => setModalTeacher(true)}
              >
                Teacher
              </Button>
              <Button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "rgb(15, 203, 153)",
                  marginLeft: "1rem",
                }}
                onClick={() => setModalStudent(true)}
              >
                Student
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <MyTeacherModal
        show={modalTeacher}
        onHide={() => setModalTeacher(false)}
      />

      <MyStudentModal
        show={modalStudent}
        onHide={() => setModalStudent(false)}
      />
    </div>
  );
}

function MyTeacherModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [name, setName] = useState("");
  const [standard, SetStandard] = useState();
  const [action, setAction] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [showPassword, setShowPassword] = useState('');

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleToggle = () => {
    setAction(!action);
  };

  const signInTeacher = () => {
    // setAction(!action);
    if (name.length === 0) {
      // toast.warning('please enter resource name')
      console.log("please enetr Username");
    } else if (standard.length === 0) {
      // toast.warning('Please enter resource category')
      console.log("Please enter standard");
    } else if (email.length === 0) {
      // toast.warning('Please enter standard')
      console.log("Please enter email");
    } else if (password.length === 0) {
      // toast.warning('Please upload pdf file')
      console.log("Please enter the password");
    } else if (phoneNumber.length === 0) {
      // toast.warning('Please upload pdf file')
      console.log("Please enter the Contact details.");
    } else {
      const data = new FormData();
      data.append("name", name);
      data.append("standard", standard);
      data.append("phoneNumber", phoneNumber);
      data.append("email", email);
      data.append("password", password);

      console.log("username is " + name);
      console.log("phoneNumber is " + phoneNumber);
      const url = `${URLTeacher}/api/Home/register`;
      console.log("url is : " + url);
      console.log("data is : " + data);
      axios.post(url, data).then((response) => {
        console.log("hello");
        const result = response.data;
        console.log(result);
        console.log("Status code is : " + result);
        if (result !== null) {
          // toast.success('resource successfully added')
          console.log("SignUp Successfull !!");

          // navigate('/Resource-List', { state: { classtd: standard } })
          setAction(!action);
        } else {
          // toast.error("something went wrong!!!")
          console.log("something went wrong");
        }
      });
    }
  };
  const navigate = useNavigate();

  const loginTeacher = () => {
    console.log("email is" + email);
    console.log("pass is" + password);
    if (email.length === 0) {
      // toast.warning("please enter email");
      console.log("toast one called");
    } else if (password.length === 0) {
      // alert("please enter password");
      console.log("toast one else called");
    } else {
      const body = {
        email,
        password,
      };

      // url to make signin api call
      const urlTeacher = `${URLTeacher}/api/Home/token
      `;

      // make api call using axios
      axios
        .post(urlTeacher, body)
        .then((response) => {
          // get the server result
          const result = response.data;
          console.log(result);
          console.log("result is " + result["status"]);
          if (result !== null) {
            // toast.success("Welcome to the application");
            console.log("toast two called");

            // get the data sent by server
            const { token, id, name, phoneNumber, role, standard } = result;

            // persist the logged in user's information for future use
            sessionStorage["id"] = id;
            sessionStorage["token"] = token;
            sessionStorage["name"] = name;
            sessionStorage["role"] = role;
            sessionStorage["standard"] = standard;
            sessionStorage["phone_number"] = phoneNumber;

            // navigate to home component
            navigate("/TeacherHome");
          } else {
            // toast.error("Invalid admin name or password");
            console.error("Invalid admin name or password");
          }
        })
        .catch((error) => {
          // toast.error(error.response.data.error)
          console.error(error.response.data.error);
        });
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <MDBContainer fluid className="h-custom">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              style={{ marginTop: "30%" }}
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <div className="divider d-flex align-items-center my-4">
              <h1 className="text-center fw-bold mx-3 mb-0">
                {action === true ? "Teacher SignUp" : "Teacher LogIn"}
              </h1>
            </div>

            {action === true ? (
              <>
                <MDBInput
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  wrapperClass="mb-4"
                  placeholder="Sam2004"
                  label="Username"
                  id="formControlLg"
                  type="name"
                  size="sm"
                />

                <MDBInput
                  onChange={(e) => {
                    SetStandard(e.target.value);
                  }}
                  wrapperClass="mb-4"
                  label="Standard"
                  placeholder="1 to 12"
                  id="formControlLg"
                  type="number"
                  size="sm"
                />
                <MDBInput
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  wrapperClass="mb-4"
                  label="Contact"
                  id="formControlLg"
                  type="phoneNumber"
                  size="sm"
                />
                <MDBInput
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  wrapperClass="mb-4"
                  placeholder="sam2004@gmail.com"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="sm"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  placeholder="*******"
                  type={passwordVisible ? "text" : "password"}
                  size="sm"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <div className="d-flex justify-content-between mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    size="sm"
                    id="flexCheckDefault"
                    label={passwordVisible ? "Hide Password" : "Show Password"}
                    onClick={handleTogglePasswordVisibility}
                  />
                </div>
                <MDBRow>
                  <button
                  className="button"
                    onClick={signInTeacher}
                    // className="mb-0 px-5"
                    style={{ width: "8rem", height: "3rem", marginLeft: "1rem" }}
                    size="lg"
                  >
                    Sign Up
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-2">
                    Have an account?{" "}
                    <button
                      className="button"
                      onClick={handleToggle}
                      style={{
                        height: "30px",
                        width: "5rem",
                        fontSize: "12px",
                      }}
                    >
                      Login
                    </button>
                  </p>
                </MDBRow>
              </>
            ) : (
              <>
                <MDBInput
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  wrapperClass="mb-4"
                  label="Email address"
                  placeholder="sam2004@gmail.com"
                  id="formControlLg"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  placeholder="********"
                  id="formControlLg"
                  type={passwordVisible ? "text" : "password"}
                  size="lg"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <div className="d-flex justify-content-between mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label={passwordVisible ? "Hide Password" : "Show Password"}
                    onClick={handleTogglePasswordVisibility}
                  />
                </div>

                <div className="text-center text-md-start mt-4 pt-2">
                  <button
                    className="button"
                    style={{
                      borderRadius: "5px",
                      width: "130px",
                      paddingLeft: "0.5rem",
                      paddingRight: "0.5rem",
                      fontSize: "25px",
                      borderWidth: "0",
                      height: "50x",
                      backgroundColor: "#0E6EFD",
                      color: "white",
                    }}
                    onClick={loginTeacher}
                    // className="mb-0 px-5"
                    size="lg"
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-2">
                    Don't have an account?{" "}
                    <button
                      className="button"
                      onClick={handleToggle}
                      style={{
                        height: "30px",
                        width: "5rem",
                        fontSize: "12px",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        borderWidth: "0",
                        backgroundColor: "#0E6EFD",
                        color: "white",
                      }}
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
              </>
            )}
          </MDBCol>
        </MDBRow>

        <div
          style={{ backgroundColor: "#a4e7f3" }}
          className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 my-2 px-4 px-xl-5"
        >
          <div className="text-white mb-3 mb-md-0">
            <span style={{ color: "blue", fontWeight: "bold" }}>Learning</span>
            <span style={{ color: "green", fontWeight: "bold" }}>Mate</span>
            <span style={{ color: "black", fontWeight: "bold" }}>© 2004.</span>
          </div>
        </div>
      </MDBContainer>
    </Modal>
  );
}

function MyStudentModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signinUser = async () => {
    console.log("hello");
    if (email.length == 0) {
      toast.warning("please enter email");
    } else if (password.length == 0) {
      toast.warning("please enter password");
    } else {
      const body = {
        email,
        password,
      };
      console.log("Email is : " + body.email);
      console.log("Password is " + body.password);

      const url = `${URLUser}/api/User/Login`;

      console.log(url);
      // make api call using axios
      await axios
        .post(url, body)
        .then((response) => {
          console.log("hello in axios 1");
          // get the server result
          console.log(response);
          const result = response.data;
          console.log(result);

          if (result != "") {
            toast.success("Welcome to the application", {
              autoClose: 1500,
            });
            navigate("/UHome");

            // get the data sent by server
            const { token, id, username, email, standard, role } = result;
            console.log("token is : " + token);

            //persist the logged in user's information for future use
            sessionStorage["token"] = token;
            sessionStorage["User_id"] = id;
            sessionStorage["username"] = username;
            sessionStorage["email"] = email;
            sessionStorage["standard"] = standard;
            sessionStorage["role"] = role;

            // navigate to home component
            // navigate("/home");
          } else {
            toast.error("Invalid user name or password", {
              autoClose: 1500,
            });
          }
        })
        .catch((error) => {
          let err1 = error.response.data.error;
          toast.error(err1, { autoClose: 2500 });
        });
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <MDBContainer fluid style={{ backgroundColor: "#a4e7f3" }}>
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              The best offer <br />
              <span style={{ color: "black" }}>for your business</span>
            </h1>

            {/* <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam
              tempora at cupiditate quis eum maiores libero veritatis? Dicta
              facilis sint aliquid ipsum atque?
            </p> */}
          </MDBCol>

          <MDBCol md="6">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                {/* <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="First name"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Last name"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>
                </MDBRow> */}
                <div className="divider d-flex align-items-center my-4">
                  <h1 className="text-center fw-bold mx-3 mb-9">
                    Student LogIN
                  </h1>
                </div>

                <MDBInput
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  wrapperClass="mb-4"
                  label="Email"
                  id="form1"
                  type="email"
                />
                <MDBInput
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  wrapperClass="mb-4"
                  label="Password"
                  id="form1"
                  type="password"
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Show Password"
                  />
                </div>

                <MDBBtn
                  onClick={signinUser}
                  style={{ backgroundColor: "rgb(15, 203, 153)" }}
                  className="w-100 mb-4"
                  size="md"
                >
                  Log In
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* <img
        src="public\images\loginpic1.png"
        alt=""
        style={{
          flex: "1",
          float: "left",
        }}
      />
      <Modal.Header
        closeButton
        style={{
          flex: "1",
          float: "right",
        }}
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{
            float: "right",
          }}
        >
          Student Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

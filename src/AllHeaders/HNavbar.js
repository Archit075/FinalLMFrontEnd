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
import { URLTeacher, URLUser, UrlGateway, UrlResources } from "../config";
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
          <Navbar.Brand href="/" style={{ float: "left" }}>
            <img
              alt=""
              src={logo1}
              width="30px"
              height="30px"
              className="d-inline align-top"
            />
            {""}
            <span style={{ color: "blue", fontWeight: "bold" }}>ER</span>-
            <span style={{ color: "green", fontWeight: "bold" }}>Repo</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="https://learningmate.com/about-us/">
                AboutUS
              </Nav.Link>
              <Nav.Link href="https://learningmate.com/learn-more/">
                ContactUs
              </Nav.Link>
            </Nav>
            <Nav>
              <button
                type="span"
                className="btn btn-outline-secondary fw-bold"
                // style={{ backgroundColor: "rgb(15, 203, 153)" }}
                onClick={() => setModalTeacher(true)}
              >
                Teacher
              </button>
              <button
                type="span"
                className="btn btn-outline-secondary fw-bold"
                style={{
                  // backgroundColor: "rgb(15, 203, 153)",
                  marginLeft: "1rem",
                }}
                onClick={() => setModalStudent(true)}
              >
                Student
              </button>
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
  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   number: 0,
  //   standard: 1,
  // });

  const navigate = useNavigate();
  const [action, setAction] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [showPassword, setShowPassword] = useState('');

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleToggle = () => {
    setAction(!action);
  };
  //ugugvuvbil

  // function MyForm() {
  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   Number: 0,
  //   standard: 0
  // });

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const data = new FormData();
  //     data.append('username', formData.username);
  //     data.append('email', formData.email);
  //     data.append('password', formData.password);
  //     data.append('Number', formData.number);
  //     data.append('standard', formData.standard);

  //     // Send FormData object to backend server using fetch or axios
  //     fetch('/api/submit', {
  //       method: 'POST',
  //       body: data
  //     })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error('Error:', error));
  //   };

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  //jugctxjytrc7yuh

  const signInTeacher = () => {
    // setAction(!action);
    if (name.length === 0) {
      toast.warning("please enter resource name");
      console.log("please enetr Username");
    } else if (standard.length === 0) {
      toast.warning("Please enter resource category");
      console.log("Please enter standard");
    } else if (email.length === 0) {
      toast.warning("Please enter standard");
      console.log("Please enter email");
    } else if (password.length === 0) {
      toast.warning("Please upload pdf file");
      console.log("Please enter the password");
    } else if (phoneNumber.length === 0) {
      toast.warning("Please upload pdf file");
      console.log("Please enter the Contact details.");
    } else {
      // if (formData.username.length === 0) {
      //   // toast.warning('please enter resource name')
      //   console.log("please enetr Username");
      // } else if (formData.standard.length === 0) {
      //   // toast.warning('Please enter resource category')
      //   console.log("Please enter standard");
      // } else if (formData.email.length === 0) {
      //   // toast.warning('Please enter standard')
      //   console.log("Please enter email");
      // } else if (formData.password.length === 0) {
      //   // toast.warning('Please upload pdf file')
      //   console.log("Please enter the password");
      // } else if (formData.number.length === 0) {
      //   // toast.warning('Please upload pdf file')
      //   console.log("Please enter the Contact details.");
      // } else {

      // const data = new FormData();

      // data.append("username", formData.username);
      // data.append("email", formData.email);
      // data.append("password", formData.password);
      // data.append("number", formData.number);
      // data.append("standard", formData.standard);

      // console.log(formData.username+"  "+ formData.standard+" "+ formData.number+"   ");

      const data = new FormData();
      data.append("name", name);
      data.append("standard", standard);
      data.append("phoneNumber", phoneNumber);
      data.append("email", email);
      data.append("password", password);

      console.log("here the data is" + JSON.stringify(data));
      //--------------
      // console.log()
      //------------
      // console.log("username is " + formData.username);
      console.log("username is " + name);
      // console.log("phoneNumber is " + formData.number);
      console.log("phoneNumber is " + phoneNumber);

      // const url = `${URLTeacher}/api/Home/register`; // url--------
      const url = `${UrlGateway}/gateway/teacher/register`; 



      console.log("url is : " + url);
      console.log("data is : " + data.name);

      axios
        .post(url, data)
        .then((response) => {
          console.log("hello");

          const result = response.data;

          console.log(result);
          console.log("Status code is : " + result);

          if (result !== null) {
            toast.success("Signed Up successfully");
            console.log("SignUp Successfull !!");

            // navigate('/Resource-List', { state: { classtd: formData.standard } })
            // navigate('/Resource-List', { state: { classtd: standard } })
            // navigate('/TeacherHome', { state: { classtd: standard } })
            setEmail("");
            setPassword("");
            setPasswordVisible(false);
            setAction(!action);
          } else {
            toast.error(result);
            console.log(result);
            console.log("something went wrong");
          }
        })
        .catch((error) => {
          console.log(error);
          console.log("got error" + error["response"]);
          console.dir(error.response.data);
          toast.error(error.response.data);
        });
    }
  };

  const loginTeacher = () => {
    // console.log("email is" + formData.email);
    console.log("email is" + email);
    // console.log("pass is" + formData.password);
    console.log("pass is" + password);
    // if (formData.email.length === 0) {
    if (email.length === 0) {
      toast.warning("please enter email");
      console.log("toast one called");
      // } else if (formData.password.length === 0) {
    } else if (password.length === 0) {
      alert("please enter password");
      console.log("toast one else called");
    } else {
      const body = {
        email,
        password,
      };

      // url to make signin api call
      // const urlTeacher = `${URLTeacher}/api/Home/token`;
      const urlTeacher = `${UrlGateway}/gateway/teacher/login`;


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
          // console.log(error.response.data);
          toast.error(error.response.data);
          // console.log("inside catch");
          // console.dir(error);
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

          <MDBCol style={{ borderColor: "blue" }} col="4" md="6">
            <div className="divider d-flex align-items-center my-4">
              <h1 className="text-center fw-bold mx-3 mb-0">
                {action === true ? "Teacher Sign-Up" : "Teacher Log-In"}
              </h1>
            </div>

            {action === true ? (
              <>
                <MDBInput
                  // onChange={handleChange}
                  // value={formData.username}
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
                  // onChange={handleChange}
                  // value={formData.standard}
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
                  // onChange={handleChange}
                  // value={formData.number}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  wrapperClass="mb-4"
                  label="Contact"
                  id="formControlLg"
                  type="Number"
                  size="sm"
                />
                <MDBInput
                  // onChange={handleChange}
                  // value={formData.email}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  placeholder="*******"
                  type={passwordVisible ? "text" : "password"}
                  size="sm"
                  value={password}
                  // value={formData.password}
                  // onChange={handleChange}
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
                    style={{
                      width: "8rem",
                      height: "3rem",
                      marginLeft: "1rem",
                    }}
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
                  // onChange={handleChange}
                  // value={formData.email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  wrapperClass="mb-4"
                  label="Email address"
                  placeholder="sam2004@gmail.com"
                  id="formControlLg"
                  type="text"
                  size="lg"
                  value={email}
                />
                <MDBInput
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  wrapperClass="mb-4"
                  label="Password"
                  placeholder="********"
                  id="formControlLg"
                  type={passwordVisible ? "text" : "password"}
                  size="lg"
                  value={password}
                  // value={formData.password}
                  // onChange={handleChange}
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

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleStudentPasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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

      // const url = `${URLUser}/api/UserControllers/Login`;
      const url = `${UrlGateway}/gateway/user/login`;  


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

          if (result != null) {
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
            toast.error(result["message"]);
          }
        })
        .catch((error) => {
          console.log("try catch");
          console.dir(error);
          let err1 = error.response.data["message"];
          toast.error(err1, { autoClose: 2000 });
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
              The best place <br />
              <span style={{ color: "black" }}>for your Study Material</span>
            </h1>
            <div className="text-white mx-4 mb-3 mb-md-0">
              <span style={{ color: "blue", fontWeight: "bold" }}>
                Learning
              </span>
              <span style={{ color: "green", fontWeight: "bold" }}>Mate</span>
              <span style={{ color: "black", fontWeight: "bold" }}>
                © 2004.
              </span>
            </div>

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
                <div className="divider d-flex align-items-center my-4">
                  <h1 className="text-center fw-bold mx-3 mb-9">
                    Student LogIn
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
                  placeholder="student2004@gmail.com"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form1"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Show Password"
                    onClick={handleStudentPasswordVisibility}
                  />
                </div>

                {/* <MDBBtn
                  
                  style={{  }}
                  size="md"
                >
                  Log In
                </MDBBtn> */}
                <button
                  className="button w-100 mb-4"
                  onClick={signinUser}
                  style={{
                    height: "2.5rem",
                    backgroundColor: "rgb(15, 203, 153)",
                  }}
                  size="lg"
                >
                  Log In
                </button>
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

// import React, { useState } from 'react';

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="username"
//         placeholder="Username"
//         value={formData.username}
//         onChange={handleChange}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={handleChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

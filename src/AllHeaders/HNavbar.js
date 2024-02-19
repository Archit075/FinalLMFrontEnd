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
import React, { useState } from "react";
import logo1 from './logoerr1.png'
import axios from "axios";


export default function Header() {
  const [modalTeacher, setModalTeacher] = React.useState(false);
  const [modalStudent, setModalStudent] = React.useState(false);
 
  return (
    <div style={{ width: "100vw" }}>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        className="Navbar active"
        style={{backgroundColor: "#a4e7f3"}}
      >
        <Container>
          <Navbar.Brand href="#home" style={{ float: "left" }}>
            <img
              alt=""
              src='{logo1}'
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {"    "}
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
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Teacher Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Teacher Login</h4>
       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyStudentModal(props) {
  return (
    <Modal
      {...props}
      style={{ display: "flex", height: "300px" }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <img
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
      </Modal.Footer>
    </Modal>
  );
}
import { Link } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import logo1 from "./logoerr1.png";
import { Button, NavDropdown, Navbar } from "react-bootstrap";

export default function AHeader() {
  const navigate = useNavigate();

  const [standard, setStandard] = useState(sessionStorage.standard || null);  // const classtd = standard;

  console.log("sessionStorage.standard:", sessionStorage.standard);

  console.log("standard is : "+ standard);
  // const { state } = useLocation();

  const handleButtonClick = (value) => {
    // Update the state with the selected class
    console.log("State value from card : " + value);
    navigate("/Resource-List", { state: { classtd: value } }); // Navigate to the next page with the state
  };

  // const handleResourceListClick = () => {
  //   // Navigate to Resource-List when the link is clicked
  //   navigate("/Resource-List", { state: { classtd: standard } });
  // };

  // const handlePublishListClick = () => {
  //   // Navigate to Publish-List when the link is clicked
  //   navigate("/Publish-List", { state: { classtd: standard } });
  // };

  const logoutAdmin = () => {
    // remove the logged users details from session storage
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("standard");
    sessionStorage.removeItem("phone_number");

    // navigate to sign in component
    navigate("/");
  };

  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark py-3"
        style={{ backgroundColor: "#a4e7f3" }}
      >
        <div className="container-fluid">
          <Navbar.Brand href="#home" style={{ float: "left" }}>
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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="d-flex justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ paddingTop: "7px" }}>
                <span>
                  <Link
                    to="/TeacherHome"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      marginRight: "1rem",
                    }}
                  >
                    Home
                  </Link>
                </span>
              </li>
              <li className="nav-item" style={{ paddingTop: "7px" }}>
                <span>
                  <Link
                   to={{ pathname: "/Resource-List", state: { classtd: standard } }}
                   
                    style={{
                      color: "black",
                      textDecoration: "none",
                      marginRight: "1rem",
                    }}
                  >
                    Resources
                  </Link>
                </span>
              </li>

              <li className="nav-item" style={{ paddingTop: "7px" }}>
                <span>
                  <Link
                   to={{ pathname: "/Publish-List", state: { classtd: standard } }}
                   style={{
                      color: "black",
                      textDecoration: "none",
                      marginRight: "1rem",
                    }}
                  >
                    Unpublished
                  </Link>
                </span>
              </li>

              <li>
                <NavDropdown title="Classes" >
                  {[...Array(12)].map((_, index) => (
                    <NavDropdown.Item
                      style={{ color: "black" }}
                      key={index}
                      onClick={() => handleButtonClick(index + 1)}
                    >
                      Class {index + 1}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </li>

              <NavLink>
                <li className="nav-item">
                  <span>
                    <Link
                      to="/TAddResource"
                      style={{
                        color: "black",
                        textDecoration: "none",
                        marginRight: "1rem",
                      }}
                    >
                      Add Resource
                    </Link>
                  </span>
                </li>
                <li className="nav-item">
                    <Button
                      onClick={logoutAdmin}
                      style={{
                        backgroundColor: "rgb(15, 203, 153)",
                        color: "white",
                        textDecoration: "none",
                        border: "1px solid blue",
                        borderRadius: "4px",
                        marginLeft: "1rem",
                        padding: "0.5rem",
                      }}
                    >
                      Logout
                    </Button>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

const NavLink = styled.li`
  display: flex;
  margin-top: 8px;
  margin-left: 4px;
  margin-right: 6px;
`;

{
  /* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  View
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/AdminBookDetails" className="dropdown-item">
                      All Books
                    </Link>
                  </li>
                  <li>
                    <Link to="/AdminIssuedBooks" className="dropdown-item">
                      Issued Books
                    </Link>
                  </li>
                  <li>
                    <Link to="/AdminStudentDetails" className="dropdown-item">
                      Students Details
                    </Link>
                  </li>
                  <li>
                    <Link to="/AdminFeedbacks" className="dropdown-item">
                      Feedbacks
                    </Link>
                  </li>
                  <li>
                    <Link to="/AdminHome" className="dropdown-item">
                      Requests
                    </Link>
                  </li>
                </ul>
              </li> */
}

{
  /* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Add
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/AddBook" className="dropdown-item">
                      Add Book
                    </Link>
                  </li>
                  <li>
                    <Link to="/AddStudent" className="dropdown-item">
                      Add Student
                    </Link>
                  </li>
                </ul>
              </li> */
}

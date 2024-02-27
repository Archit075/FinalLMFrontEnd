import { Link } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import logo1 from "./logoerr1.png";
import { Button, NavDropdown, Navbar } from "react-bootstrap";

export default function AHeader() {
  const navigate = useNavigate();

  const [standard, setStandard] = useState(sessionStorage.standard || null); // const classtd = standard;

  console.log("sessionStorage.standard:", sessionStorage.standard);

  console.log("standard is : " + standard);
  // const { state } = useLocation();

  // const handleButtonClick = (value) => {
  //   // Update the state with the selected class
  //   console.log("State value from card : " + value);
  //   navigate("/Resource-List", { state: { classtd: value } }); // Navigate to the next page with the state
  // };
  const handleBinClick = (value) => {
    console.log("state value from the card: " + value);
    navigate("/TResourceDel-List", { state: { classtd: value } });
  };

  const handleResourceListClick = () => {
    // Navigate to Resource-List when the link is clicked
    navigate("/Resource-List", { state: { classtd: standard } });
  };
  const handleHomeClick = () => {
    navigate("/TeacherHome");
  };

  const handlePublishListClick = () => {
    // Navigate to Publish-List when the link is clicked
    navigate("/Publish-List", { state: { classtd: standard } });
  };
  const handleAddResource = () => {
    navigate("/TAddResource");
    // {state: {classtd: standard}}
  };

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
              <NavLink>
                <li className="nav-item">
                  <span>
                    <Link
                      to="/TeacherHome"
                      style={{
                        color: "black",
                        textDecoration: "none",
                        marginRight: "1rem",
                        backgroundColor: "#a4e7f3",
                      }}
                    >
                      Home
                    </Link>
                  </span>
                </li>

                {/* bin */}
                <li className="nav-item">
                  <span>
                    <Link
                      to="/TResourceDel-List"
                      //  onClick={handleBinClick}
                      style={{
                        color: "black",
                        textDecoration: "none",
                        marginRight: "1rem",
                        backgroundColor: "#a4e7f3",
                      }}
                    >
                      Bin
                    </Link>
                  </span>
                </li>
                {/* bin */}

                <li className="nav-item">
                  <span>
                    <Link
                      to={{
                        pathname: "/Resource-List",
                        state: { classtd: standard },
                      }}
                      //  onClick={handleResourceListClick}
                      style={{
                        color: "black",
                        textDecoration: "none",
                        marginRight: "1rem",
                        backgroundColor: "#a4e7f3",
                      }}
                    >
                      Resources
                    </Link>
                  </span>
                </li>

                <li className="nav-item">
                  <span>
                    <Link
                      to={{
                        pathname: "/Publish-List",
                        state: { classtd: standard },
                      }}
                      // onClick={handlePublishListClick}
                      style={{
                        color: "black",
                        textDecoration: "none",
                        marginRight: "1rem",
                        backgroundColor: "#a4e7f3",
                      }}
                    >
                      Unpublished
                    </Link>
                  </span>
                </li>

                {/* <li>
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
              </li> */}

                <li className="nav-item">
                  <span>
                    <Button
                      onClick={handleAddResource}
                      style={{
                        color: "black",
                        textDecoration: "none",
                        marginRight: "1rem",
                        backgroundColor: "#a4e7f3",
                      }}
                    >
                      Add Resource
                    </Button>
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

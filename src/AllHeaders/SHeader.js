// import { Button, NavDropdown, Navbar, Dropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import "./SHeader.css";
import logo1 from "./logoerr1.png";
import { Navbar } from "react-bootstrap";

export default function SHeader() {
  const navigate = useNavigate();

  const [standard, setStandard] = useState(sessionStorage.standard || null); // const classtd = standard;

  const logoutAdmin = () => {
    // remove the logged users details from session storage
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("User_id");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("standard");

    // navigate to sign in component
    navigate("/");
  };

  const handleHomeClick = () => {
    navigate("/UHome", { state: { classtd: standard } });
  };

  const handleProfile = () => {
    navigate("/SProfile", {});
  };

  return (
    <div style={{padding: "0", margin: "0"}}>
      <nav
        className="navbar fixed-top mb-0 py-0 navbar-expand-lg py-2"
        style={{
          backgroundColor: "#a4e7f3",
          marginBottom: "0",
          marginTop: "0",
          paddingBottom: "0",
          paddingTop: "0",
        }}
      >
        <div
          className="container-fluid"
          style={{
            padding: "0 0 0 0"
          }}
        >
          <Navbar.Brand
            href="#home"
            style={{
              float: "left",
              marginBottom: "0",
              marginTop: "0",
              paddingBottom: "0",
              paddingTop: "0",
            }}
          >
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
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse "
            id="navbarSupportedContent"
            className="d-flex justify-content-end"
          >
            <ul class="navbar-nav me-auto mb-lg-0 mb-0 py-0">
              <NavLink>
                <li class="nav-item">
                  <button
                    // to="/TeacherHome"
                    className="btn btn-sm btn-outline-secondary"
                    size="sm"
                    onClick={handleHomeClick}
                    // to="/UHome"
                    style={{
                      color: "#FFF",
                      textDecoration: "none",
                      margin: "1rem",
                      border: "1px solid grey",
                      borderRadius: "4px",
                      color: "black",
                      marginRight: "0.5rem",
                      backgroundColor: "#a4e7f3",
                      // padding: "8px",
                      // marginLeft: "2rem",
                      // fontSize: "20px"
                    }}
                  >
                    Home
                  </button>
                  {/* </span> */}
                </li>
                <li class="nav-item">
                  <button
                    // to="/TeacherHome"
                    className="btn btn-sm btn-outline-secondary"
                    size="sm"
                    onClick={handleProfile}
                    // to="/SProfile"
                    style={{
                      color: "green",
                      textDecoration: "none",
                      margin: "1rem",
                      border: "1px solid grey",
                      borderRadius: "4px",
                      color: "black",
                      marginRight: "1rem",
                      backgroundColor: "#a4e7f3",
                      // marginLeft: "2rem",
                      // padding: "8px",
                    }}
                  >
                    Profile
                  </button>
                  {/* </span> */}
                </li>
                <li class="nav-item" style={{ marginRight: "7%" }}>
                  {/* <button
                      onClick={logoutAdmin}
                      type="span"
                      className="btn btn-sm btn-outline-secondary"
                      style={{
                        textDecoration: "none",
                        justifyContent: "center",
                        display: "contents",
                        border: "1px solid black",
                        borderRadius: "4px",
                      }}
                    >
                      Logout
                    </button> */}
                  <button
                    onClick={logoutAdmin}
                    type="span"
                    className="btn btn-sm btn-outline-secondary"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      border: "1px solid grey",
                      marginTop: "1rem",
                    }}
                  >
                    Logout
                  </button>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

{
  /* <li className="nav-item" style={{ marginRight: "7%" }}>
  <button
    onClick={logoutAdmin}
    type="span"
    className="btn btn-sm btn-outline-secondary"
    style={{
      // backgroundColor: "rgb(15, 203, 153)",
      color: "black",
      textDecoration: "none",
      border: "1px solid grey",
      borderRadius: "4px",
    }}
  >
    Logout
  </button>
</li>; */
}
const NavLink = styled.li`
  display: flex;
  margin-top: 5px;
  margin-left: 4px;
`;

{
  /* <li className="nav-item dropdown " id="dropd">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"

                >
                  View
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/SAllBooks" class="dropdown-item">
                      All Books
                    </Link>
                  </li>
                  <li>
                    <Link to="/SIssuedBooks" class="dropdown-item">
                      Your Books
                    </Link>
                  </li>
                </ul>
              </li> */
}
{
  /* <li class="nav-item">
                  <span>
                    <Link
                      to="/SFeedback"
                      style={{
                        color: "#FFF",
                        textDecoration: "none",
                        margin: "1rem",
                        // fontSize: "20px"
                      }}
                    >
                      Feedback
                    </Link>
                  </span>
                </li> */
}

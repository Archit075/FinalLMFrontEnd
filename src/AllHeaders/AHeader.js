import { Link } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import logo1 from "./logoerr1.png";
import { Button, NavDropdown, Navbar, Dropdown } from "react-bootstrap";
// import DropDown from "cdbreact/dist/components/DropDown";

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
  const handleBinClick = () => {
    navigate("/TResourceDel-List", { state: { classtd: standard } });
  };

  const handleResourceListClick = () => {
    // Navigate to Resource-List when the link is clicked
    navigate("/Resource-List", { state: { classtd: standard } });
  };
  const handleHomeClick = () => {
    navigate("/TeacherHome", { state: { classtd: standard } });
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
            <ul
              className="navbar-nav me-auto mb-lg-0"
              style={{ paddingTop: "0px", marginTop: "0px",  }}
            >
              <NavLink 
              // style={{justifyContent: "space-between"}}
              >
                <li className="nav-item">
                  {/* <span> */}
                    <button
                      // to="/TeacherHome"
                      className="btn btn-sm btn-outline-secondary"
                      size="sm"
                      onClick={handleHomeClick}
                      style={{
                        border: "0px solid grey",
                        borderRadius: "4px",
                        padding: "4px",
                        color: "black",
                        textDecoration: "none",
                        // marginLeft: "2rem",
                        marginRight: "0.5rem",
                        backgroundColor: "#a4e7f3",
                      }}
                    >
                      Home
                    </button>
                  {/* </span> */}
                </li>

                {/* bin */}
                {/* <li className="nav-item">
                  <span>
                    <button
                      // to="/TResourceDel-List"
                      onClick={handleBinClick}
                      style={{
                        border: "0px solid black",
                        borderRadius: "4px",
                        padding: "6px",
                        color: "black",
                        textDecoration: "none",
                        marginRight: "1rem",
                        backgroundColor: "#a4e7f3",
                      }}
                    >
                      Bin
                    </button>
                  </span>
                </li> */}
                {/* bin */}

                {/* <li className="nav-item">
                  <span>
                    <button
                      // to={{
                      //   pathname: "/Resource-List",
                      //   state: { classtd: standard },
                      // }}
                      className="btn btn-outline-secondary"
                      onClick={handleResourceListClick}
                      style={{
                        border: "0px solid black",
                        borderRadius: "4px",
                        padding: "6px",
                        color: "black",
                        textDecoration: "none",
                        marginRight: "1rem",
                        backgroundColor: "#a4e7f3",
                      }}
                    >
                      Resources
                    </button>
                  </span>
                </li> */}

                {/* <li className="nav-item">
                  <span>
                    <button
                      // to={{
                      //   pathname: "/Publish-List",
                      //   state: { classtd: standard },
                      // }}
                      // onMouseOver={}
                      className="btn btn-outline-secondary"
                      onClick={handlePublishListClick}
                      style={{
                        border: "0px solid black",
                        borderRadius: "4px",
                        padding: "6px",
                        color: "black",
                        textDecoration: "none",
                        marginRight: "1rem",
                        backgroundColor: "#a4e7f3",
                      }}
                    >
                      Unpublished
                    </button>
                  </span>
                </li> */}

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

                {/* <li className="nav-item">
                  <span>
                    <button
                      type="span"
                      className="btn btn-outline-secondary "
                      onClick={handleAddResource}
                      style={{
                        border: "0px",
                        color: "black",
                        textDecoration: "none",
                        marginRight: "1rem",
                        // backgroundColor: "#a4e7f3",
                      }}
                    >
                      Add Resource
                    </button>
                  </span>
                </li> */}

                <li 
                  style={{ marginRight: "2%" }}
                >
                  <Dropdown>
                    <Dropdown.Toggle size="sm" variant="success" id="dropdown-basic">
                      Students
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <button
                          className="btn btn-outline-secondary"
                          style={{ backgroundColor: "white", color: "black" }}
                          onClick={handleAddResource}
                        >
                          Add Student
                        </button>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <button
                          className="btn btn-outline-secondary"
                          style={{ backgroundColor: "white", color: "black" }}
                          onClick={handlePublishListClick}
                        >
                          Unpublished
                        </button>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <button
                          className="btn btn-outline-secondary"
                          style={{ backgroundColor: "white", color: "black" }}
                          onClick={handleBinClick}
                        >
                          Bin
                        </button>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <button
                          className="btn btn-outline-secondary"
                          style={{ backgroundColor: "white", color: "black" }}
                          onClick={handleResourceListClick}
                        >
                          View
                        </button>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <button
                          className="btn btn-outline-secondary"
                          style={{ backgroundColor: "white", color: "black" }}
                          onClick={handleResourceListClick}
                        >
                          Add Students
                        </button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                <li 
                  style={{ marginRight: "2%" }}
                >
                  <Dropdown>
                    <Dropdown.Toggle size="sm" variant="success" id="dropdown-basic">
                      Resources
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <button
                          className="btn btn-outline-secondary"
                          style={{ backgroundColor: "white", color: "black" }}
                          onClick={handleAddResource}
                        >
                          Add Resources
                        </button>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <button
                          className="btn btn-outline-secondary"
                          style={{ backgroundColor: "white", color: "black" }}
                          onClick={handlePublishListClick}
                        >
                          Unpublished
                        </button>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <button
                          className="btn btn-outline-secondary"
                          style={{ backgroundColor: "white", color: "black" }}
                          onClick={handleBinClick}
                        >
                          Bin
                        </button>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <button
                          className="btn btn-outline-secondary"
                          style={{ backgroundColor: "white", color: "black" }}
                          onClick={handleResourceListClick}
                        >
                          View
                        </button>
                      </Dropdown.Item>
                      {/* <Dropdown.Item>
                        <button
                          className="btn btn-outline-secondary"
                          style={{ backgroundColor: "white", color: "black" }}
                          onClick={handleResourceListClick}
                        >
                          Add Students
                        </button>
                      </Dropdown.Item> */}
                    </Dropdown.Menu>
                  </Dropdown>

                </li>
                <li 
                  className="nav-item"
                  style={{ marginRight: "7%" }}
                >
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
  margin-top: 6px;
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

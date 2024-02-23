import styled from 'styled-components';
import Signin from '../User/SignIn/index'
import HNavbar from '../../AllHeaders/HNavbar';
import SHeader from '../../AllHeaders/SHeader';




const USignin = () => {
    return (
        
        <Container>
            {/* <Header/> */}
            <HNavbar />
            <Background>
                <img src="/images/LM1.jpg"/>
            </Background>
            <Signin />
        </Container>
    )  
}

export default USignin

const Container = styled.div`
position:relative;
`
const Background = styled.div`
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity: ;

    img {
        width:100%;
        height:100%;
        object-fit:cover;
    }
`


{/* <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        className="Navbar active"
        style={{
          backgroundColor: "#a4e7f3",
          opacity: "0.5",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "1000",
          width: "100vw"
        }}
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
            <span style={{ color: "blue", fontWeight: "bold" }}>ER</span>-
            <span style={{ color: "green", fontWeight: "bold" }}>Repo</span>
            
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
                style={{
                  backgroundColor: "rgb(15, 203, 153)",
                  marginLeft: "1rem",
                }}
                onClick={logoutAdmin}
                class="btn btn-link"
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}



      {/* <Container
          fluid
          style={{
            top: "7.8%",
            float: "left",
            width: "15%",
            paddingTop: "2%",
            paddingLeft: "",
            position: "fixed",
            bottom: "0",
            left: "0",
            overflowY: "auto",
            backgroundColor: "grey",
          }}
        >
          <Row>
            <Col sm={3}>
              <Nav className="flex-column">
                <NavbarBrand> Standard :{" "}{standard} </NavbarBrand>

                <NavDropdown style={{ fontSize: "20px"}} title="Classes" id="basic-nav-dropdown">
                  {[...Array(12)].map((_, index) => (
                    <NavDropdown.Item
                      key={index}
                      onClick={() => handleButtonClick(index + 1)}
                    >
                      Class {index + 1}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <NavLink>
                  <span>
                    <Link
                      to="/TAddResource"
                      style={{
                        color: "#FFF",
                        textDecoration: "none",
                        fontSize: "15px",
                      }}
                    >
                      Add Resource
                    </Link>
                  </span>
                </NavLink>

                
              </Nav>
            </Col>
            <Col sm={9}></Col>
          </Row>
        </Container> */}
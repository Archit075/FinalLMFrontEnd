import { styled } from "styled-components";
import HNavbar from "../../AllHeaders/HNavbar";
import TeacherSignin from "../Teacher/TSignin";



const TSignin = () => {
    return (
      <Container>
        {/* <Header/> */}
        <HNavbar />
        <Background>
          <img src={imagURL} />        
          </Background>
        <TeacherSignin />
      </Container> 
    );
  };
  
  export default TSignin;
  
  const Container = styled.div`
    position: relative;
  `;
  
  const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: ;
  
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;
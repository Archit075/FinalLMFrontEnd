import React from "react";
import styled from "styled-components";
import AHeader from "../../../AllHeaders/AHeader";
import ClassCard from "../ClassesCard/ClassesCard";
import LM3 from "./LM3.png";
import Footer from "../../../Footer/Footer";



export default function THome() {

  const imagURL = 'https://images.unsplash.com/photo-1474377207190-a7d8b3334068?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const imagURL1 = 'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <Container>
      <AHeader />
      <Background>
        <img src={LM3}/>
      </Background>
      <ClassCard/>
      <Footer />
    </Container>
  );
}


const Container = styled.div`
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;



// const [selectedOption, setSelectedOption] = useState('');
// const handleChange = (e) => {
//   // setSelectedOption(e.target.value);
//   setResourceCategory(e.target.value);
// }
// const { standard } = sessionStorage;
// const options = [
//   { value: 'Pdf', label: 'Pdf' },
//   { value: 'Video', label: 'Video' },
//   { value: 'Images', label: 'Images' }
// ];


{/* <select
                    style={{width: "240px", height: "36px", borderRadius: "3px", border: "1px solid grey"}}
                      id="select"
                      value={ResourceCategory}
                      onChange={(e) => {
                        handleChange(e.target.value);
                      }}
                    >
                      <option value="">Select Category</option>
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                      
                    </select> */}
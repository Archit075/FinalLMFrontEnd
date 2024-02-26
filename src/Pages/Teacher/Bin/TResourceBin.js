// import React from "react";
// import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import { useNavigate } from "react-router";
// import Res1 from "./YourBooks.jpg";

// const TResourceBin = () => {
//   const { standard } = sessionStorage;
//   const { state } = useLocation();
//   const classtd = state ? state.classtd : null;
//   const [Resources, setResources] = useState([]);
//   const navigate = useNavigate();
  


//   const searchResources = () => {

//     if (!classtd) {
//         console.error("Class standard is not available in the state.");
//         return;
//       }
  

//     console.log(standard);
//     // const urlSpring = `${SPRING_URL}/student/viewIssuedBooks/${stud_id}`;
//     const url = `${UrlResources}/api/Pdf/productPdf/delete/${classtd}`;  https://localhost:7030/api/Pdf/productPdf/delete/1
//     console.log("url is : " + url);
//     console.dir(Resources)

//     axios
//       .post(url)
//       .then((response) => {
//         const result = response.data;
//         console.log("result is :" + result[0]);
//         console.log(result);

//         if (result != null) {
//           setResources(result);
//         //   toast.info("Welcome to Resources")
//           console.log(result["message"]);
//         } else {
//           toast.error("Resources are empty");
//           console.log("PDf List is empty.");
//           console.error(result["message"]);
//         }
//       })
//       .catch((error) => {
//         toast.warning("Resources are empty")
//       });
//   };

//   const PublishBook = (pdf_Name, std) => {
//     const urlResource = `${UrlResources}/api/Pdf/Publish/${pdf_Name}/${std}`;
//     console.log("pdf name is : " + pdf_Name);
//     console.log("url is : "+urlResource);

//     axios
//       .post(urlResource)
//       .then((response) => {
//         console.log("response is : " + response);
//         const result = response.data;

//         if (result["statusCode"] === 1) {
//           toast.success("Resource Published successfully!!");
//           console.log("message is " +result["message"]);
//           setResources((prevResources) =>
//             prevResources.filter((resource) => resource.pdfName !== pdf_Name)
//           );
//           // searchIssuedBooksBySpring();
//         } else {
//           console.log(result["message"]);
//           // toast.error(result["message"]);
//         }
//       })
//       .catch((error) => {
//         console.log("error");
//         searchResources();
//         console.error(error.response.data.error);
//       });
  
// };



//   return (
//     <div style={{ paddingTop: "2px" }} className="container" id="YBC">
//       <Container>
//         <Row>
//           {Resources.map((Resource) => (
//             <Col md={4} sm={12} lg={3}>
//               <Card>
//                 <Card.Img
//                   style={{ height: "8rem", width: "100%" }}
//                   variant="top"
//                   src={Res1}
//                 />
//                 <Card.Body
//                   style={{
//                     paddingTop: "5px",
//                     paddingBottom: "5px",
//                     backgroundColor: "#DDF5FF",
//                   }}
//                 >
//                   <Card.Title
//                     style={{
//                       paddingTop: "2px",
//                       paddingBottom: "2px",
//                       margin: "0",
//                     }}
//                   >
//                     {Resource.pdfName}
//                   </Card.Title>
//                   <Card.Text
//                     style={{
//                       paddingTop: "2px",
//                       paddingBottom: "2px",
//                       margin: "0",
//                     }}
//                   >
//                     {Resource.category}
//                   </Card.Text>
//                   <Card.Text
//                     style={{
//                       paddingTop: "2px",
//                       paddingBottom: "2px",
//                       margin: "0",
//                     }}
//                   >
//                     {Resource.dateCreated}
//                   </Card.Text>
//                   <Card.Text
//                     style={{
//                       paddingTop: "2px",
//                       paddingBottom: "2px",
//                       margin: "0",
//                     }}
//                   >
//                     {Resource.created}
//                   </Card.Text>
//                   <Button
//                     style={{ marginTop: "0" }}
//                     variant="primary"
//                     className="btn btn-success btn-sm"
//                     id="vbtn"
//                     onClick={() => {
//                       navigate("/pdfPage", {
//                         state: { pdfName: Resource.pdfName },
//                       });
//                       console.log(
//                         "pdfName in resourcelist is : " + Resource.pdfName
//                       );
//                     }}
//                   >
//                     View
//                   </Button>
//                   <Button
//                     variant="danger"
//                     className="btn mr-5 btn-sm"
//                     id="rbtn"
//                     onClick={() =>
//                       returnBook(
//                         Resource.pdfName,
//                         Resource.standard,
//                         Resource.created
//                       )
//                     }
//                   >
//                     Delete
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//       {/* </div> */}
//     </div>
//   );
// };

// export default TResourceBin;

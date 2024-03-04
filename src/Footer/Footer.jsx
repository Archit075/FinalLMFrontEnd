// import React from "react";
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
// } from "mdb-react-ui-kit";

// export default function Footer() {
//   return (
//     <MDBFooter
//       style={{ backgroundColor: "#a4e7f3", margin: "0" }}
//       className="text-center text-lg-start text-muted"
//     >
//       {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
//         <div>
//           <a href="" className="me-4 text-reset">
//             <MDBIcon fab icon="facebook-f" />
//           </a>
//           <a href="" className="me-4 text-reset">
//             <MDBIcon fab icon="twitter" />
//           </a>
//           <a href="" className="me-4 text-reset">
//             <MDBIcon fab icon="google" />
//           </a>
//           <a href="" className="me-4 text-reset">
//             <MDBIcon fab icon="instagram" />
//           </a>
//           <a href="" className="me-4 text-reset">
//             <MDBIcon fab icon="linkedin" />
//           </a>
//           <a href="" className="me-4 text-reset">
//             <MDBIcon fab icon="github" />
//           </a>
//         </div>
//       </section> */}
//         <MDBContainer className="text-center text-md-start">
//           <MDBRow className="pt-5">
//             <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">
//                 Education Resource Repository
//               </h6>
//               <span className="me-5 d-none d-lg-block">Get connected with us on every platformss:</span>
              
//             </MDBCol>

//             <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">Products</h6>
//               <p>
//                 <a href="#!" className="text-reset">
//                   Angular
//                 </a>
//               </p>
//               <p>
//                 <a href="#!" className="text-reset">
//                   React
//                 </a>
//               </p>
//               <p>
//                 <a href="#!" className="text-reset">
//                   Vue
//                 </a>
//               </p>
//               <p>
//                 <a href="#!" className="text-reset">
//                   Laravel
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
//               <p>
//                 <a href="#!" className="text-reset">
//                   Pricing
//                 </a>
//               </p>
//               <p>
//                 <a href="#!" className="text-reset">
//                   Settings
//                 </a>
//               </p>
//               <p>
//                 <a href="#!" className="text-reset">
//                   Orders
//                 </a>
//               </p>
//               <p>
//                 <a href="#!" className="text-reset">
//                   Help
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
//               <p>
//                 <MDBIcon icon="home" className="me-2" />
//                 New York, NY 10012, US
//               </p>
//               <p>
//                 <MDBIcon icon="envelope" className="me-3" />
//                 info@example.com
//               </p>
//               <p>
//                 <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
//               </p>
//               <p>
//                 <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
//               </p>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>

//       <div
//         className="text-center p-4"
//         style={{ backgroundColor: "rgb(15, 203, 153)" }}
//       >
//         © 2021 Copyright:
//         <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }


import React from "react";
import "./Footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      style={{ backgroundColor: "#a4e7f3", width: "100vw"}}
      className="text-center text-lg-start text-muted"
    >
      {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section> */}
      <MDBContainer className="text-center text-md-start">
        <MDBRow className="pt-5">
          <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
            <h6 className="text-uppercase font-style- mb-4">
              "LearningMate is a professional services and product company
              offering domain expertise in teaching and learning solutions."
            </h6>
            <div style={{ display: "flex", paddingBottom:'10px', paddingTop:'40px' }}>
              <span className="me-5 d-none d-lg-block">
                <a href="https://www.facebook.com/LearningMateSolutions/"><i class="fa-brands fa-facebook"></i></a>
              </span>
              <span className="me-5 d-none d-lg-block">
                <a href="https://www.instagram.com/learningmate_solutions/"><i class="fa-brands fa-instagram"></i></a>
              </span>
              <span className="me-5 d-none d-lg-block">
                <a href="https://twitter.com/learningmate?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="fa-brands fa-twitter"></i></a>
              </span>
            </div>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Works for</h6>
            <p>
              <a
                href="https://learningmate.com/ed-tech-companies/"
                className="text-reset"
              >
                Ed-Tech Companies
              </a>
            </p>
            <p>
              <a href="https://learningmate.com/k-12/" className="text-reset">
                K12
              </a>
            </p>
            <p>
              <a
                href="https://learningmate.com/higher-education/"
                className="text-reset"
              >
                Higher Education
              </a>
            </p>
            <p>
              <a
                href="https://learningmate.com/workforce/"
                className="text-reset"
              >
                Workforce
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="https://learningmate.com/news/" className="text-reset">
                News
              </a>
            </p>
            <p>
              <a
                href="https://learningmate.com/contact/"
                className="text-reset"
              >
                Contact
              </a>
            </p>
            <p>
              <a
                href="https://learningmate.com/careers/"
                className="text-reset"
              >
                Careers
              </a>
            </p>
            <p>
              <a
                href="https://fast.wistia.com/embed/channel/ma6tmfsax3"
                className="text-reset"
              >
                Podcast
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Address</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              74 Techno Park, ‘C’ Cross Road, M.I.D.C. Marol, Andheri (East),
              Mumbai 400 093, India
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              Learningmate@example.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgb(15, 203, 153)" }}
      >
        <span>© 2022 Copyright - </span>
        <span>
          <a className="text-reset " href="https://learningmate.com/">
          LearningMate. All rights reserved. Privacy Policy | CSR Policy  |  DEI Policy | PoSH Policy
          </a>
        </span>
      </div>
    </MDBFooter>
  );
}


import { Link } from "react-router-dom";
import { Navigate, useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { URL, SPRING_URL } from "../../../config";
import axios from "axios";
// import { toast } from "react-toastify";
import moment from "moment";
import "./ClassesCard.css";
import image1 from "./bird.jpg";

export default function ClassCard() {
  // const { state } = useLocation();

  const navigate = useNavigate();

  const handleButtonClick = (value) => {
    // Update the state with the selected class
    console.log("State value from card : " + value);
    navigate("/Resource-List", { state: { classtd: value } }); // Navigate to the next page with the state
  };

  return (
    <div className="container" id="YBC">
      <h1 id="YBID" style={{ paddingTop: "15px", fontWeight:"bolder" }}>
        Classes
      </h1>
      <div className="row class-container" style={{ height: "30px" }}>
        {[...Array(10)].map((_, index) => (
          <div className="col-md-4" key={index}>
            <div
              className="card border-info mb-3"
              style={{
                border:"2px solid",
                borderRadius: "20px",
                maxWidth: "18rem",
                height: "150px",
                backgroundImage: `url(${image1})`,

              }}
              onClick={() => handleButtonClick(index + 1)}
            >
              <div style={{paddingTop: "50px", fontSize: "30px", fontWeight:"bold", color:"#AE4272"}}>
                CLASS {index + 1}
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}












    // <div className="container" id="YBC">
    //   <h1 id="YBID">Classes</h1>
    //   <table class="table table-hover" id="reqTable">

    //     <tbody className="class-container">
    //     {[...Array(10)].map((_, index) => (
    //         <tr key={index}>
    //           <td>Class {index + 1}</td>
    //           <td>
    //             <button onClick={() => handleButtonClick(index + 1)}>Resources</button>
    //           </td>
    //         </tr>

    //       ))}
    //     </tbody>
    //   </table>
    // </div>

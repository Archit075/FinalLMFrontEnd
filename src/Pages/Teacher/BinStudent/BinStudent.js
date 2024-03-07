import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { SPRING_URL, URL, URLUser } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";
// import Header from "../../../AllHeaders/HNavbar";
// import Footer from "../../../Footer/Footer";
// import AHeader from "../../../AllHeaders/AHeader";

export default function BinStudent() {
  const [students, setStudents] = useState([]);

  const { standard } = sessionStorage;

  const searchStudents = () => {
    const url = `${URLUser}/api/UserControllers/GetByStd/${standard}`;
    console.log("url is : " + url);
    axios
      .post(url)
      .then((response) => {
        const result = response.data.filter(res => res.flag === false);
        console.dir(result)
        console.log("result is: " + result[0]);
        console.dir("result in dir is : "+result)
        if (result !== null ) {
          setStudents(result);
        } else {
          toast.error(result);
        }
      })
      .catch((error) => {
        console.log("try catch error.");
        console.dir(error);
        toast.error(error.response.data.error);
      });
  };

  const ActivateStudent = (username, id) => {
    console.log("id is :" + username);
    const url = `${URLUser}/api/UserControllers/Activate/${username}/${id}`;  

    axios.patch(url)
    .then((response) => {
      const result = response.data;
      console.dir(result);
      console.log(result["statusCode"]);
      if (result["statusCode"] === 1) {
        toast.success(`student having id ${username} activated`, {
          autoClose: 800,
          // position: "top-center",
        });
        searchStudents();
      } else {
        toast.error(result["message"]);
      }
    });
  };

  useEffect(() => {
    searchStudents();
    console.log("getting called");
  }, []);


  return (
    <div class= "container mt-5 py-1 table-responsive" style={{marginBottom: "20%"}}>
      {/* <AHeader /> */}
      {/* <h1>STUDENTS DETAILS</h1> */}
      <table class="table table-hover mt-5 table-responsive-lg" style={{backgroundColor: "rgb(250, 174, 188)"}} id="reqTable">
        <thead class="table-dark" >
          <tr>
            <th scope="col">Student id</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Standard</th>
            <th scope="col">Roll</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr>
              <th scope="row">{student.id}</th>
              <td>{student.username}</td>
              <td>{student.email}</td>
              <td>{student.password}</td>
              <td>{student.standard}</td>
              <td>{student.roll}</td>
              <td>{student.dob}</td>
              <td>
                <button
                  class="btn btn-outline-primary mr-2 btn-sm"
                  onClick={() => ActivateStudent(student.username,student.id)}
                >
                  Activate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Footer /> */}
    </div>
  );
}

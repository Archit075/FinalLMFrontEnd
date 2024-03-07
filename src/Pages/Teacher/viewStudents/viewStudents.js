import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { SPRING_URL, URL, URLUser } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";
// import Header from "../../../AllHeaders/HNavbar";
// import Footer from "../../../Footer/Footer";
// import AHeader from "../../../AllHeaders/AHeader";

export default function AllUsers() {
  const [students, setStudents] = useState([]);

  const { standard } = sessionStorage;

  const searchStudents = () => {
    const url = `${URLUser}/api/UserControllers/GetActiveByStd/${standard}`;
    console.log("url is : " + url);
    axios
      .post(url)
      .then((response) => {
        const result = response.data;
        console.dir(result)
        console.dir("flag " + result)
        console.dir("result is: " + result[0].username);
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

  const deleteStudent = (stud_id) => {
    console.log("id is :" + stud_id);
    const url = `${URLUser}/api/UserControllers/Delete/${stud_id}`;

    axios.delete(url).then((response) => {
      const result = response.data;
      console.dir(response.data);
      if (result["statusCode"] === 1) {
        toast.success(`student having id ${stud_id} deleted`, {
          autoClose: 800,
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
  }, [setStudents]);


  return (
    <div class= "container mt-5 py-1 table-responsive" style={{marginBottom: "20%"}}>
      {/* <AHeader /> */}
      {/* <h1>STUDENTS DETAILS</h1> */}
      <table class="table table-hover mt-5 table-responsive-lg" style={{backgroundColor: "white"}} id="reqTable">
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
          {students.map((student, index) => (
            <tr>
              <th scope="row">{student.id}</th>
              <td>{student.username}</td>
              <td>{student.email}</td>
              <td>{student.password}</td>
              <td>{student.standard}</td>
              <td>{student.roll}</td>
              <td>{student.dob.slice(0, 10)}</td>
              <td>
                <button
                  class="btn btn-outline-danger mr-2 btn-sm"
                  onClick={() => deleteStudent(student.id)}
                >
                  DELETE
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

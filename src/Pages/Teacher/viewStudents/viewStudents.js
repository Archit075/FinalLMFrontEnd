// import { Link } from "react-router-dom";
// import { useLocation, useNavigate } from "react-router";
// import { SPRING_URL, URL, URLUser, UrlGateway } from "../../../config";
// import Footer from "../../../Footer/Footer";
// import Header from "../../../AllHeaders/HNavbar";
// import AHeader from "../../../AllHeaders/AHeader";
import { useState, useEffect } from "react";
import { UrlGateway } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";

export default function AllUsers() {
  const [students, setStudents] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterResult, setFilterResult] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = students.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilterResult(filteredData);
    } else {
      setFilterResult(students);
    }
  };

  const { standard } = sessionStorage;

  const searchStudents = () => {
    // const url = `${URLUser}/api/UserControllers/GetActiveByStd/${standard}`;
    const url = `${UrlGateway}/gateway/user/getActiveStudents/${standard}`;

    console.log("url is : " + url);
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        console.dir(result);
        console.dir("flag " + result);
        console.dir("result is: " + result[0].username);
        console.dir("result in dir is : " + result);
        if (result !== null) {
          setStudents(result);
        } else {
          toast.error(result);
        }
      })
      .catch((error) => {
        console.log("try catch error.");
        toast.error("No students are their in the list !!", { autoClose: 800 });
        console.dir(error);
        // toast.error(error.response.data);
      });
  };

  const deleteStudent = (id) => {
    console.log("id is :" + id);
    // const url = `${URLUser}/api/UserControllers/Delete/${stud_id}`;
    const url = `${UrlGateway}/gateway/user/delete/${id}`;

    axios.delete(url).then((response) => {
      const result = response.data;
      console.dir(response.data);
      if (result["statusCode"] === 1) {
        toast.success(`student with id: ${id} has been deleted`, {
          autoClose: 800,
        });
        // searchStudents();
        setStudents((prevStudent) =>
          prevStudent.filter((student) => student.id !== id)
        );
      } else {
        toast.error(result["message"], { autoClose: 800 });
      }
    });
  };

  useEffect(() => {
    searchStudents();
    console.log("getting called");
  }, [setStudents]);
  // }, [setStudents]);

  return (
    // <div class= "container mt-5 py-1 table-responsive" style={{marginBottom: "20%"}}>
    //   {/* <AHeader /> */}
    //   {/* <h1>STUDENTS DETAILS</h1> */}
    //   <table class="table table-hover mt-5 table-responsive-lg" style={{backgroundColor: "white"}} id="reqTable">
    //     <thead class="table-dark" >
    //       <tr>
    //         <th scope="col">Student id</th>
    //         <th scope="col">Username</th>
    //         <th scope="col">Email</th>
    //         <th scope="col">Password</th>
    //         <th scope="col">Standard</th>
    //         <th scope="col">Roll</th>
    //         <th scope="col">Date of Birth</th>
    //         <th scope="col">Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {students.map((student, index) => (
    //         <tr>
    //           <th scope="row">{student.id}</th>
    //           <td>{student.username}</td>
    //           <td>{student.email}</td>
    //           <td>{student.password}</td>
    //           <td>{student.standard}</td>
    //           <td>{student.roll}</td>
    //           <td>{student.dob.slice(0, 10)}</td>
    //           <td>
    //             <button
    //               class="btn btn-outline-danger mr-2 btn-sm"
    //               onClick={() => deleteStudent(student.id)}
    //             >
    //               DELETE
    //             </button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    //   {/* <Footer /> */}
    // </div>

    <div
      class="container mt-5 py-1 table-responsive"
      style={{ marginBottom: "20%" }}
    >
      {/* <AHeader /> */}
      {/* <h1>STUDENTS DETAILS</h1> */}

      <input
        style={{ marginTop: "2%" }}
        placeholder="search student here..."
        className="form-control"
        onChange={(e) => searchItems(e.target.value)}
      />
      {/* <table class="table table-hover mt-5 table-responsive-lg" style={{ backgroundColor: "white" }} id="reqTable">
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
      </table> */}

      {searchInput.length > 1 ? (
        <table
          class="table table-hover mt-5 table-responsive-lg"
          style={{ backgroundColor: "white" }}
          id="reqTable"
        >
          <thead class="table-dark">
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
            {filterResult.map((student, index) => (
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
      ) : (
        <table
          class="table table-hover mt-5 table-responsive-lg"
          style={{ backgroundColor: "white" }}
          id="reqTable"
        >
          <thead class="table-dark">
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
      )}

      {/* <Footer /> */}
    </div>
  );
}

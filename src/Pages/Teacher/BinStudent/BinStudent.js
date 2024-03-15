import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { SPRING_URL, URL, URLUser, UrlGateway } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";
// import Header from "../../../AllHeaders/HNavbar";
// import Footer from "../../../Footer/Footer";
// import AHeader from "../../../AllHeaders/AHeader";

export default function BinStudent() {
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
    // const url = `${URLUser}/api/UserControllers/GetByStd/${standard}`;
    const url = `${UrlGateway}/gateway/user/getUsersByStd/${standard}`;
    console.log("url is : " + url);
    axios
      .get(url)
      .then((response) => {
        const result = response.data.filter((res) => res.flag === false);
        console.dir(result);
        console.log("result is: " + result[0]);
        console.dir("result in dir is : " + result);
        if (result !== null) {
          setStudents(result);
        } else {
          toast.error(result, { autoClose: 800 });
        }
      })
      .catch((error) => {
        console.log("try catch error.");
        toast.error("Bin list is empty !!", { autoClose: 800 });
        console.dir(error);
        // toast.error(error.response.data.error);
      });
  };

  const ActivateStudent = (username, id) => {
    console.log("id is :" + username);
    // const url = `${URLUser}/api/UserControllers/Activate/${username}/${id}`;
    const url = `${UrlGateway}/gateway/user/activate/${username}/${id}`;

    axios.patch(url).then((response) => {
      const result = response.data;
      console.dir(result);
      console.log(result["statusCode"]);
      if (result["statusCode"] === 1) {
        toast.success(`${username} has been activated`, {
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
    // <div class= "container mt-5 py-1 table-responsive" style={{marginBottom: "20%"}}>
    //   {/* <AHeader /> */}
    //   {/* <h1>STUDENTS DETAILS</h1> */}
    //   <table class="table table-hover mt-5 table-responsive-lg" style={{backgroundColor: "rgb(250, 174, 188)"}} id="reqTable">
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
    //       {students.map((student) => (
    //         <tr>
    //           <th scope="row">{student.id}</th>
    //           <td>{student.username}</td>
    //           <td>{student.email}</td>
    //           <td>{student.password}</td>
    //           <td>{student.standard}</td>
    //           <td>{student.roll}</td>
    //           <td>{student.dob}</td>
    //           <td>
    //             <button
    //               class="btn btn-outline-primary mr-2 btn-sm"
    //               onClick={() => ActivateStudent(student.username,student.id)}
    //             >
    //               Activate
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
      <input
        style={{ marginTop: "2%" }}
        placeholder="search student here..."
        className="form-control"
        onChange={(e) => searchItems(e.target.value)}
      />

      {searchInput.length > 1 ? (
        <table
          class="table table-hover mt-5 table-responsive-lg"
          style={{ backgroundColor: "rgb(250, 174, 188)" }}
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
            {filterResult.map((student) => (
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
                    onClick={() =>
                      ActivateStudent(student.username, student.id)
                    }
                  >
                    Activate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table
          class="table table-hover mt-5 table-responsive-lg"
          style={{ backgroundColor: "rgb(250, 174, 188)" }}
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
                    onClick={() =>
                      ActivateStudent(student.username, student.id)
                    }
                  >
                    Activate
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

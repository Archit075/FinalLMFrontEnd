import { useState } from "react";
// import "./edit.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URLUser, UrlGateway } from "../../../config";

const UpdateTInfo = () => {
  // const [first_name, setFirstName] = useState("");
  const { id, name, email, standard, role, phone_number } = sessionStorage;

  const [_username, setUsername] = useState(name);
  const [_email, setEmail] = useState(email);
  const [contact, setContact] = useState(phone_number);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(sessionStorage);

  const navigate = useNavigate();

  const save = () => {
    if (_username.length === 0) {
      toast.warning("please enter username");
    } else if (_email.length === 0) {
      toast.warning("please enter email");
    } else if (contact.length === 0) {
      toast.warning("please enter mobile");
      // } else if (password.length === 0) {
      //   toast.warning("please enter password");
      // } else if (confirmPassword.length === 0) {
      //   toast.warning("please enter correct password");
    } 
    else {
      // if (password.length === 0 && confirmPassword.length === 0) {
      //   const body = {
      //     id,
      //     Username,
      //     _email,
      //     password,
      //     Contact,
      //     standard
      //   };

      //   const urlUser = `${UrlGateway}/gateway/user/update`;
      //   // `;
      //   // // const urlSpring = `${SPRING_URL}/student/update/${stud_id}`;

      //   axios.put(urlUser, body).then((response) => {
      //     const result = response.data;
      //     console.log(result);
      //     if (result !== null) {
      //       toast.success("Profile successfully updated!!!");
      //       navigate("/TProfile");
      //     } else {
      //       toast.error(result["error"]);
      //     }
      //   });
      // } 
      //else {
        const body = {
          id : id,         
          email : _email,
          password : password,
          phoneNumber : contact,
          name : _username,
          standard : standard
        };
        console.dir(body);

        // url to make signin api call
        // const urlUser = `${URLUser}/api/UserControllers/UpdateUser`;
        const urlUser = `${UrlGateway}/gateway/teacher/updateteacher`;
        // `;
        // // const urlSpring = `${SPRING_URL}/student/update/${stud_id}`;

        axios.put(urlUser, body).then((response) => {
          const result = response.data;
          console.log(result);
          if (result !== null) {
            toast.success("Profile successfully updated!!!");
            sessionStorage["name"] = _username;
            sessionStorage["phone_number"] = contact;
            sessionStorage["email"] = _email;
            navigate("/TProfile");
          } else {
            toast.error(result["error"]);
          }
        }).catch((error)=>{
          console.dir(error);
          console.log("try catch.");
        })
      //}
    }
  };

  const handlename = (e) => {
    // setInputValue(event.target.value);
    setUsername(e.target.value);
  };

  const handleContact = (e) => {
    setContact(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "10%",
          padding: "5%",
          // backgroundColor: "grey",
          // backgroundColor: "cyan",
          border: "2px solid gray",
          boxShadow: "10px 10px 5px gray",
          borderRadius: "3%",
          marginBottom: "5%",
          // filter: "blur(8px)"
        }}
      >
        <h1 className="title" style={{ fontWeight: "bold" }}>
          Update Information
        </h1>
        <div className="edit">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <div className="form">
                <div className="mb-2">
                  <label
                    htmlFor=""
                    className="label-control fw-bold"
                    id="editLab"
                  >
                    Username
                  </label>
                  <input
                    class="editable-placeholder"
                    value={_username}
                    type="text"
                    className="form-control"
                    onChange={handlename}
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor=""
                    className="label-control fw-bold"
                    id="editLab"
                  >
                    Contact Number
                  </label>
                  <input
                    value={contact}
                    onChange={handleContact}
                    type="number"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor=""
                    className="label-control fw-bold"
                    id="editLab"
                  >
                    Email
                  </label>
                  <input
                  value={_email}
                    onChange={handleEmail}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor=""
                    className="label-control fw-bold"
                    id="editLab"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>

                {/* <div className="mb-2">
              <label htmlFor="" className="label-control" id="editLab">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control"
              />
            </div> */}

                <div className="mb-2">
                  <label
                    htmlFor=""
                    className="label-control fw-bold"
                    id="editLab"
                  >
                    Confirm Password
                  </label>
                  <input
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    type="password"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <button onClick={save} className="btn btn-primary">
                    Update
                  </button>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateTInfo;

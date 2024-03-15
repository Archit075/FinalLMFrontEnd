import { useState } from "react";
// import "./edit.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { UrlGateway } from "../../../config";

const UpdateInfo = () => {
  // const [first_name, setFirstName] = useState("");
  const { username, email, dob } = sessionStorage;

  const [_username, setUsername] = useState(username);
  const [_email, setEmail] = useState(email);
  const [_dob, setDob] = useState(dob);
  const [_password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(sessionStorage);

  const navigate = useNavigate();

  const save = () => {
    if (_username.length === 0) {
      toast.warning("please enter username", {autoClose: 800});
    } else if (_email.length === 0) {
      toast.warning("please enter email", {autoClose: 800});
    } else if (_dob.length === 0) {
      toast.warning("please enter mobile", {autoClose: 800});
    } else if (_password.length === 0) {
      toast.warning("please enter password", {autoClose: 800});
    } else if (confirmPassword.length === 0) {
      toast.warning("please enter correct password", {autoClose: 800});
    } else {
      const body = {
        username : _username,
        email: _email,
        password: _password,
        dob: _dob,
      };

      // url to make signin api call
      // const urlUser = `${URLUser}/api/UserControllers/UpdateUser`;
      const urlUser = `${UrlGateway}//gateway/user/update`;
      // `;
      // // const urlSpring = `${SPRING_URL}/student/update/${stud_id}`;

      axios.put(urlUser, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (result !== null) {
          toast.success("Profile successfully updated!!!", {autoClose: 800});
          navigate("/UProfile");
        } else {
          toast.error(result["error"], {autoClose: 800});
        }
      });
    }
  };

  const handlename = (e) => {
    // setInputValue(event.target.value);
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleDOB = (e) => {
    setDob(e.target.value);
  }
  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "30%",
          // backgroundColor: "grey",
          // backgroundColor: "cyan",
          border: "2px solid gray",
          boxShadow: "10px 10px 5px gray",
          borderRadius: "3%",
          // filter: "blur(8px)"
        }}
      >
        <h1 className="title" style={{fontWeight: "bold"}}>Update Information</h1>
        <div className="edit">
          <div className="row">
            <div className="col">
              <div className="form">
                <div className="mb-2">
                  <label htmlFor="" className="label-control fw-bold" id="editLab">
                    Username
                  </label>
                  <input style={{width: "250px"}}
                    onChange={handlename}
                    value={ _username }
                    type="text"
                    className="form-control editable-placeholder"
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="" className="label-control fw-bold" id="editLab">
                    Date of Birth
                  </label>
                  <input
                  style={{width: "250px"}}
                    onChange={handleDOB}
                     value={ _dob }
                    type="date"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="" className="label-control fw-bold" id="editLab">
                    Email
                  </label>
                  <input
                  style={{width: "250px"}}
                    onChange={handleEmail}
                     value={ _email }
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="" className="label-control fw-bold" id="editLab">
                    Password
                  </label>
                  <input
                  style={{width: "250px"}}
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
                  <label htmlFor="" className="label-control fw-bold" id="editLab">
                    Confirm Password
                  </label>
                  <input
                  style={{width: "250px"}}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateInfo;

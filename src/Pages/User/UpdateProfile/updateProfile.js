import { useState } from "react";
// import "./edit.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URLUser } from "../../../config";

const UpdateInfo = () => {
  // const [first_name, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { User_id, standard, roll } = sessionStorage;

  const navigate = useNavigate();

  const save = () => {
    if (username.length === 0) {
      toast.warning("please enter username");
    } else if (email.length === 0) {
      toast.warning("please enter email");
    } else if (dob.length === 0) {
      toast.warning("please enter mobile");
    } else if (password.length === 0) {
      toast.warning("please enter password");
    } else if (confirmPassword.length === 0) {
      toast.warning("please enter correct password");
    } else {
      const body = {
        username,
        email,
        password,
        dob,
      };

      // url to make signin api call
      const urlUser = `${URLUser}/api/UserControllers/UpdateAdmin`;
      // const urlSpring = `${SPRING_URL}/student/update/${stud_id}`;

      axios.put(urlUser, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (result !== null) {
          toast.success("Profile successfully updated!!!");
          navigate("/UProfile");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "30%",
          // backgroundColor: "cyan",
          border: "2px solid gray",
          boxShadow: "10px 10px 5px gray",
          borderRadius: "3%",
        }}
      >
        <h1 className="title">Update Information</h1>
        <div className="edit">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <div className="form">
                <div className="mb-2">
                  <label htmlFor="" className="label-control fw-bold" id="editLab">
                    Username
                  </label>
                  <input style={{width: "250px"}}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="" className="label-control fw-bold" id="editLab">
                    Date of Birth
                  </label>
                  <input
                    onChange={(e) => {
                      setDob(e.target.value);
                    }}
                    type="date"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="" className="label-control fw-bold" id="editLab">
                    Email
                  </label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="" className="label-control fw-bold" id="editLab">
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
                  <label htmlFor="" className="label-control fw-bold" id="editLab">
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

export default UpdateInfo;
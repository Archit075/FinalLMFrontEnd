// import Res1 from "./YourBooks.jpg";
// import { Link } from "react-router-dom";
// import CardGroup from "react-bootstrap/CardGroup";
// import Card from "react-bootstrap/Card";
// import { CardBody, Container } from "react-bootstrap";
// import { URLUser, URLuser, UrlGateway } from "../../../config";
import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import "./profile.css";
import { UrlGateway } from "../../../config";

const Profile = () => {
  const { User_id } = sessionStorage;

  const [profile, setProfile] = useState([]);

  const navigate = useNavigate();

  const searchProfile = () => {
    // const url = `${URLUser}/api/UserControllers/GetById/${User_id}`;
    const url = `${UrlGateway}/gateway/user/byid/${User_id}`;

    console.log(url);

    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        console.log("The result is:" + result);
        if (result !== null) {
          setProfile(result);
          console.log(User_id);
        } else {
          toast.error(result["error"], {autoClose: 800});
        }
      })
      .catch((error) => {
        toast.error(error.response.data.error, {autoClose: 800});
      });
  };

  const handleUpdateProfile = () => {
    navigate("/UpdateProfile", {});
  };

  //   const edit = () => {
  //     navigate('/SEdit')
  //   }

  useEffect(() => {
    searchProfile();
    console.log("getting called");
  });

  return (
    <>
      {/* <CardGroup
        style={{
          backgroundColor: "white",
          height: "450px",
          width: "300px",
          placeSelf: "center",
          margin: "auto",
          marginTop: "80px",
        }}
      >
        <Card.Img
          style={{ borderRadius: "50%", padding: "5px" }}
          variant="top"
          src={Res1}
        />
        <Card
          style={{
            backdropFilter: "blur(5px)",
            backgroundColor: "transparent",
          }}
        >
          <Card.Body style={{ paddingTop: "5px", paddingBottom: "5px" }}>
            <Card.Title style={{ float: "left" }}> Username : </Card.Title>
            <Card.Text style={{ float: "right" }}>{profile.username}</Card.Text>
          </Card.Body>

          <Card.Body style={{ paddingTop: "5px", paddingBottom: "5px" }}>
            <Card.Title style={{ float: "left" }}> Standard : </Card.Title>
            <Card.Text style={{ float: "right" }}>{profile.standard}</Card.Text>
          </Card.Body>

          <Card.Body style={{ paddingTop: "5px", paddingBottom: "5px" }}>
            <Card.Title style={{ float: "left" }}>Roll no. :</Card.Title>
            <Card.Text style={{ float: "right" }}>{profile.roll}</Card.Text>
          </Card.Body>

          <Card.Body style={{ paddingTop: "5px", paddingBottom: "5px" }}>
            <Card.Title style={{ float: "left" }}>Date : </Card.Title>
            <Card.Text style={{ float: "right" }}>{profile.dob}</Card.Text>
          </Card.Body>
          <Card.Body style={{ paddingTop: "5px", paddingBottom: "5px" }}>
            <Card.Title style={{ float: "left" }}>Email : </Card.Title>
            <Card.Text style={{ float: "right" }}>{profile.email}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ margin: "0", padding: "0" }}>
            <small className="text-muted">{User_id}</small>
          </Card.Footer>
        </Card>
      </CardGroup> */}
      {/* <div class="wrapper" style={{marginTop: "10%"}}>
        <div class="user-card">
            <div class="user-card-img">
              <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" alt=""/>
            </div>
            <div class="user-card-info">
              <h1>{profile.username}</h1>
              <h4><span>📧:  </span>{profile.email} </h4>
              <h4><span>🆔:  </span>{User_id}</h4>
              <h4><span>🎂:  </span>{profile.dob}</h4>
              <h4><span>🪪:  </span> {profile.roll}</h4>
              <h4><span>🏫:  </span> {profile.standard}</h4>
            </div>
        </div>
      </div> */}

      <div
        class="card3"
        style={{
          marginTop: "10%",
          marginLeft: "35%",
          marginBottom: "5%",
          fontWeight: "bolder",
          // fontFamily: "Poppins",
          // alignItems: "cente",
          // justifyContent: "center",
          // backgroundColor: "#ADE5F9",
          // minHeight: "100vh",
        }}
      >
        <div class="img1">
          {/* <img alt="" src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /> */}

        </div>
        <div class="infos1" >
          <div class="name1">
            <h1 style={{fontWeight: "bold"}}>{profile.username}</h1>
            <h4 style={{ fontWeight: "bolder" }}>{profile.email}</h4>
          </div>
          <p class="text1">Standard: {profile.standard}</p>
          <ul class="stats1" style={{paddingLeft: "8%"}}>
            <li>
              <h3 style={{ fontWeight: "bolder" }}>{User_id}</h3>
              <h4 style={{ fontWeight: "bolder" }}>Id</h4>
            </li>
            <li>
              <h3 style={{ fontWeight: "bolder" }}>{profile.dob}</h3>
              <h4 style={{ fontWeight: "bolder" }}>Date of Birth</h4>
            </li>
            <li>
              <h3 style={{ fontWeight: "bolder" }}>{profile.roll}</h3>
              <h4 style={{ fontWeight: "bolder" }}>Roll no.</h4>
            </li>
          </ul>
          <div class="links1" style={{ paddingLeft: "0"}}>
            <button
              class="follow1"
              to="/UpdateProfile"
              onClick={handleUpdateProfile}
            >
              Update Profile
            </button>
            {/* <button class="view">View profile</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

// <!DOCTYPE html>
// <html lang="en">
//   <!-- divinectorweb.com -->
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Responsive User Profile Card using HTML and CSS</title>
//     <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
//     <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <div class="wrapper">
//         <div class="user-card">
//             <div class="user-card-img">
//               <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png" alt="">
//             </div>
//             <div class="user-card-info">
//               <h2>Mohamed Yousef</h2>
//               <p><span>Email:</span> example@example.com</p>
//               <p><span>Location:</span> Palestine, Gaza Strip</p>
//               <p><span>Occupation:</span> Web Developer</p>
//               <p><span>About me:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//             </div>
//         </div>
//     </div>

// </body>
// </html>

import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { toast } from "react-toastify";
import Res1 from "./YourBooks.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./profile.css";
import { URLUser, URLuser } from "../../../config";
import { CardBody, Container } from "react-bootstrap";

const Profile = () => {
  const { User_id } = sessionStorage;

  const [profile, setProfile] = useState([]);

  const navigate = useNavigate();

  const searchProfile = () => {
    const url = `${URLUser}/api/User/GetById/${User_id}`;

    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        console.log("The result is:" + result);
        if (result !== null) {
          setProfile(result);
          console.log(User_id);
        } else {
          toast.error(result["error"]);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      });
  };

  //   const edit = () => {
  //     navigate('/SEdit')
  //   }

  useEffect(() => {
    searchProfile();
    console.log("getting called");
  }, []);

  return (
    <div>
      <CardGroup
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
      </CardGroup>
    </div>
  );
};

export default Profile;

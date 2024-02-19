import { useState } from 'react'
import { toast } from 'react-toastify'
import './index.css'
import axios from 'axios'
import { URLUser } from '../../../config'
import { useNavigate } from 'react-router'



const USignin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const signinUser = async () => {
    console.log("hello")
    if (email.length == 0) {
      toast.warning("please enter email");
    }else if (password.length == 0) {
      toast.warning("please enter password");
    }else{
      const body = {
        email,
        password,
      };
        console.log("Email is : "+body.email);
        console.log("Password is "+body.password);


      const url = `${URLUser}/api/User/Login`;
     
      console.log(url);
      // make api call using axios
      await axios.post(url, body).then((response) => {
         console.log("hello in axios 1")
        // get the server result
        console.log(response);
        const result = response.data;
        console.log(result)

        if (result != "") {
          toast.success("Welcome to the application",{
            autoClose:1500
        });
           navigate('/UHome')

          // get the data sent by server
          const { token, id, username, email, standard , role} = result;
         console.log("token is : "+token);


          //persist the logged in user's information for future use
          sessionStorage["token"] = token;
          sessionStorage["User_id"] = id;
          sessionStorage["username"] = username;
          sessionStorage["email"] = email;
          sessionStorage["standard"] = standard;
          sessionStorage["role"] = role;
          

          // navigate to home component
          // navigate("/home");
        } else {
          toast.error("Invalid user name or password", {
            autoClose:1500
          });
        }
      }).catch(error => {
        let err1 = error.response.data.error;
        toast.error(err1, { autoClose:2500  })
      });
    }
  };



  return (
    <div className='signin'>
      <h1 className="title" id='Stitle'>Student Signin</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label className="label-control" id='lab1'>
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control" id='lab1'>
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div cd-grid col-12 mx-auto mt-2 >
              <button onClick={signinUser} className="btn btn-blue" id='signinbtn1'>
                Signin
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default USignin

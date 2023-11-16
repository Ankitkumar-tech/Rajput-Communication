import { useState } from "react";
// import "./register.css";
import "./Register.css";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
// import bootstrap from "bootstrap";
const Login = () => {
  //   const [text, setText] = useState<string>("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(mail, password);
    const userData = {
      email: mail,
      password: password,
    };

    axios
      .post("http://localhost:8000/api/v1/auth/register", userData)
      .then(function (response) {
        // Handle a successful response from the server
        console.log("Registration successful: ", response.data);
        alert(response.data.message);
        navigate("/");
        // You can also perform actions like redirecting the user after successful registration.
      })
      .catch(function (error) {
        // Handle errors from the server or the request
        console.error("Registration failed: ", error);
        // You can display an error message to the user.
      });
  }
  // console.log(userData, "userData");

  return (
    <div className="wrapper">
      <h2>
        Login{" "}
        <span>
          <img
            className="logo_img"
            src="https://i.ibb.co/NW02kFD/Smart-Online-Shop-Chart-Logo.png"
            alt=""
          />
        </span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create password"
            required
          />
        </div>

        <div className="policy">
          <input type="checkbox" />
          <h3>I accept all terms &amp; condition</h3>
        </div>
        <div className="input-box button">
          <input type="Submit" defaultValue="Register Now" />
        </div>
        <div className="text">
          <h3>
            have an account? <Link to="/register">Register Now</Link>
          </h3>
        </div>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Login;

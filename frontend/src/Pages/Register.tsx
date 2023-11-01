
import React, { useState } from "react";
// import "./register.css";
import "./Register.css"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import bootstrap from "bootstrap";
const Register = () => {
  const [text, setText] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(text, mail, password, phone, address);
    const userData = {
      name: text,
      email: mail,
      password: password,
      address: address,
      phone: phone,
    };

    axios
      .post("http://localhost:8080/api/v1/auth/register", userData)
      .then(function (response) {
        // Handle a successful response from the server
        console.log("Registration successful: ", response.data);
        toast(response.data.message);
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
        Registration{" "}
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
            placeholder="Enter your name"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
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
        <div className="input-box">
          <input
            type="password"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your Mobile No"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
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
            Already have an account? <a href="#">Login now</a>
          </h3>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
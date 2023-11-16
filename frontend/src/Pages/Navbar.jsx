// import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Nav-mainDiv">
      <img
        className="Nav_logo_img"
        src="https://i.ibb.co/NW02kFD/Smart-Online-Shop-Chart-Logo.png"
        alt="ShopLogo"
      />
      <ul>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
            {" "}
            Product{" "}
          </Link>
        </li>
        {/* <li>About</li> */}
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to={""}>
            {" "}
            Contact{" "}
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/register"}
          >
            {" "}
            Sign up
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to={"/logn"}>
            {" "}
            Sign in
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

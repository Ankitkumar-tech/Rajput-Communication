// import React from 'react'
import { useAuth } from "../Context/auth";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [auth, setAuth] = useAuth();

  const handleClick = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });

    localStorage.removeItem("auth");
  };
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
        {!auth.user ? (
          <>
            {" "}
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
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/login"}
              >
                {" "}
                Sign in
              </Link>
            </li>{" "}
            *
          </>
        ) : (
          <>
            <li>
              <Link
                onClick={() => handleClick()}
                style={{ textDecoration: "none", color: "black" }}
                to={"/login"}
              >
                {" "}
                Sign Out
              </Link>
            </li>{" "}
            *
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;

{
  /* <li>
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
</li> */
}

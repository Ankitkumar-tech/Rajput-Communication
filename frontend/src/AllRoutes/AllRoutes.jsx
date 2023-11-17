import { Route, Routes } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import { Home } from "../Pages/Home";
import Mobileproduct from "../Product/Mobileproduct";
import Dashboard from "../Pages/Dashboard";
import { Privateroute } from "../Routes/Private";
// import Register from "../Pages/Register.tsx";
export const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Privateroute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mobileProduct" element={<Mobileproduct />} />
      </Routes>
    </>
  );
};

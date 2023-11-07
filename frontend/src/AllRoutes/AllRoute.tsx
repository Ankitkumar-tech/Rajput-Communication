import { Route, Routes } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import { Home } from "../Pages/Home";
// import Register from "../Pages/Register.tsx";
export const AllRoute = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
};

// export default AllRoute;

import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/authActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="bg-blue-500 text-white py-4 px-8 flex justify-between items-center">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Navbar;

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Dashboard = () => {
  const { username } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleGoToList = () => {
    navigate("/list");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>

      {/* dashboard */}

      <div className="flex flex-grow items-center justify-center">
        <div className="max-w-md bg-white border-2 border-blue-500 rounded-lg p-8 shadow-md text-center">
          <h2 className="text-blue-500 text-2xl mb-6">Welcome, {username}!</h2>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-lg focus:outline-none"
            onClick={handleGoToList}
          >
            Go to Items List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

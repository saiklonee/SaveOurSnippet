import React from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="w-full h-screen bg-black text-white flex overflow-hidden">
      <div className="w-1/20 h-full bg-red-50">
        <Sidebar />
      </div>
      <div className="w-19/20 h-full bg-yellow-50 flex flex-col">
        <div className="w-full h-1/10 bg-red-400"></div>
        <div className="w-full h-9/10 bg-green-300"></div>
      </div>
    </div>
  );
};

export default Home;

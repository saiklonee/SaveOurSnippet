import { UserButton } from "@clerk/clerk-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-full h-full bg-black p-4 flex flex-col justify-between">
      <div className=""></div>
      <div className=""></div>
      <div className="">
        <UserButton />
      </div>
    </div>
  );
};

export default Sidebar;

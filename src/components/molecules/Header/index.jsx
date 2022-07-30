import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const history = useNavigate();
  return (
    <div className="flex justify-between items-center bg-blue-400 py-3 px-10">
      <p
        className="text-xl font-bold text-white cursor-pointer"
        onClick={() => history("/")}
      >
        MERN Blog
      </p>
      <div
        className="cursor-pointer px-2 rounded-md bg-white hover:bg-blue-400 hover:text-white text-blue-400 font-normal"
        onClick={() => history("/login")}
      >
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Header;

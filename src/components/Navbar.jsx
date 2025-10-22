import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="px-2 md:px-25 md:mycontainer flex justify-between py-4 items-center h-14 ">
        <div className="logo font-bold text-2xl ">
          <span className="text-green-500">&lt;</span>
          Lock
          <span className="text-green-500">R&gt;</span>
        </div>
        <a href="https://github.com/anshumankharbade">
          <button className=" text-white my-5 rounded-md flex justify-between items-center cursor-pointer">
            <img
              className="invert w-10 p-1"
              src="/icons/github.svg"
              alt="github logo"
            />
            <span className="font-bold px-2">Github</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

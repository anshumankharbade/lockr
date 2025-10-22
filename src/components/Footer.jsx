import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-gray-800 text-white flex-col justify-centre items-center w-full">
      <div className="logo font-bold text-2xl ">
        <span className="text-green-500">&lt;</span>
        Lock
        <span className="text-green-500">R&gt;</span>
      </div>
      <div className="flex justify-center items-center">
        Created with
        <img className="w-5 mx-2" src="icons/heart.png" alt="" /> by Anshuman
      </div>
    </div>
  );
};

export default Footer;

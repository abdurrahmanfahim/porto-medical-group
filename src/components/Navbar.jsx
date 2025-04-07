import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="w-full sticky top-0 z-50 shadow-2xs bg-white ">
        <nav className="container py-26">
          <div className="wrap flex justify-between">
          <div className="logo cursor-pointer">
            <img src="logo.png" alt="logo" />
          </div>
          <div className="right flex items-center">
          <div className="links">
            <ul className="flex ">
              <li className="navLink">Home</li>
              <li className="navLink">About Us</li>
              <li className="navLink">Our Doctors</li>
              <li className="navLink">Departments</li>
              <li className="navLink">Blog</li>
              <li className="navLink">Contact Us</li>
            </ul>
          </div>
          <div className="search text-sm ps-[34px]">
            <AiOutlineSearch className="text-lg cursor-pointer" />
          </div>
          </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

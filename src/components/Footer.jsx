import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookFill, RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-black text-white px-3  ">
        <div className="container ">
          <div className="flex h-[424px] py-12">
          <div className="w-2/12 flex items-center">
            <img src="logo-footer.png" alt="logo" />
          </div>
          <div className="w-3/12">
            <h4 className="text-white text-lg leading-26 tracking-[-0.882px] font-semibold uppercase ">
              get in touch
            </h4>

            <ul className="flex flex-col gap-1.5 py-6 ">
              <li className="flex flex-col">
                <span className="text-sm text-gray leading-26 font-bold tracking-[-0.35px] uppercase">
                  Address
                </span>
                <span className="text-sm text-white leading-26  tracking-[-0.35px] ">
                  123 Street Name, City, England
                </span>
              </li>

              <li className="flex flex-col">
                <span className="text-sm text-gray leading-26 font-bold tracking-[-0.35px] uppercase">
                  Phone
                </span>
                <span className="text-sm text-white leading-26  tracking-[-0.35px] ">
                  Toll Free (123) 456-7890
                </span>
              </li>

              <li className="flex flex-col">
                <span className="text-sm text-gray leading-26 font-bold tracking-[-0.35px] uppercase">
                  Email
                </span>
                <span className="text-sm text-white leading-26  tracking-[-0.35px] cursor-pointer">
                  mail@example.com
                </span>
              </li>

              <li className="flex flex-col">
                <span className="text-sm text-gray leading-26 font-bold tracking-[-0.35px] uppercase">
                  Working Days/Hours
                </span>
                <span className="text-sm text-white leading-26  tracking-[-0.35px] ">
                  Mon - Sun / 9:00AM - 8:00PM
                </span>
              </li>
            </ul>
            <ul className="icons flex gap-4">
              <li className="insta size-[38px] flex items-center justify-center text-black rounded-full bg-white transition-all duration-100 ease-in cursor-pointer hover:bg-[#7c4a3a]">
                <FaInstagram />
              </li>

              <li className="insta size-[38px] flex items-center justify-center text-black rounded-full bg-white transition-all duration-100 ease-in cursor-pointer hover:bg-[#1aa9e1]">
                <RiTwitterXFill />
              </li>

              <li className="insta size-[38px] flex items-center justify-center text-black rounded-full bg-white transition-all duration-100 ease-in cursor-pointer hover:bg-[#3b5a9a]">
                <RiFacebookFill />
              </li>
            </ul>
          </div>
          <div className="w-4/12">
            <h4 className="text-white text-lg leading-26 tracking-[-0.882px] font-semibold uppercase ">
              Medical Services
            </h4>
            <div className="navs flex gap-6 ">
            <ul className="py-6 text-gray text-[12.6px] leading-[24px] ">
              <li><a className="hover:text-white transition-all duration-100" href="#">Home</a></li>
              <li><a className="hover:text-white transition-all duration-100" href="#">About Us</a></li>
              <li><a className="hover:text-white transition-all duration-100" href="#">Our Doctors</a></li>
              <li><a className="hover:text-white transition-all duration-100" href="#">Departments</a></li>
              <li><a className="hover:text-white transition-all duration-100" href="#">Overview</a></li>
              <li><a className="hover:text-white transition-all duration-100" href="#">Cardiology</a></li>
              <li><a className="hover:text-white transition-all duration-100" href="#">Gastroenterology</a></li>
              <li><a className="hover:text-white transition-all duration-100" href="#">Pulmonology</a></li>
              <li><a className="hover:text-white transition-all duration-100" href="#">Dental Care</a></li>
              <li><a className="hover:text-white transition-all duration-100" href="#">Gynecology</a></li>
            </ul>
            <ul className="py-6 text-gray text-[12.6px] leading-[24px] ">
              <li><a className="hover:text-white transition-all duration-100" href="#">Hepatology</a></li>
              <li><a className="hover:text-white transition-all duration-100" href="#">Gastroenterology</a></li>
              <li><a className="hover:text-white transition-all duration-100" href="#">Pulmonology</a></li>
              <li><a className="hover:text-white transition-all duration-100" href="#">Blog</a></li>
              <li><a className="hover:text-white transition-all duration-100" href="#">Contact Us</a></li>
            </ul>
            </div>
          </div>
          <div className="w-3/12">
            <h4 className="text-white text-lg leading-26 tracking-[-0.882px] font-semibold uppercase ">
            Opening Hours
            </h4>
            <ul className="gap-6 text-gray text-[12.6px] leading-[24px]">
              <li className="pb-5 pt-6">
                <p>Mon-Fri 8:30 am to 5:00 pm</p>
              </li>
              <li className="py-5 border-y border-[#36383c]">
                <p>Saturday 9:30 am to 1:00 pm</p>
              </li>
              <li className="py-5">
                <p>Sunday Closed</p>
              </li>
            </ul>
          </div>
          </div>
          <hr className="h-[1px] text-[#36383c] w-full" />
          <p className=" pt-4 pb-10 text-center text-[11.2px] leading-26 text-gray ">Porto Medical. © 2025. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

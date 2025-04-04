import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";

const Header = () => {
  return (
    <>
      <header className="w-full border-b border-[#77777716]">
        <div className="container flex justify-between">
          {/* left section */}
        <div className="left flex ">
          <div className="phone flex items-center text-base font-semibold leading-6 tracking-[-0.5px] text-primary gap-2 me-10  ">
            <div className="icon flex items-center">
              <FiPhone className="text-2xl" />
            </div>
            <a href="tel:8001234567ite
            " className="hover:underline cursor-pointer">(800) 123-4567</a>
          </div>

          <div className="mail flex items-center gap-2 text-xs me-10 leading-6 tracking-[-0.5px] text-gray">
            <div className="icon flex items-center">
              <HiOutlineMail  />
            </div>
            <a href="mailto:mail@example.com"  className="hover:underline cursor-pointer">mail@example.com</a>
          </div>

          <div className="time flex items-center gap-2 text-xs me-10 leading-6 tracking-[-0.5px] text-gray">
            <div className="icon flex items-center">
              <FiPhone  />
            </div>
            <p>Mon - Sat 9:00am - 6:00pm / Sunday - CLOSED</p>
          </div>
        </div>
        {/* right section */}
        <div className="right flex items-center ">
          <div className="social flex">
          <AiOutlineInstagram className="me-8" />
          <GrFacebookOption className="me-8" />
          <FaXTwitter className="me-8" />
          </div>
          <div className="button">
            <a className="btnPrime inline-flex text-xs py-3 px-8 items-center bg-primary text-white border border-transparent hover:border-primary" href="#">MAKE AN APPOINTMENT</a>
          </div>
        </div>
        </div>
      </header>
    </>
  );
};

export default Header;

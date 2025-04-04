import React from "react";
import brandOne from "../assets/img/demos/medical-2/logos/provider-1.png";
import brandTwo from "../assets/img/demos/medical-2/logos/provider-2.png";
import brandThree from "../assets/img/demos/medical-2/logos/provider-3.png";
import brandFour from "../assets/img/demos/medical-2/logos/provider-4.png";
import brandFive from "../assets/img/demos/medical-2/logos/provider-5.png";

const Brand = () => {
  return (
    <>
      <section className="w-full bg-white ">
        <div className="container">
          <div className="heading text-center mt-2">
            <h6>MAJOR BRANDS</h6>
            <h2>Insurance Providers</h2>
            <p className="para mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              imperdiet libero id nisi euismod.
            </p>
          </div>
          <div className="brands pt-12 pb-18 px-[154px] flex justify-between">
            <img src={brandOne} alt={brandOne} />
            <img src={brandTwo} alt={brandTwo} />
            <img src={brandThree} alt={brandThree} />
            <img src={brandFour} alt={brandFour} />
            <img src={brandFive} alt={brandFive} />
          </div>
        </div>

        {/* line */}
        <div className="line bg-black flex">
          <div className="w-1/3 p-6">
            <h5 className="text-[19.6px] text-white leading-26 tracking-[-1px] font-semibold capitalize mb-1">
              Emergency Cases
            </h5>
            <p className="para text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-1/3 p-6">
            <h5 className="text-[19.6px] text-white leading-26 tracking-[-1px] font-semibold capitalize mb-1">
              Doctors Timetable
            </h5>
            <p className="para text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-1/3 p-6 flex gap-[14px]">
            <div className="text">
              <h5 className="text-[19.6px] text-white leading-26 tracking-[-1px] font-semibold capitalize mb-1">
                Find Us On Map
              </h5>
              <p className="para text-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <a
              className="text-white border-2 border-primary py-3 px-10 text-[12.8px] font-black leading-26 uppercase cursor-pointer hover:border-white transition-all ease-initial duration-300"
              href="#"
            >
              view more +
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;

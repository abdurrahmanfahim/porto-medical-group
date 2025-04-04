import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <>
      <section className="w-full bg-white pt-[70px]">
        <div className="bg-[url(./assets/img/demos/medical-2/others/bg-2.png)] bg-contain bg-no-repeat bg-right w-full h-[438px]">
          <div className="container flex ">
            <div className="w-2/1 z-50 px-3 ">
              <h6>What They Say</h6>
              <h2>Patients Reviews</h2>
              <p className="para text-gray mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                imperdiet libero id nisi.
              </p>
              
              {/* slider */}
              <div className="slider flex gap-[54px]">
                <div className="arrow text-4xl text-gray flex items-center">
                  <BsArrowLeftShort />
                </div>
                <div className="slides py-[90px]">
                  <div className="slide flex flex-col items-center mx-auto text-center w-[90%] relative">
                    <p className="text-gray text-sm tracking-[-0.7px] leading-[28.8px] mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis natoque penatibus et magnis.
                    </p>
                    <strong className="text-black font-semibold text-lg leading-26 tracking-[-0.9px] capitalize">john Smith</strong>
                    <FaQuoteLeft className="absolute top-[6px] left-[-30px] text-primary" />
                  </div>
                </div>
                <div className="arrow text-4xl text-black flex items-center">
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            <div className="w-2/1 h-[438px] relative">
              <div className="coverBox absolute bg-white size-[438px] top-[35%] left-[-61%] rotate-[75deg] z-0"></div>
              <div className="coverBox absolute bg-white size-[438px] top-[-35%] left-[-61%] rotate-[-75deg] z-0"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;

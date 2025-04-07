import React from "react";
import { TbCheck } from "react-icons/tb";

const About = () => {
  return (
    <>
      <section className="w-full bg-white ">
        <div className="bg-[url(../src/assets/img/demos/medical-2/others/bg-1.png)] bg-no-repeat w-full ">
          <div className="container flex">
            <div className="w-2/1 h-[655px] relative">
              <div className="coverBox absolute bg-white size-[655px] top-[-35%] right-[-90%] rotate-[75deg] z-0"></div>
              <div className="coverBox absolute bg-white size-[655px] top-[35%] right-[-90%] rotate-[-75deg] z-0"></div>
            </div>
            <div className="w-2/1 z-40 pt-12 pb-[68px]">
              <h6 className="text-gray">Who We Are</h6>
              <h2>More About Porto Medical</h2>
              <p className="text-gray text-sm font-semibold leading-26 mt-2 mb-5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ut tellus ante. Nam suscipit urna risus, fermentum commodo ipsum
                porta id.
              </p>
              <p className="para text-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                imperdiet libero id nisi euismod, sed porta est consectetur.
                Vestibulum auctor felis eget orci semper vestibulum.
                Pellentesque ultricies nibh gravida, accumsan libero luctus,
                molestie nunc.
              </p>

              {/* counter */}
              <div className="counter flex justify-between py-6 ">
                <div className="text-primary text-center flex flex-col">
                  <strong className="text-[38.5px] font-bold leading-[50px] ">
                    35+
                  </strong>
                  <span className="text-[16.8px] font-semibold tracking-[-1px] leading-5">
                    Business Year
                  </span>
                </div>
                <div className="text-primary text-center flex flex-col">
                  <strong className="text-[38.5px] font-bold leading-[50px] ">
                    50+
                  </strong>
                  <span className="text-[16.8px] font-semibold tracking-[-1px] leading-5">
                    Specialist Doctors
                  </span>
                </div>
                <div className="text-primary text-center flex flex-col">
                  <strong className="text-[38.5px] font-bold leading-[50px] ">
                    200+
                  </strong>
                  <span className="text-[16.8px] font-semibold tracking-[-1px] leading-5">
                    Modern Rooms
                  </span>
                </div>
              </div>
              {/* counter end */}

              <p className="para text-gray pb-6 ">
                Pellentesque ultricies nibh gravida, accumsan libero luctus,
                molestie nunc. In nibh ipsum, blandit id faucibus ac.
              </p>

              <div className="">
                <ul className="flex justify-between flex-wrap gap-y-2 ">
                  <li className="flex gap-3 w-1/2">
                    <div className="checkIcon flex items-center justify-center size-10 rounded-full border text-gray border-[#969696]">
                      <TbCheck className="text-sm " />
                    </div>
                    <p className="text-black text-sm font-bold leading-[35px] ">Pellentesque ultricies nibh</p>
                  </li>
                  <li className="flex gap-3 w-1/2">
                    <div className="checkIcon flex items-center justify-center size-10 rounded-full border text-gray border-[#969696]">
                      <TbCheck className="text-sm " />
                    </div>
                    <p className="text-black text-sm font-bold leading-[35px] ">Ultricies nibh pellen</p>
                  </li>
                  <li className="flex gap-3 w-1/2">
                    <div className="checkIcon flex items-center justify-center size-10 rounded-full border text-gray border-[#969696]">
                      <TbCheck className="text-sm " />
                    </div>
                    <p className="text-black text-sm font-bold leading-[35px] ">Ultricies nibh pellen</p>
                  </li>
                  <li className="flex gap-3 w-1/2">
                    <div className="checkIcon flex items-center justify-center size-10 rounded-full border text-gray border-[#969696]">
                      <TbCheck className="text-sm " />
                    </div>
                    <p className="text-black text-sm font-bold leading-[35px] ">Pellentesque ultricies nibh</p>
                  </li>
                  <li className="flex gap-3 w-1/2">
                    <div className="checkIcon flex items-center justify-center size-10 rounded-full border text-gray border-[#969696]">
                      <TbCheck className="text-sm " />
                    </div>
                    <p className="text-black text-sm font-bold leading-[35px] ">Pellentesque ultricies nibh</p>
                  </li>
                  <li className="flex gap-3 w-1/2">
                    <div className="checkIcon flex items-center justify-center size-10 rounded-full border text-gray border-[#969696]">
                      <TbCheck className="text-sm " />
                    </div>
                    <p className="text-black text-sm font-bold leading-[35px] ">Ultricies nibh pellen</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

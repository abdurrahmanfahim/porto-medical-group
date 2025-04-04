import React from "react";

import cardData from "../assets/cardData";
import Card from "./Card";


const Banner = () => {

  const {healthcare_centers} = cardData
  return (
    <>
      <section className="w-full h-container">
        <div className="bg-[url(../src/assets/img/demos/medical-2/slides/slide-medical-2-1.jpg)] h-[850px] flex items-center relative">
          <div className="container text-right pe-6">
            <h1 className="text-[38.5px] font-bold leading-[46px] tracking-[-1.925px] text-black mb-4">
              Urgent Care + Multi-Specialty <br />
              Medical Clinic Group
            </h1>
            <p
              className="uppercase text-lg tracking-[-0.945px] leading-[22px
] text-gray mb-6"
            >
              RELIABLE MEDICAL SERVICES LOCATED IN LOS ANGELES, CA
            </p>
            <div className="button">
              <a
                className="btnPrime inline-flex items-center bg-primary font-semibold text-white border border-transparent hover:border-primary text-sm px-[62px] py-5 "
                href="#"
              >
                gest started
              </a>
            </div>
            {/* card start */}
            <div className="cards container flex justify-between absolute -bottom-83 z-50">
            {healthcare_centers.map((card) => {
                return (
                  <Card
                    style={"bannerCard"}
                    img={card.img}
                    heading={card.name}
                    paragraph={card.description}
                    button={card.button}
                  />
                );
              })}
            </div>
          </div>
          {/* line start */}
          <div className="lineOne w-full h-[190px] absolute -bottom-55 bg-white skew-y-[-4.7deg]"></div>
          <div className="lineOne w-full h-[190px] absolute -bottom-55 bg-white skew-y-[4.7deg]"></div>
        </div>
      </section>
    </>
  );
};

export default Banner;

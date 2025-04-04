import React from "react";

const Card = ({
  style,
  img,
  heading,
  paragraph,
  button = "read more +",
  time,
  commentCount,
  name,
}) => {
  return (
    <>
      {style === "bannerCard" && (
        <div className="card shadow-2xl text-center bg-white p-[50px] w-[390px] h-[420px] ">
          <img className="mx-auto" src={img} alt="img" />
          <h4 className="text-black text-2xl  font-bold leading-[27px] tracking-[-1.2px] mt-[22px] mb-[26px]">
            {heading}
          </h4>
          <p className="leading-26 text-sm mb-6">{paragraph}</p>
          <a
            className="text-primary text-sm font-bold leading-26 uppercase cursor-pointer"
            href="#"
          >
            {button}
          </a>
        </div>
      )}

      {style === "servicesCard" && (
        
          <div className="card text-center bg-white py-12 px-8 w-[286px] h-[374px]  hover:-translate-y-4 duration-300 hover:shadow-2xl">
            <img className="mx-auto" src={img} alt="img" />
            <h4 className="text-black text-[21px] font-bold leading-[27px] tracking-[-1.2px] mt-12 mb-2">
              {heading}
            </h4>
            <p className="leading-26 text-gray text-sm mb-2">{paragraph}</p>
            <a
              className="text-primary text-sm font-semibold leading-26 uppercase cursor-pointer"
              href="#"
            >
              {button}
            </a>
          </div>
      )}

      {style === "blogCard" && (
        <div className="cardCover w-1/3 p-3">
          <div className="card p-6 flex flex-col gap-4 shadow-2xl">
            <img src={img} alt="blogImgOne" />

            <div className="infoLabel text-gray text-[11.2px] leading-26 uppercase flex gap-2">
              <time dateTime={time}>{time}</time>
              <span className="opacity-[0.3] inline-block text-gray">|</span>
              <p>{commentCount + "Comments"}</p>
              <span className="opacity-[0.3] inline-block text-gray">|</span>
              <p>{name}</p>
            </div>
            <h4 className="text-black text-[21px] font-bold leading-[27px] tracking-[-1.2px]">
              {heading}
            </h4>
            <p className="para">{paragraph}</p>
            <a
              className="text-primary text-sm font-semibold leading-26 uppercase cursor-pointer"
              href="#"
            >
              {button}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

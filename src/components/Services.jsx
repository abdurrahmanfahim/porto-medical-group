import React from "react";
import cardData from "../assets/cardData";
import Card from "./Card";

const Services = () => {
  const medical_departments = cardData.medical_departments;
  return (
    <>
      <section className="w-full pt-[72px] bg-[url(https://www.okler.net/previews/porto/12.1.0/img/demos/medical-2/bg/bg-3.png)] text-white relative z-50">
        <div className="container ">
          <div className="heading px-3">
            <h6>Departments</h6>
            <h2>Our Medical Services</h2>
            <p className="para text-white mt-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              imperdiet libero id nisi euismod, sed porta est consectetur.
              Vestibulum auctor felis eget orci semper.
            </p>
          </div>

          <div className="cards container flex flex-wrap gap-y-[30px] gap-x-6 justify-center mt-12 ">
            {
              medical_departments.map((card) => {
                return (
                  <Card
                    style={"servicesCard"}
                    img={card.img}
                    heading={card.name}
                    paragraph={card.description}
                    button={card.button}
                  />
                );
              })
            }
          </div>

          <div className="contact pb-[150px] text-center pt-15">
            <h6>Need a Speciallist?</h6>
            <h2 className="mb-6 mt-2">
              Get Better Now! Just Make An Appointment
            </h2>
            <a className="btnSecond py-4 px-13 inline-block" href="#">
              make a Appointment
            </a>
          </div>
        </div>

        {/* cover line */}
        <div className="w-full h-48 absolute -bottom-38 left-0 ">
          <div className="w-[50%] h-full absolute left-0 bg-white skew-y-[175.3deg]"></div>
          <div className="w-[50%] h-full absolute right-0 bg-white skew-y-[-175.3deg]"></div>
        </div>
      </section>
    </>
  );
};

export default Services;

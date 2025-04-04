import React from 'react'
import doctorOne from '../assets/img/demos/medical-2/doctors/doctor-1.png'
import doctorTwo from '../assets/img/demos/medical-2/doctors/doctor-2.png'
import doctorThree from '../assets/img/demos/medical-2/doctors/doctor-3.png'
import doctorFour from '../assets/img/demos/medical-2/doctors/doctor-4.png'
import doctorFive from '../assets/img/demos/medical-2/doctors/doctor-5.png'
import doctorSix from '../assets/img/demos/medical-2/doctors/doctor-6.png'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

const Specialists = () => {
  return (
    <>
      <section className="relative z-50 w-full bg-white pt-[70px]">
        <div className="container ">
          <h6>our Specialists</h6>
          <h2>meet our Doctors</h2>
          <p className='para text-gray mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper.</p>

          {/* slider start */}
          <div className="slider pt-5 flex justify-between px-3">
            <div className="arrow text-4xl text-gray flex items-center">
              <BsArrowLeftShort />
            </div>
            <div className="slides flex justify-between gap-2.5">
              {/* slide 1 */}
              <div className="slide flex flex-col text-center">
                <img src={doctorOne} alt="doctorOne" />
                <strong className='text-dark text-[16.8px] leading-26 capitalize mt-5 '>
                  john Smith
                </strong>
                <small className='text-gray text-[11.2px] uppercase'>
                  cardiology
                </small>
              </div>
              {/* slide 2 */}
              <div className="slide flex flex-col text-center">
                <img src={doctorTwo} alt="doctorOne" />
                <strong className='text-dark text-[16.8px] leading-26 capitalize mt-5 '>
                  john Smith
                </strong>
                <small className='text-gray text-[11.2px] uppercase'>
                  cardiology
                </small>
              </div>
              {/* slide 3 */}
              <div className="slide flex flex-col text-center">
                <img src={doctorThree} alt="doctorOne" />
                <strong className='text-dark text-[16.8px] leading-26 capitalize mt-5 '>
                  john Smith
                </strong>
                <small className='text-gray text-[11.2px] uppercase'>
                  cardiology
                </small>
              </div>
              {/* slide 4 */}
              <div className="slide flex flex-col text-center">
                <img src={doctorFour} alt="doctorOne" />
                <strong className='text-dark text-[16.8px] leading-26 capitalize mt-5 '>
                  john Smith
                </strong>
                <small className='text-gray text-[11.2px] uppercase'>
                  cardiology
                </small>
              </div>
              {/* slide 5 */}
              <div className="slide flex flex-col text-center">
                <img src={doctorFive} alt="doctorOne" />
                <strong className='text-dark text-[16.8px] leading-26 capitalize mt-5 '>
                  john Smith
                </strong>
                <small className='text-gray text-[11.2px] uppercase'>
                  cardiology
                </small>
              </div>
              {/* slide 6 */}
              <div className="slide flex flex-col text-center">
                <img src={doctorSix} alt="doctorOne" />
                <strong className='text-dark text-[16.8px] leading-26 capitalize mt-5 '>
                  john Smith
                </strong>
                <small className='text-gray text-[11.2px] uppercase'>
                  cardiology
                </small>
              </div>
              
            </div>
            <div className="arrow text-4xl text-black flex items-center">
              <BsArrowRightShort />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Specialists
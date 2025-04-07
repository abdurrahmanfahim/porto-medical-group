import React from 'react'
import signature from '../assets/img/demos/medical-2/others/signature.png'

const Standard = () => {
  return (
    <>
      <section className='container pt-5 pb-12'>
        <div className="flex">
            <div className="w-1/3 ">
              <h3 className='text-black text-[25.2px] font-semibold leading-26 tracking-[-1.26px] capitalize '>
              The Highest Standard Of Health Care Medical Clinic
              </h3>
              <p className='text-gray text-sm leading-26 uppercase py-4'>John Doe - Main Doctor</p>
              <img src={signature} alt="" />
            </div>
            <div className="w-2/3 z-40">
              <p className='para text-gray mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.</p>
              <a className="text-primary text-sm font-bold leading-26 uppercase cursor-pointer" href="#">read more +</a>
            </div>
        </div>
      </section>
    </>
  )
}

export default Standard
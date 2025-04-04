import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Standard from '../components/Standard'
import About from '../components/About'
import Specialists from '../components/Specialists'
import Testimonial from '../components/Testimonial'
import Services from '../components/Services'
import Blog from '../components/Blog'
import Brand from '../components/Brand'
import Footer from '../components/Footer'

const IndexPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Standard />
      <About />
      <Specialists />
      <Testimonial />
      <Services />
      <Blog />
      <Brand />
      <Footer />
    </>
  )
}

export default IndexPage
import React from 'react'
import About from './About'
import Slider from './Slider'
import Services from './Services'
import Testimonial from './Testimonial'
import Products from './Products'
import Blog from './Blog'

export default function Home() {
  return (
    <>
    <Slider/>
    <About/>
    <Services/>
    <Testimonial/>
    <Products/>
    <Blog/>
    </>
  )
}

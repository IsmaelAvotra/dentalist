import React from 'react'
import { testimonials } from '../../data'
import TestiSwiper from './TestiSwiper'
import './Testimonials.css'

const Testimonials = () => {
  const { titleSpan, title, text, testimonial } = testimonials
  return (
    <div className='testimonials'>
      <span>{titleSpan}</span>
      <div className='title'>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className='testi-content'>
        <TestiSwiper testimonial={testimonial} />
      </div>
    </div>
  )
}

export default Testimonials

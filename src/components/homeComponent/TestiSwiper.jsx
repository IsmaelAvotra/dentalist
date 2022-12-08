import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './TestiSwiper.css'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai/index'

const TestiSwiper = ({ testimonial }) => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 2,
        },
        1025: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      }}
    >
      {testimonial.map(({ name, image, comment, id }) => {
        return (
          <SwiperSlide className='slider' key={id}>
            <div className='testimonial'>
              <div className='image'>
                <img src={image} />
              </div>
              <h3>{name}</h3>
              <p>{comment}</p>
              <div className='stars'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default TestiSwiper

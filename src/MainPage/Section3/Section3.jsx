import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import './Section3.css'
import forcardimg from '../../../public/Group 1 (34).png'

const Section3 = () => {
  const swiperRef = useRef(null)

  return (
    <section className="section-three">
      <div className="three-all">
        <div className="nazv">
          <p>New Our <br /> <span>products</span></p>
          <p>Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!  Starbucks coffee and don't forget about the discount!</p>
        </div>

        <div style={{display: 'flex', gap: '100px'}}>
          <div className="slider-container" style={{overflow: 'hidden',width: '63vw', left: '-30vw', position: 'relative'}}>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation]}
              slidesPerView={3}
              loop={true}
              navigation={false}
              spaceBetween={50}
              direction="horizontal"
              style={{ width: '60vw', rotate: '180deg'}}
            >
              {[...Array(5)].map((_, i) => (
                <SwiperSlide key={i}>
                  <div className="cofi-card" style={{rotate: '180deg'}}>
                    <div><img src={forcardimg} alt="Cappuccino" /></div>
                    <p style={{ fontSize: "32px" }}>Cappuccino</p>
                    <p style={{ fontSize: "22px" }}>Our cafe will serve you quickly</p>
                    <div className="fortxtCard">
                      <p style={{ fontSize: "32px" }}>7,45$</p>
                      <p style={{ color: "#D9D9D9" }}>330 ml</p>
                    </div>
                    <button >Buy Product</button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button
              onClick={() => swiperRef.current?.slideNext()}
              className='swiper-button-next'
          >
            кнопка вперед
          </button>
        </div>
      </div>
    </section>
  )
}

export default Section3
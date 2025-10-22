import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import './Section3.css'
import forcardimg from '../../../public/Group 1 (34).png'
import arrow_btn from '../../../public/Arrow 1.png'
const Section3 = () => {
  const swiperRef = useRef(null)
  const basePrice = "7.5";
  const cardsCount = 5;
  const handleClick = (index, value) => {
    setDiscounts((prev) => {
      const newDiscounts = [...prev];
      newDiscounts[index] = newDiscounts[index] === value ? 0 : value;
      return newDiscounts;
    });
  };
  const [discounts, setDiscounts] = useState(Array(cardsCount).fill(0));
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
        {[...Array(cardsCount)].map((_, i) => {
        const discount = discounts[i];
        const discountedPrice = basePrice * (1 - discount / 100);
        return (
          <SwiperSlide key={i}>
            <div className="cofi-card" style={{ rotate: "180deg" }}>
              <div><img src={forcardimg} alt="Cappuccino" /></div>
              <p style={{ fontSize: "32px" }}>Cappuccino</p>
              <p style={{ fontSize: "22px" }}>Our cafe will serve you quickly</p>
              <div className="fortxtCard">
                <p style={{ fontSize: "32px" }}>{discountedPrice.toFixed(2)}$</p>
                <p style={{ color: "#D9D9D9" }}>330 ml</p>
              </div>
              <button className="forBtnBuy">Buy Product</button>
              <div>
                <button
                  style={{
                    cursor: "pointer",
                    backgroundColor: discount === 30 ? "green" : "lightgray",
                    color: discount === 30 ? "white" : "black",
                    border: "none",
                    marginRight: 10,
                  }}
                  onClick={() => handleClick(i, 30)}
                >
                  30%
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    backgroundColor: discount === 50 ? "green" : "lightgray",
                    color: discount === 50 ? "white" : "black",
                    border: "none",
                  }}
                  onClick={() => handleClick(i, 50)}
                >
                  50%
                </button>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
            </Swiper>
          </div>
          <button
              onClick={() => swiperRef.current?.slideNext()}
              className='swiper-button-next'
          >
            <div><img src={arrow_btn} alt="" /></div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Section3
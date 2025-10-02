import React from 'react'
import './Section4.css'
import imgfour1 from '../../../public/alex-haney-CAhjZmVk5H4-unsplash 1 (2).png'
import imgfour2 from '../../../public/Rectangle 9 (1).png'
import imgfour3 from '../../../public/Rectangle 10 (4).png'
import imgfour4 from '../../../public/Rectangle 11 (4).png'
import imgfour5 from '../../../public/Rectangle 12 (2).png'
const Section4 = () => {
  return (
    <div className='all-sec-four'>
      <section className="section-four">
        <div className="four-all">
            <div className="for-nazv">
                <p>Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market</p>
                <p>Our New <br /> <span>Events</span></p>
            </div>
            <div className="container">
                <div className="card-four">
                    <img src={imgfour1} alt="" />
                    <figcaption>
                    <p>TWO COFFEE FOR 1 PRICE</p>
                    <button>More</button>
                    </figcaption>

                </div>
                <div className="card-four">
                  <img src={imgfour2} alt="" />
                  <figcaption>
                    <p>KITCHEN TOUR</p>
                    <button>More</button>
                  </figcaption>

                </div>
                <div className="card-four">
                  <img src={imgfour3} alt="" />
                  <figcaption>
                    <p>FREE COFFEE FOR 3 COFFEE</p>
                    <button>More</button>
                  </figcaption>
                    
                </div>
                <div className="card-four">
                  <img src={imgfour4} alt="" />
                  <figcaption>
                    <p>OUR INSTAGRAM</p>
                    <button>More</button>
                  </figcaption>
                    
                </div>
                <div className="card-four">
                  <img src={imgfour5} alt="" />
                  <figcaption>
                    <p>WHERE ARE YOU CHOOSE US?</p>
                    <button>More</button> 
                  </figcaption>
                    
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Section4

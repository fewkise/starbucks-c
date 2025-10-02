import React from 'react'
import './Section5.css'
import instlogo from '../../../public/Mask group.png'
import phonelogo from '../../../public/Group 88.png'
import imgfive from '../../../public/Group 51.png'
const Section5 = () => {
  return (
    <div className='section-five-all'>
      <section className="section-five">
        <div className="five-all">
            <div className="five-left">
                <p>Our <br /> <span>Contacts</span> </p>
                <p>Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!</p>
                <ul>
                    <li><div><img src={instlogo} alt="" /></div><p id='nya'>@supercoffee</p></li>
                    <li><div><img src={phonelogo} alt="" /></div><p id='nya'>+7-999-999-99-99</p></li>
                </ul>
            </div>
            <div className="five-right">
                <img src={imgfive} alt="" />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Section5

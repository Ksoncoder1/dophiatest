import React from 'react';
import './Sdgs.css';
import { sdg1, sdg2, sdg3, sdg4, sdg5, sdg6, sdg7 } from '../../assets';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Sdgs = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='SdgsContainer Section__Padding'>
        <h1 className='SdgsHeading'>Alignment with Development Goals</h1>
        <p className='SdgsText'>Dophia Agroforestry's programs and strategy contribute to the following 7 of the 17 SDGs</p>
        <div className='SdgsImgContainer'>
            <Slider {...settings}>
                <div className="SdgsImg">
                    <img src={sdg1} alt='sdg1' />
                </div>
                <div className="SdgsImg">
                    <img src={sdg2} alt='sdg2' />
                </div>
                <div className="SdgsImg">
                    <img src={sdg3} alt='sdg3' />
                </div>
                <div className="SdgsImg">
                    <img src={sdg4} alt='sdg4' />
                </div>
                <div className="SdgsImg">
                    <img src={sdg5} alt='sdg5' />
                </div>
                <div className="SdgsImg">
                    <img src={sdg6} alt='sdg6' />
                </div>
                <div className="SdgsImg">
                    <img src={sdg7} alt='sdg7' />
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default Sdgs
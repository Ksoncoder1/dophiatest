import React from 'react';
import { partnerlogo1, partnerlogo2, partnerlogo3, partnerlogo4 } from '../../assets';
import './Partners.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Partners = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
    <section className=" Partners Section__Padding">
        <h1 className='PartnersTitle'>Our Partners</h1>
        <div className='underline'></div>
        <div className='PartnersContainer'>
            <Slider {...settings}>
                <div className='ImgCont'>
                    <img src={partnerlogo1} alt='partner1' />
                </div>
                <div className='ImgCont'>
                    <img src={partnerlogo2} alt='partner2' />
                </div>
                <div className='ImgCont'>
                    <img src={partnerlogo3} alt='partner3' />
                </div>
                <div className='ImgCont'>
                    <img src={partnerlogo4} alt='partner4' />
                </div>
            </Slider>
        </div>
    </section>
  )
}

export default Partners
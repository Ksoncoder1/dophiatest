import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { seedling, img1, img2, img3 } from '../../assets';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ModelCards from '../ModelCards/ModelCards';


const Myswiper = () => {
  return (
    <Swiper
        pagination={{el:'.swiper-pagination', clickable:true}}
        navigation={{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
            clickable:true
        }}
        modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}

        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
        }}
        className='swiper_container'
    >
        <SwiperSlide>
        <div className='ModelCards'>
            <div className='CardContainer'>
                <div className='Card'>
                    <div className='CardImg'>
                        <img src={seedling} alt='seedling' />
                    </div>
                    <div className='CardBody'>
                        <h2 className='CardTitle'>Quality Assessment</h2>
                        <p className='CardText'>We source & grow high-quality seedlings</p>
                    </div>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ModelCards'>
            <div className='CardContainer'>
                <div className='Card'>
                    <div className='CardImg'>
                        <img src={img1} alt='seedling' />
                    </div>
                    <div className='CardBody'>
                        <h2 className='CardTitle'>Quality Assessment</h2>
                        <p className='CardText'>We source & grow high-quality seedlings</p>
                    </div>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ModelCards'>
            <div className='CardContainer'>
                <div className='Card'>
                    <div className='CardImg'>
                        <img src={img2} alt='seedling' />
                    </div>
                    <div className='CardBody'>
                        <h2 className='CardTitle'>Quality Assessment</h2>
                        <p className='CardText'>We source & grow high-quality seedlings</p>
                    </div>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ModelCards'>
            <div className='CardContainer'>
                <div className='Card'>
                    <div className='CardImg'>
                        <img src={img3} alt='seedling' />
                    </div>
                    <div className='CardBody'>
                        <h2 className='CardTitle'>Quality Assessment</h2>
                        <p className='CardText'>We source & grow high-quality seedlings</p>
                    </div>
                </div>
            </div>
        </div>
        </SwiperSlide>

        <div className='slider-controler'>
            <div className='swiper-button-prev slider-arrow'>
                <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className='swiper-button-next slider-arrow'>
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className='swiper-pagination'></div>
        </div>
    </Swiper>
  )
}

export default Myswiper
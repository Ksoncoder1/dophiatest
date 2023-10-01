import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {img1, img2, img3} from '../../assets';
import './CarouselPage.css';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const CarouselPage = () => {
  return (
    <div>
        <Carousel className='CustomCarou'>
            <Carousel.Item>
                <div className='image-container'>
                    <img className='img' src={img1} alt="..."/>
                    <div className='overlay'></div>
                </div>
                <Carousel.Caption>
                    <div className='Hr'/>
                    <h2 className='SlideText animate__animated animate__zoomIn'>Changing Perceptions of Agroforestry</h2>
                    <div className='Stats animate__animated animate__fadeInLeft'>
                        <span>
                            <CountUp end={100000} />
                            <span>+</span>
                        </span>
                        <span className='SecondaryText'>Planted Trees</span>
                    </div>
                    <div className='Btns animate__animated animate__zoomIn'>
                        <button className='CustomButton'><Link to='/about'>About Us</Link></button>
                        <button className='CustomButton' onClick={() => window.location = 'mailto:dophiaagroforestry@gmail.com'}>Contact</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='image-container'>
                    <img className='img' src={img2} alt="..."/>
                    <div className='overlay'></div>
                </div>
                <Carousel.Caption>
                    <div className='Hr'/>
                    <h2 className='SlideText animate__animated animate__slideInDown'>Working with Hundreds of Smallholder Farmers</h2>
                    <div className='Stats animate__animated animate__fadeInUp'>
                        <span>
                            <CountUp end={400} />
                            <span>+ Smallholder Farmers</span>
                        </span>
                        <span className='SecondaryText'>60% of whom are Women</span>
                    </div>
                    <div className='Btns animate__animated animate__zoomIn'>
                        <button className='CustomButton'><Link to='/about'>About Us</Link></button>
                        <button className='CustomButton' onClick={() => window.location = 'mailto:dophiaagroforestry@gmail.com'}>Contact</button>
                    </div>
                </Carousel.Caption>
                </Carousel.Item>
            <Carousel.Item>
                <div className='image-container'>
                    <img className='img' src={img3} alt="..."/>
                    <div className='overlay'></div>
                </div>
                <Carousel.Caption>
                    <div className='Hr'/>
                    <h2 className='SlideText animate__animated animate__fadeInLeft'>Link Between Environment and Economy</h2>
                    <div className='Stats animate__animated animate__fadeInRight'>
                        <span>
                            <CountUp end={100000} />
                            <span>+</span>
                        </span>
                        <span className='SecondaryText'>Seedlings Every Year</span>
                    </div>
                    <div className='Btns animate__animated animate__fadeInUp'>
                        <button className='CustomButton'><Link to='/about'>About Us</Link></button>
                        <button className='CustomButton' onClick={() => window.location = 'mailto:dophiaagroforestry@gmail.com'}>Contact</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default CarouselPage
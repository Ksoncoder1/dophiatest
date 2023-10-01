import React from 'react';
import './Testimonials.css';
import { male, female } from '../../assets';

const Testimonials = () => {
  return (
    <div className='TestimonialContainer Section__Padding'>
        <h1 className='TesmonialHeading'>Testimonials</h1>
        <div className='underline'></div>
        <div className='TestimonyCards'>
            <div className='TestimonyCard'>
                <div className='TestimonyCardContent'>
                    <p className='TestimonialTxt'>
                        When Japheth heard about this project that would give farmers tree
                        seedlings to help improve their economic situation, he was very excited.
                        He had previously participated in a similar program by the International
                        Center for Research in Agroforestry (ICRAF) and has seen the benefits that
                        trees for the soil, water, and animals. On this farm, he grows a variety of trees
                        including fruit trees. Japheth is one of the model farmers in his area and is a
                        champion for agroforestry and sustainable farming practices. Since he started working
                        with Dophia as a partner farmer, he has had an opportunity to share his 
                        experience in agroforestry and the benefits it has had on his crops and soil.
                        For Japheth, this is an opportunity to create awareness around multipurpose
                        trees such as lucerne, grevillea, and moringa.
                    </p>
                    <h3 className='TestimonialName'>Japheth Odhiambo Opiyo, 55</h3>
                    <p className='TestimonialLocation'>Otondo, Kawich village</p>
                </div>
                <div className='TestimonyCardImg'>
                    <img src={male} alt='maleimg' />
                </div>
            </div>
            <div className='TestimonyCard'>
                <div className='TestimonyCardContent'>
                    <p className='TestimonialTxt'>
                        For Angeline, her participation in the project has been an opportunity to
                        learn more about different trees and to realize the value of trees. Her major
                        role, as a village elder, has been to mobilize people to attend trainings.
                        She has also started to take an active role in educating people on the
                        benefits of trees. Since she started taking part in the project, she has planted
                        moringa, lucerne, and grevillea seedlings. She sees this as an investment, for
                        her family, and for the environment. She's particularly excited about moringa
                        and the health benefits that she will be able to derive from its leaves add
                        seeds. Through her work, more of her peers are becoming more receptive to 
                        different types of trees.
                    </p>
                    <h3 className='TestimonialName'>Angelina Asako, 48</h3>
                    <p className='TestimonialLocation'>Nyamwaga, Wang' Chieng' Sub-location, Rongo Pala Location</p>
                </div>
                <div className='TestimonyCardImg'>
                    <img src={female} alt='femaleimg' />
                </div>
            </div>
            {/* <div className='TestimonyCard'>
                <div className='TestimonyCardTxt'>
                    <p className='TestimonialTxt'>
                        For Angeline, her participation in the project has been an opportunity to
                        learn more about different trees and to realize the value of trees. Her major
                        role, as a village elder, has been to mobilize people to attend trainings.
                        She has also started to take an active role in educating people on the
                        benefits of trees. Since she started taking part in the project, she has planted
                        moringa, lucerne, and grevillea seedlings. She sees this as an investment, for
                        her family, and for the environment. She's particularly excited about moringa
                        and the health benefits that she will be able to derive from its leaves add
                        seeds. Through her work, more of her peers are becoming more receptive to 
                        different types of trees.
                    </p>
                    <h3 className='TestimonialName'>Angelina Asako, 48</h3>
                    <p className='TestimonialLocation'>Nyamwaga, Wang' Chieng' Sub-location, Rongo Pala Location</p>
                </div>
                <div className='TestimonyCardImg'>
                    <img src={female} alt='femaleimg' />
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Testimonials
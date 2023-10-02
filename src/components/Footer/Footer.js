import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import ContactCard from '../ContactCard/ContactCard';
import {AiOutlineMail} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {FaLocationDot} from 'react-icons/fa6';

const Footer = () => {
    const facebookUrl = 'https://www.facebook.com/profile.php?id=100091937321158&mibextid=ZbWKwL';
  return (
    <div className='footer'>
        <div className='sb__footer section__padding'>
            <div className='sb__footer-links'>
                <div className='sb__footer-links-div'>
                    <h4>Get in touch</h4>
                    <p><AiOutlineMail size={35} className='mailicon' /> dophiaagroforestry@gmail.com</p>
                    
                    <p><FaLocationDot size={35} className='mailicon' /> P.O. Box 137-40223 Kadongo, Kenya</p>
                    <p>
                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                            <p><BsFacebook size={35} className='fbicon' /> Dophia Agroforestry</p>
                        </a>
                    </p>
                </div>
                <div className='sb__footer-links-div'>
                    <div className='CardDiv'>
                        <ContactCard />
                    </div>
                </div>
            </div>

            <hr></hr>
            <div className='sb__footer-below'>
                <div className='sb__footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} Dophia Agroforestry. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
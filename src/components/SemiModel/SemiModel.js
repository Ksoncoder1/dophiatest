import React from 'react';
import { bg, seedling, community, img2, img3, collectdata } from '../../assets';
import './SemiModel.css';
import ModelCards from '../ModelCards/ModelCards';
import AccordionModel from '../AccordionModel/AccordionModel';


const SemiModel = () => {
  return (
    <div className='SemiModel Section__Padding'>
      {/* style={{backgroundImage: `url(${bg})`}} */}
        <div className='SemiContent'>
            <h1 className='SemiHeader'> Dophia Agroforestry Model</h1>
            <div className='underline'></div>
        </div>
        <div className='AcContainer'>
          <AccordionModel />
        </div>
        {/* <div className='MCardsContainer'>  
            <div className='MCard'>
              <div className='imgBx'>
                <img src={seedling} alt='seedling' />
              </div>
              <div className='MCardContent'>
                <h2>Quality Seedlings</h2>
                <p>We source and grow high quality seedlings</p>
              </div>
            </div>
            <div className='MCard'>
              <div className='imgBx'>
                <img src={community} alt='community' />
              </div>
              <div className='MCardContent'>
                <h2><span className='HStyle'>Partnerships Building</span></h2>
                <p>We work with community of empowered and motivated partner farmers</p>
              </div>
            </div>
            <div className='MCard'>
              <div className='imgBx'>
                <img src={img3} alt='learning' />
              </div>
              <div className='MCardContent'>
                <h2>Learning</h2>
                <p>We put continuous learning and Improvement at the core of our operations. We share knowledge and collaborate</p>
              </div>
            </div>
            <div className='MCard'>
              <div className='imgBx'>
                <img src={collectdata} alt='collectdata' />
              </div>
              <div className='MCardContent'>
                <h2>Impact Assessment</h2>
                <p>We proactively collect data, distill insights, and are data-driven in our operations decisions</p>
              </div>
            </div>
        </div> */}
    </div>
  )
}

export default SemiModel
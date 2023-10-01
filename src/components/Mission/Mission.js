import React from 'react';
import './Mission.css';
import { visionimg, missionimg } from '../../assets';
import { Link } from 'react-router-dom';

const Mission = () => {
  return (
    <div className='Mission Section__Padding'>
        <div className='MiHeading'>
            <h1>Our Mission & Vision</h1>
        </div>
        
        <div className='MvCards'>
            <div className='CadContainer'>
                <div className='Cad'>
                    <div className='CadFront'>
                        <img src={visionimg} alt='vision' />
                        
                    </div>
                    <div className='CadBack'>
                        <h2 className='CadH'>Vision</h2>
                        <p className='CadT'>
                            To champion socioeconomic empowerment of smallholder farmers through sustainable
                            agroforestry practices that restore soils, increase profit from agribusiness and
                            improve livelihoods.
                        </p>
                    </div>
                </div>
            </div>
            <div className='CadContainer'>
                <div className='Cad'>
                    <div className='CadFront'>
                        <img src={missionimg} alt='vision' />
                    </div>
                    <div className='CadBack'>
                        <h2 className='CadH'>Vision</h2>
                        <p className='CadT'>
                            To be a leading farmer-centric organization in the sustainable production, 
                            management and training of our farmers in the benefits of integrated agroforestry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='VisionBtnDiv'>
            <button className='ReadBtn'>
                <Link to='/about' style={{color: '#5a8b4b'}}>Read More</Link>
            </button>
            {/* <Link to='/about' style={{color: '#5a8b4b'}}>Read More</Link> */}
        </div>
    </div>
  )
}

export default Mission
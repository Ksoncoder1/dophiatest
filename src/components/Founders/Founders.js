import React from 'react';
import { benter, benter2, carren, foundersbg, hoffman, hoffman2, phenny, phenny2 } from '../../assets';
import './Founders.css';

const Founders = () => {
  return (
    <div className='Founders Section__Padding'>
        
        <div className='container'>
            <h1>Our Founders</h1>
            <div className='underline'></div>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='img1'>
                            <img src={foundersbg} alt="foundersimg" />
                        </div>
                        <div className='img2'>
                            <img src={phenny2} alt="phennyimg" />
                        </div>
                        <div className='main'>
                            <h2>Phenny Omondi</h2>
                            <p>Partnerships Lead</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='img1'>
                            <img src={foundersbg} alt="foundersimg" />
                        </div>
                        <div className='img2'>
                            <img src={hoffman2} alt="hoffmanimg" />
                        </div>
                        <div className='main'>
                            <h2>Hoffman Owage</h2>
                            <p>Program Manager</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='img1'>
                            <img src={foundersbg} alt="foundersimg" />
                        </div>
                        <div className='img2'>
                            <img src={carren} alt="carrenimg" />
                        </div>
                        <div className='main'>
                            <h2>Carren Atieno</h2>
                            <p>Program Coordinator</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='img1'>
                            <img src={foundersbg} alt="foundersimg" />
                        </div>
                        <div className='img2'>
                            <img src={benter2} alt="benterimg" />
                        </div>
                        <div className='main'>
                            <h2>Benter Awuor</h2>
                            <p>Operations & Finance Lead</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Founders
import React from 'react'
import { seedling } from '../../assets';
import './ModelCards.css';

const ModelCards = ({img, headtext, text}) => {
  return (
    <div className='ModelCards'>
        <div className='CardContainer'>
            <div className='Card'>
                <div className='CardImg'>
                    <img src={img} alt='seedling' />
                </div>
                <div className='CardBody'>
                    <h2 className='CardTitle'>{headtext}</h2>
                    <p className='CardText'>{text}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModelCards
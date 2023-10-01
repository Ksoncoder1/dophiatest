import React from 'react';
import { Link } from 'react-router-dom';
import './DophiaAgro.css'

const DophiaAgro = () => {
  return (
    <div className=' Dophia Section__Padding'>
      <h1 className='DophiaHeader'>Dophia Agroforestry</h1>
      <div className='underline'></div>
      <p className='DophiaText'>Dophia Agroforestry is a community based organization working with a network of 
          over 400 female partner farmers, youth groups, churches and schools in planting high-value 
          multipurpose agroforestry tree seedlings. Over the past 2 years. . .
      </p>
      <button className='DophiaBtn'>
        <Link to='/about' style={{color: '#5a8b4b'}}>Read More</Link>
      </button>
    </div>
  )
}

export default DophiaAgro
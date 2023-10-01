import React from 'react';
import NavbarUse from '../../components/NavbarUse/NavbarUse';
import MiniAbout from '../../components/MiniAbout/MiniAbout';
import Mission from '../../components/Mission/Mission';
import Founders from '../../components/Founders/Founders';
import SemiModel from '../../components/SemiModel/SemiModel';
import Footer from '../../components/Footer/Footer';
import './About.css';

const About = () => {
  return (
    <div>
      <NavbarUse />
      <MiniAbout />
      <Mission />
      <SemiModel />
      <Founders />
      <Footer />
    </div>
  )
}

export default About
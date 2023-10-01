import React from 'react'

import DophiaAgro from '../DophiaAgro/DophiaAgro';
import Mission from '../../components/Mission/Mission';
import SemiModel from '../../components/SemiModel/SemiModel';
import NavbarPage from '../NavbarPage/NavbarPage';
import CarouselPage from '../Carousel/CarouselPage';
import Founders from '../../components/Founders/Founders';
import Partners from '../../components/Partners/Partners';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <NavbarPage />
      <CarouselPage />
      <DophiaAgro />
      <Mission />
      <SemiModel />
      <Founders />
      <Partners />
      <Footer />
    </div>
  )
}

export default Home
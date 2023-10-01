import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/treelogo.jpeg';
import { Link } from 'react-router-dom';
import { navimg } from '../../assets';

import './NavbarUse.css';




const NavbarUse = () => {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='NavUse'>
      <div className='BgImg' style={{backgroundImage: `url(${navimg})`}}></div>
      <div>
        <Navbar expand="lg" fixed='top' className={`CustomNavUse ${scrolling ? 'bg-scroll' : ''}`}>
            <Container>
                <div className='Logo'>
                    <div className='imageContainer'>
                        <img src={logo} alt='logo'/>
                    </div>
                    <div className='logotextDiv'>
                        <p><span className='logotext'>Dophia Agroforestry</span></p>
                    </div>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className=" CustomNav">
                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link><Link to='/about'>About Us</Link></Nav.Link>
                    <Nav.Link><Link to='/goals'>Alignment with SDGs</Link></Nav.Link>
                    <Nav.Link><Link to='/achievements'>Key Milestones</Link></Nav.Link>
                    <Nav.Link><Link to='/gallery'>Gallery</Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default NavbarUse
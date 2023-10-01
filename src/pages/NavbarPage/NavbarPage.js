import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/treelogo.jpeg';
import { Link } from 'react-router-dom';
import './NavbarPage.css';

const NavbarPage = () => {
    const [visible, setVisible] = useState(true);
    const [isNavbarExpanded, setNavbarExpanded] = useState(false);

    useEffect(() => {
        // Add a scroll event listener
        window.addEventListener('scroll', handleScroll);
        return () => {
          // Remove the event listener when the component unmounts
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 50) {
          setVisible(false);
        } else {
          setVisible(true);
        }
    };

  // const toggleNavbar = () => {
  //   setExpanded(!expanded);
  // };
  return (
    <div>
        <Navbar 
          expand="lg" 
          fixed='top' 
          expanded={isNavbarExpanded}
          onToggle={() => setNavbarExpanded(!isNavbarExpanded)} 
          className={`CustomNav expanded ? 'isNavbarExpanded' : ''  ${visible ? 'VisibleNav' : 'HiddenNav'}`}
        >
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
                <Navbar.Collapse className='custom-collapse' id="basic-navbar-nav">
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
  )
}

export default NavbarPage
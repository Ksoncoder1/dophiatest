import React, { useState } from 'react';
import {FaPersonChalkboard} from 'react-icons/fa6';
import {FaPeopleCarryBox} from 'react-icons/fa6'
import {GiSeedling} from 'react-icons/gi';
import {FaHandshakeSimple} from 'react-icons/fa6';
import {FaUserEdit} from 'react-icons/fa';
import './AccordionModel.css';
import { 
    Accordion, 
    AccordionItem,
    AccordionItemHeading, 
    AccordionItemButton, 
    AccordionItemPanel,
    AccordionItemState 
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md';

const AccordionModel = () => {
    const [className, setClassName] = useState(null);
  return (
    <Accordion
        className='accordion'
        allowMultipleExpanded={false}
        preExpanded={[0]}
    >
        <AccordionItem className={`accordionItem ${className}`}>
            <AccordionItemHeading>
                <AccordionItemButton className='accordionButton'>
                    {/* <AccordionItemState>
                        {({ expanded }) => 
                            expanded
                                ? setClassName('expanded')
                                : setClassName('collapsed')
                        }
                    </AccordionItemState> */}
                    <div className='icon'><GiSeedling size={60} color='#5a8b4b' /></div>
                    <span className='HeadTxt'>Quality Seedlings</span>
                    <div className='icon DropDIncon'><MdOutlineArrowDropDown size={25} color='#5a8b4b' /></div>
                </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel className='accordionPanel'>
                <p className='PTxt'>
                    We source and grow high quality seedlings
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className={`accordionItem ${className}`}>
            <AccordionItemHeading>
                <AccordionItemButton className='accordionButton'>
                    {/* <AccordionItemState>
                        {({ expanded }) => 
                            expanded
                                ? setClassName('expanded')
                                : setClassName('collapsed')
                        }
                    </AccordionItemState> */}
                    <div className='icon'><FaPeopleCarryBox size={60} color='#5a8b4b' /></div>
                    <span className='HeadTxt'>Partnerships Building</span>
                    <div className='icon DropDIncon'><MdOutlineArrowDropDown size={25} color='#5a8b4b' /></div>
                </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel className='accordionPanel'>
                <p className='PTxt'>
                    We work with community of empowered and motivated partner farmers
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className={`accordionItem ${className}`}>
            <AccordionItemHeading>
                <AccordionItemButton className='accordionButton'>
                    {/* <AccordionItemState>
                        {({ expanded }) => 
                            expanded
                                ? setClassName('expanded')
                                : setClassName('collapsed')
                        }
                    </AccordionItemState> */}
                    <div className='icon'><FaHandshakeSimple size={60} color='#5a8b4b' /></div>
                    <span className='HeadTxt'>Knowledge Sharing & Collaborating</span>
                    <div className='icon DropDIncon'><MdOutlineArrowDropDown size={25} color='#5a8b4b' /></div>
                </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel className='accordionPanel'>
                <p className='PTxt'>
                We put continuous learning and Improvement
                 at the core of our operations. We share knowledge and collaborate.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className={`accordionItem ${className}`}>
            <AccordionItemHeading>
                <AccordionItemButton className='accordionButton'>
                    {/* <AccordionItemState>
                        {({ expanded }) => 
                            expanded
                                ? setClassName('expanded')
                                : setClassName('collapsed')
                        }
                    </AccordionItemState> */}
                    <div className='icon'><FaUserEdit size={60} color='#5a8b4b' /></div>
                    <span className='HeadTxt'>Impact Assessment</span>
                    <div className='icon DropDIncon'><MdOutlineArrowDropDown size={25} color='#5a8b4b' /></div>
                </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel className='accordionPanel'>
                <p className='PTxt'>
                We proactively collect data, distill insights, and are data-driven in our operations decisions
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        
        
        

    </Accordion>
  )
}

export default AccordionModel
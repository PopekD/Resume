import React from 'react'
import './Header.css'
import { LayoutGroup, motion } from "framer-motion"
import Link from '@mui/material/Link';
import * as Scroll from 'react-scroll';


const Header: React.FC = () => {
  
    return (
      <div className="navBar">
        <div className='Menu_links'>
        
          <Scroll.Link activeClass='active' 
            to="about" 
            spy={true}
            smooth={true}  
            duration={1000} 
            href=''  className='Link' style={{color: 'rgb(192, 195, 192)'}}>About Me</Scroll.Link>
        <Scroll.Link 
            to="projects"
            spy={true}
            smooth={true}
            duration={1000} 
            href=''  className='Link' style={{color: 'rgb(192, 195, 192)'}}>Projects </Scroll.Link>
        </div>
      </div>
    );
  }
  
  export default Header;
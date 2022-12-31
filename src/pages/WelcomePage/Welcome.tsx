
import * as React from 'react';
import VideoBg from '../../assets/videoBg.mp4' 
import {motion} from "framer-motion"
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// import Image from '../assets/me.jpg'
import './Welcome.css'


const WelcomeDivVariant = {
  visible: {opacity: 1, scale: 1, rotate: 360,},
  hidden: {opacity: 0, scale: 0},
}
const transitionValues = {
  duration: 0.9,
  repeat: Infinity,
  repeatDelay: 3,
};
const ballStyle = {
  width: "0.5rem",
  height: "0.5rem",
  backgroundColor: "rgb(192, 195, 192)",
  borderRadius: "1rem",
  display: "grid",
  alignSelf: "end",
};
const Welcome: React.FC = () => {

    return (
      <div className='welcome'>
        <motion.div 
        className="content"
        variants={WelcomeDivVariant}
        initial="hidden"
        animate="visible"
        transition={{duration: 1.3}}
        > 
           <h1 style={{display: "flex"}}>Dawid<motion.text
              transition={{
                  y: transitionValues,
                  width: transitionValues,
                  height: transitionValues
              }}
              style={ballStyle}
              animate={{
                y: ["-0.7rem","-2rem", "-0.7rem"],
              }}
           />Popek</h1>
           <p>Your future Employee</p>
           <div className="buttons">
            <Button variant="contained"  className='button' href='https://github.com/PopekD'><GitHubIcon />Github</Button>
            <Button variant="contained" className='button' href='https://www.linkedin.com/in/dawid-popek-6a13b021a'><LinkedInIcon />Linked In</Button>
           </div>
        </motion.div>
        <video src={VideoBg} 
        autoPlay   
        loop    
        muted />
      </div>
    );
  }
  
  export default Welcome;
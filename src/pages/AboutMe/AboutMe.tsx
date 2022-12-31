import { motion, useScroll,  useTransform} from "framer-motion"
import * as React from 'react'
import ReactSkillbar from 'react-skillbars';
import './AboutMe.css'


const AboutMe: React.FC = () => {

  const carouselRef = React.useRef(null)
  const { scrollYProgress } = useScroll({offset: [0, 0.62]})
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const skills = [
    { type: 'Java', level: 60 },
    { type: 'Javascript', level: 50 },
    { type: 'Swift', level: 45},
    { type: 'React', level: 45},
    { type: 'Python', level: 60},
    { type: 'TypeScript', level: 40}

  ];


    return (
      <>
        <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <motion.div className="aboutMe" id="about" ref={carouselRef}>
        <motion.div className="about_text" style={{scale}}>
            <text>21 years old, 2nd year Computer Application Student. IT passionate
              with a focus on programming. Good understanding of Java,
              Python, Swift, SwiftUI, React, TypeScript, JavaScript, NodeJS
              MySQL and SQLite. Volunteer in Slush (2022) and participant in
              Junction Hackathon (2022). Dedicated, friendly junior
              programmer with an ability to learn and highly motivated to
              work.
            </text>

        </motion.div>
        <motion.div className="skillset" style={{scale}} >
          <ReactSkillbar skills={skills} height={50} animationDelay={0} animationDuration={1000}/>
        </motion.div>
      </motion.div>
      </>
    );
  }
  
  export default AboutMe;
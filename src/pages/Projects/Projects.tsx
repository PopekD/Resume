import * as React from 'react'
import './Projects.css'
import {useInView} from "framer-motion"
import Carousel from "framer-motion-carousel";
import Button from '@mui/material/Button';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


const list: string[] = ["TrainTracker (React-Native)", "Tasks_Manager", "Voice_To_Text_App", "Election Machine(Java)", "Nini Reminder(Swift)", "GPA Corelation(Python)", "Resume (React/TypeScript)"];
const links: string[] = ["https://github.com/PopekD/TrainTracker", "https://github.com/PopekD/Tasks_Manager","https://github.com/PopekD/Voice_To_Text_App", "https://github.com/Ebassani/ElectionMachine", "https://github.com/PopekD/Nini_Reminder", "https://github.com/PopekD/High_School_GPA_University_GPA_Corelation", "https://github.com/PopekD/Resume"];


const Projects: React.FC = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, {amount: 0.8});
    return (
      <div className='Projects' id="projects">
        <div className='LeftProjects' ref={ref} style={{ opacity: isInView ? 1 : 0, transition: "2.5s" }}>
          <img src={require('../../assets/CV.png')} alt='Cv_Image' className='cvPhoto' ></img>
          <Button variant="contained" className='button' href='https://drive.google.com/uc?export=download&id=1nv4FjTBUu2lNVB36rt5eH0RajmALKCOD' style={{width: 200}}><AssignmentIndIcon />CV</Button>
          
        </div>
        <Carousel autoPlay={true} interval={5000} loop={true} renderDots = {({activeIndex, setActiveIndex}) => <div />} >
          {list.map((item, i) =>(    
            <div className = "TextProjects"    
            key = {i}
            >
            <a href={links[i]} className="link">{list[i]}</a>
            </div>
          ))}
        </Carousel>

      </div>
    );
  }
  
  export default Projects;
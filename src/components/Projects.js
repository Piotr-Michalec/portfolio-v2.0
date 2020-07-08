import React from 'react';
import Thumbnail from '../components/Thumbnail';
import '../css/Projects.css';

const cos = 'example project title and background'

const projectsJSON = [ //temporary
  {
      title: 'project uno',
      info: 'something about it',
      github: 'github link',
      projectURL: 'www.wp.pl'
  },
  {
      title: 'project duo',
      info: 'something about duo',
      github: 'github link2',
      projectURL: 'www.onet.pl'
  },
  {
      title: 'project uno',
      info: 'something about it',
      github: 'github link',
      projectURL: 'www.wp.pl'
  },
  {
      title: 'project duo',
      info: 'something about duo',
      github: 'github link2',
      projectURL: 'www.onet.pl'
  },
  {
      title: 'project uno',
      info: `something
              - some
              - format`,
      github: 'github link',
      projectURL: 'www.wp.pl'
  },
  {
      title: 'project duo',
      info: 'something about duo',
      github: 'github link2',
      projectURL: 'www.onet.pl'
  },
  {
      title: 'project uno',
      info: 'something about it',
      github: 'github link',
      projectURL: 'www.wp.pl'
  },
  {
      title: 'project duo',
      info: 'something about duo',
      github: 'github link2',
      projectURL: 'www.onet.pl'
  },

]
    
const Projects = () =>{
    return(
        <div className = 'projects'>
        {projectsJSON.map((item,index)=>(<Thumbnail key ={item.title}
     project = {item}/> )) } 
        </div>
    )
}
export default Projects;
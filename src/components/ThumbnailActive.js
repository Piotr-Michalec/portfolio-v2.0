import React from 'react';
import '../css/Thumbnail.css';
import Thumbnail from './Thumbnail';
import Info from '../components/Info';


 


const buttonHandler = () =>{
  console.log('button clicked')
}

const ThumbnailActive = props =>{

  const title = props.title;
  const info = props.info;
  const github = props.github;
  const projectURL = props.projectURL;

    return(
        <div className ='gridContainer' >
          <p id='title'>title: {title}</p>
          <div id='info'><Info info = {info}/></div>
         <div id = 'tech'>tech</div>
         <div id = 'github'>{github}</div>
        </div>
        
    );
};

export default ThumbnailActive;
import React, {useState} from 'react';

import '../css/Thumbnail.css';

import ThumbnailTitle from '../components/ThumbnailTitle';
import ThumbnailActive from '../components/ThumbnailActive';

const Thumbnail = props =>{

  const project = props.project;
  const title = project.title;
  const info = project.info;
  const github = project.github;
  let url = project.projectURL;

  // I can wrap these components in divs
  let activeLayer = <ThumbnailActive title = {title} info = {info} github = {github}/>;
  let titleLayer = <ThumbnailTitle title = {title}/>;

  

  const[layer, switchLayer] = useState(activeLayer)
  
    const showTitleLayer = () =>{
       switchLayer(titleLayer)
    };

    const showActiveLayer = () =>{
       
        switchLayer(activeLayer)
    console.log('show active')
    
    };

    const handleClick = () =>{
        console.log('thumnail clicked')
        if (!url.match(/^https?:\/\//i)) {
      //append protocol if link doesnt have one
      url = "http://" + url;
    }
    window.open(url, "_blank");
        
    }

    return(
        <div className = "thumbnailDiv">
            <h1>background</h1>
            
            <div /*  onMouseOver = {showActiveLayer} onMouseLeave = {showTitleLayer}  onClick = {handleClick}  */className = "thumbnailToplayer">
                {layer }
                
               
            </div>
        </div>
    );
};

export default Thumbnail;
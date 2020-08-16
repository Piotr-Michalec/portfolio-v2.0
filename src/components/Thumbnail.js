import React from 'react';

import '../css/Thumbnail.css';

import Info from '../components/Info';
import Title from '../components/Title';

const Thumbnail = props =>{

  const project = props.project;
  const title = project.title;
  const info = project.info;
  let githubUrl = project.github;
  let url = project.projectURL;
  const background = project.background;

    const handleClick = () =>{
        console.log('thumnail clicked')
        if (!url.match(/^https?:\/\//i)) {
      //append protocol if link doesnt have one
      url = "http://" + url;
    }
    window.open(url, "_blank");   
    }


    const handleGithubClick = () =>{
        console.log('github clicked')
        if (!githubUrl.match(/^https?:\/\//i)) {
      //append protocol if link doesnt have one
      githubUrl = "http://" + githubUrl;
    }
    window.open(githubUrl, "_blank");   
    }

    const style = {
        backgroundImage: `url(${background})`,
    }

   

    return(
        <div className = "thumbnailDiv" style={style}>
          <div className ='gridContainer'>
          <div id='title' onClick = {handleClick}> <Title title = {title} /></div>
          <div id='info' onClick = {handleClick}><Info info = {info} /></div>
          <div id = 'tech' onClick = {handleClick}></div>
          <div id = 'github' onClick = {handleGithubClick}>Go to GitHub</div>
        </div>
               
            </div>
      
    );
};

export default Thumbnail;
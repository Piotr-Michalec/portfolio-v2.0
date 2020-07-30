import React from 'react';
import '../css/Thumbnail.css';
import Thumbnail from './Thumbnail';
import Info from '../components/Info';
import Title from '../components/Title';
import GithubButton from '../components/GithubButton';


 


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
          <div id='title'> <Title title = {title}/></div>
          <div id='info'><Info info = {info}/></div>
         <div id = 'tech'>tech</div>
         <div id = 'github'><GithubButton github = {github}/></div>
        </div>
        
    );
};

export default ThumbnailActive;
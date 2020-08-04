import React from 'react';
import GithubLogo from '../media/Logos/GitHub_Logo.png';
const gitStyle = {
    backgroundImage: `url(${GithubLogo})`
  }
const GithubButton = () =>{
    return(
        <div style={gitStyle}>link to github</div>
    );
};

export default GithubButton;
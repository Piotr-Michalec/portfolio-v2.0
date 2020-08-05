import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons'


import '../css/Navbar.css';

const Navbar = () =>{
    return(
        <div className = 'navbar'>
          <a href='https://github.com/Piotr-Michalec'target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon ={faGithubSquare} size='3x'/></a>
          <a href='https://www.linkedin.com/in/piotr-michalec-b8b33a1a3/' target="_blank">  <FontAwesomeIcon icon ={faLinkedin} size='3x'/> </a>
        </div>
    );
};

export default Navbar;


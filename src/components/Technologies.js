import React from 'react';
import '../css/Technologies.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faJsSquare} from '@fortawesome/free-brands-svg-icons';
import {faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons';
import {faBootstrap} from '@fortawesome/free-brands-svg-icons';
import {faNodeJs} from '@fortawesome/free-brands-svg-icons';
import {faJava} from '@fortawesome/free-brands-svg-icons';

const Technologies = () =>{
    return(
        <div className = "technologies">
            <h1>Technologies I've used</h1>
            <div className = 'techIcons'>
                
                <div className = 'iconWrapper'>
                  <FontAwesomeIcon icon={faReact} size='7x'/>
                  <div id='rightDiv'></div>
                  <div id ='topDiv'></div>
                  <div id ='bottomDiv'></div>
                  <div id ='leftDiv'></div>
                </div>

                <div className = 'iconWrapper'>
                <FontAwesomeIcon icon={faGithubSquare} size='7x'/>
                  <div id='rightDiv'></div>
                  <div id ='topDiv'></div>
                  <div id ='bottomDiv'></div>
                  <div id ='leftDiv'></div>
                </div>

                <div className = 'iconWrapper'>
               <FontAwesomeIcon icon={faJsSquare} size='7x'/>
                  <div id='rightDiv'></div>
                  <div id ='topDiv'></div>
                  <div id ='bottomDiv'></div>
                  <div id ='leftDiv'></div>
                </div>

                <div className = 'iconWrapper'>
                <FontAwesomeIcon icon={faBootstrap} size='7x'/>
                  <div id='rightDiv'></div>
                  <div id ='topDiv'></div>
                  <div id ='bottomDiv'></div>
                  <div id ='leftDiv'></div>
                </div>

                <div className = 'iconWrapper'>
                <FontAwesomeIcon icon={faNodeJs} size='7x'/>
                  <div id='rightDiv'></div>
                  <div id ='topDiv'></div>
                  <div id ='bottomDiv'></div>
                  <div id ='leftDiv'></div>
                </div>

                <div className = 'iconWrapper'>
                <FontAwesomeIcon icon={faJava} size='7x'/>
                  <div id='rightDiv'></div>
                  <div id ='topDiv'></div>
                  <div id ='bottomDiv'></div>
                  <div id ='leftDiv'></div>
                </div>

                <div className = 'iconWrapper'>
                <FontAwesomeIcon icon={faHtml5} size='7x'/>
                  <div id='rightDiv'></div>
                  <div id ='topDiv'></div>
                  <div id ='bottomDiv'></div>
                  <div id ='leftDiv'></div>
                </div>

                <div className = 'iconWrapper'>
                <FontAwesomeIcon icon={faCss3Alt} size='7x'/>
                  <div id='rightDiv'></div>
                  <div id ='topDiv'></div>
                  <div id ='bottomDiv'></div>
                  <div id ='leftDiv'></div>
                </div>
            
            
            
           
           
           
            
            </div>
            
        </div>
    )
}
export default Technologies;
import React from 'react';
import '../css/Technologies.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            
            <div className = 'techIcons'>
            <h1 className ='techH1'>Technologies I've used</h1>
                <div className = 'iconWrapper'>
                  <FontAwesomeIcon icon={faReact} size='6x'/>
                  <div id='rightDiv'></div>
                  <div id ='topDiv'></div>
                  <div id ='bottomDiv'></div>
                  <div id ='leftDiv'></div>
                </div>

                <div className = 'iconWrapper'>
                <FontAwesomeIcon icon={faGithubSquare} size='6x'/>
                  <div id='rightDiv'></div>
                  <div id ='topDiv'></div>
                  <div id ='bottomDiv'></div>
                  <div id ='leftDiv'></div>
                </div>

                <div className = 'iconWrapper'>
               <FontAwesomeIcon icon={faJsSquare} size='6x'/>
                  <div id='rightDiv'></div>
                  <div id ='topDiv'></div>
                  <div id ='bottomDiv'></div>
                  <div id ='leftDiv'></div>
                </div>

                <div className = 'iconWrapper'>
                <FontAwesomeIcon icon={faBootstrap} size='6x'/>
                  <div id='rightDiv'></div>
                  <div id ='topDiv'></div>
                  <div id ='bottomDiv'></div>
                  <div id ='leftDiv'></div>
                </div>

                <div className = 'iconWrapper'>
                <FontAwesomeIcon icon={faNodeJs} size='6x'/>
                  <div id='rightDiv'></div>
                  <div id ='topDiv'></div>
                  <div id ='bottomDiv'></div>
                  <div id ='leftDiv'></div>
                </div>

                <div className = 'iconWrapper'>
                <FontAwesomeIcon icon={faJava} size='6x'/>
                  <div id='rightDiv'></div>
                  <div id ='topDiv'></div>
                  <div id ='bottomDiv'></div>
                  <div id ='leftDiv'></div>
                </div>

                <div className = 'iconWrapper'>
                <FontAwesomeIcon icon={faHtml5} size='6x'/>
                  <div id='rightDiv'></div>
                  <div id ='topDiv'></div>
                  <div id ='bottomDiv'></div>
                  <div id ='leftDiv'></div>
                </div>

                <div className = 'iconWrapper'>
                <FontAwesomeIcon icon={faCss3Alt} size='6x'/>
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
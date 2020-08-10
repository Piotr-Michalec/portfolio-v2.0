import React from 'react';
import Thumbnail from '../components/Thumbnail';
import '../css/Projects.css';
import '../css/Info.css'
//import image here

import RecipeBackgr from '../media/backgrounds/binder.jpg';
import SnakeBackgr from '../media/backgrounds/snake.jpg';
import TetrisBackgr from '../media/backgrounds/tetris.jpg';
import WeatherBackgr from '../media/backgrounds/weather.png';
import PortfolioBackgr from '../media/backgrounds/portfolio.png';




const projectsJSON = [ //temporary
  {
      title: 'Recipe Binder app',
      info: 
      <ul>
        <li>Online app that allows users to add online recipes to a public profile for others to view</li>
        <li>Created with Javascript and ReactJS</li>
        <li>Uses Node.js and express.js</li>
        <li>Uses MongoDB for data storage</li>
        <li>Created this to learn more about applying back end API’s to applications</li>
      </ul>,
      github: 'https://github.com/Piotr-Michalec/recipe-binder-api',
      projectURL: 'https://recipe-binder-client.herokuapp.com/',
      background: RecipeBackgr
  },
  {
      title: 'Tetris Web App',
      info: 
    <ul>
      <li>Traditional Tetris game based on the classic game</li>
      <li>Created with ReactJS and JavaScript ES6, CSS</li>
      <li>Used bootstrap for front end development</li>
      <li>Created this as I was interested in creating a game and to learn ReactJS.</li>
  </ul>,
      github: 'https://github.com/Piotr-Michalec/tetris-react',
      projectURL: 'https://notatetris.netlify.app/',
      background: TetrisBackgr
  },
  {
      title: 'Weather Web App',
      info:
       <ul>
          <li>Allows user to check the current weather in various locations by interacting with the map</li>
          <li>Uses Google Maps API and Dark Sky API</li>
          <li>Created with ReactJS and Javascript, HMTL and CSS</li>
          <li>Created this to build up my knowledge of API’s</li>
      </ul>,
      github: 'https://github.com/Piotr-Michalec/World-Weather-Webapp',
      projectURL: 'https://weatheronearth.netlify.app/',
      background:WeatherBackgr
  },
  {
      title: 'Portfolio Web App',
      info: 
      <ul>
          <li>Designed to be easily expendable</li>
          <li>Was able to achieve a better user experience by the implementation of ReactJS</li>
          <li>Successfully utilised libraries and frameworks such as React Router, React Hooks and Bootstrap</li>
          <li>Created this as a web app that users can go into and view my work</li>
      </ul>,
      github: 'https://github.com/Piotr-Michalec/MyPortfolio',
      projectURL: 'www.onet.pl',
      background: PortfolioBackgr
  },
  {
      title: 'Snake game',
      info: 
      <ul>
          <li>Another variation of classic snake game</li>
          <li>Build with raw JavaScript and CSS</li>
          <li>This was the first app I created and my first experience with Javascript</li>
      </ul>,
      github: 'https://github.com/Piotr-Michalec/Snake-or-something-else',
      projectURL: 'https://github.com/Piotr-Michalec/Snake-or-something-else',
      background: SnakeBackgr
  },
  

]
    
const Projects = () =>{
    return(
        <div><h1>Some of my projects.</h1>
        <div className = 'projects'>
            
        {projectsJSON.map((item,index)=>(<Thumbnail key ={item.title}
     project = {item}/> )) } 
        </div>
        </div>
    )
}
export default Projects;
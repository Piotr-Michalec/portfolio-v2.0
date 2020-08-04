import React from 'react';
import Navbar from '../components/Navbar';
import './../css/Header.css';

const Header = () =>{
    return(
        <div className = "header">
            <Navbar/>
            <div className = 'wrapper'>
              <h1>header</h1>
              <h3>to jest header</h3>
            </div>
        </div>
    )
}
export default Header;
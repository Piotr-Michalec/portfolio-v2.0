import React from 'react';
import '../css/Info.css';


const Info = props =>{
    const info = props.info;
    return(
     <div className = 'infoComponent'>
         <div id = 'pInfo'>{info}</div>
         </div>

    );
};

export default Info;
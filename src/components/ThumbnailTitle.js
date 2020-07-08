import React from 'react';
import '../css/Thumbnail.css';
import Thumbnail from './Thumbnail';

const ThumbnailTitle = props =>{
    return(
        <div className = 'ThumbnailTitleDiv'>
        <h1>{props.text}</h1>
        </div>
    );
};

export default ThumbnailTitle;
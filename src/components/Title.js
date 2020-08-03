import React from 'react';

const Title = props =>{
const title = props.title;

    return(
        <div className ='titleDiv'>
            <div id = 'titleInner'><h2>{title}</h2></div>
        </div>
    );
};

export default Title;
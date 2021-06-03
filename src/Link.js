import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';


function Link(props){
    return(
        <a href={props.url} target="_blank">
        <div className="LinkContainer">
            <img className="LinkImage" src={props.image} />
            <p className="LinkText">{props.text}</p>
        </div>
        </a>
    )
}


export default Link;
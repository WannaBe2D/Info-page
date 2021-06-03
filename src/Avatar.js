import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';


function Avatar(){
    let url = 'https://avatars.githubusercontent.com/u/69766045?v=4'

   return(
    <div className="AvatarContainer">
        <img className="Avatar" src={url} />
    </div>
   )
}

export default Avatar;
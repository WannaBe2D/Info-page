import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';


function AutoTheme(){

    let links
    let body = document.querySelector('body')
    let m = localStorage.getItem('isLight')
    let b
    if(m === 'true'){
        links = document.querySelectorAll('.LinkContainer')
        b = document.querySelectorAll('.Theme')
        console.log(b)
        links.forEach(element => {
            element.className = 'LinkContainerDark'
        })
        b.forEach(element => {
            element.className = 'Theme ThemeDark'
        })
        body.className = 'ThemeDark'
        let a = document.querySelectorAll('a')
        a.forEach(element => {
            element.className = 'linkLi'
        })
    }
    

    return(
       <div/>
    )
}

export default AutoTheme;
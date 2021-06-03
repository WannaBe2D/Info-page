import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';


class Theme extends React.Component {
    constructor(props){
        super(props)
        localStorage.getItem('isLight') === 'true' ? this.state = {isLight: false} : this.state = {isLight: true}

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(state => ({
            isLight: !state.isLight
        }))

        localStorage.setItem('isLight', this.state.isLight)
        
        let links
        let body = document.querySelector('body')

        if(this.state.isLight){
            links = document.querySelectorAll('.LinkContainer')
            links.forEach(element => {
                element.className = 'LinkContainerDark'
            })
            body.className = 'ThemeDark'
            let a = document.querySelectorAll('a')
            a.forEach(element => {
                element.className = 'linkLi'
            })
        
        }else{
            links = document.querySelectorAll('.LinkContainerDark')
            links.forEach(element => {
                element.className = 'LinkContainer'
            })
            body.className = 'ThemeLight'
            let a = document.querySelectorAll('a')
            a.forEach(element => {
                element.className = ''
            })
        }
    }

    render(){
        return(
            <button id="btnChangeTheme" onClick={this.handleClick} className={this.state.isLight ? "Theme" : "Theme ThemeDark"}>
                {localStorage.getItem('isLight') === 'true' ? <img className="ThemeIcon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ0OCA0NDguMDQ0NTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIyNC4wMjM0MzggNDQ4LjAzMTI1Yzg1LjcxNDg0My45MDIzNDQgMTY0LjAxMTcxOC00OC40ODgyODEgMjAwLjExNzE4Ny0xMjYuMjMwNDY5LTIyLjcyMjY1NiA5LjkxNDA2My00Ny4zMzIwMzEgMTQuNzY5NTMxLTcyLjExNzE4NyAxNC4yMzA0NjktOTcuMTU2MjUtLjEwOTM3NS0xNzUuODkwNjI2LTc4Ljg0Mzc1LTE3Ni0xNzYgLjk3MjY1Ni02NS43MTg3NSAzNy4yMzQzNzQtMTI1LjgzMjAzMSA5NC45MTAxNTYtMTU3LjM1MTU2Mi0xNS41NTQ2ODgtMS45ODA0NjktMzEuMjMwNDY5LTIuODY3MTg4LTQ2LjkxMDE1Ni0yLjY0ODQzOC0xMjMuNzE0ODQ0IDAtMjI0LjAwMDAwMDUgMTAwLjI4OTA2Mi0yMjQuMDAwMDAwNSAyMjQgMCAxMjMuNzE0ODQ0IDEwMC4yODUxNTY1IDIyNCAyMjQuMDAwMDAwNSAyMjR6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
 : <img className="ThemeIcon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDMwMi40IDMwMi40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNMjA0LjgsOTcuNkMxOTEuMiw4NCwxNzIsNzUuMiwxNTEuMiw3NS4ycy00MCw4LjQtNTMuNiwyMi40Yy0xMy42LDEzLjYtMjIuNCwzMi44LTIyLjQsNTMuNnM4LjgsNDAsMjIuNCw1My42ICAgICBjMTMuNiwxMy42LDMyLjgsMjIuNCw1My42LDIyLjRzNDAtOC40LDUzLjYtMjIuNGMxMy42LTEzLjYsMjIuNC0zMi44LDIyLjQtNTMuNlMyMTguOCwxMTEuMiwyMDQuOCw5Ny42eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMTUxLjIsNTEuNmM1LjYsMCwxMC40LTQuOCwxMC40LTEwLjRWMTAuNGMwLTUuNi00LjgtMTAuNC0xMC40LTEwLjRjLTUuNiwwLTEwLjQsNC44LTEwLjQsMTAuNHYzMC44ICAgICBDMTQwLjgsNDYuOCwxNDUuNiw1MS42LDE1MS4yLDUxLjZ6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+CgkJCTxwYXRoIGQ9Ik0yMzYuNCw4MC44bDIyLTIyYzQtNCw0LTEwLjQsMC0xNC40cy0xMC40LTQtMTQuNCwwbC0yMiwyMmMtNCw0LTQsMTAuNCwwLDE0LjRDMjI1LjYsODQuOCwyMzIsODQuOCwyMzYuNCw4MC44eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjkyLDE0MC44aC0zMC44Yy01LjYsMC0xMC40LDQuOC0xMC40LDEwLjRjMCw1LjYsNC44LDEwLjQsMTAuNCwxMC40SDI5MmM1LjYsMCwxMC40LTQuOCwxMC40LTEwLjQgICAgIEMzMDIuNCwxNDUuNiwyOTcuNiwxNDAuOCwyOTIsMTQwLjh6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+CgkJCTxwYXRoIGQ9Ik0yMzYsMjIxLjZjLTQtNC0xMC40LTQtMTQuNCwwcy00LDEwLjQsMCwxNC40bDIyLDIyYzQsNCwxMC40LDQsMTQuNCwwczQtMTAuNCwwLTE0LjRMMjM2LDIyMS42eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMTUxLjIsMjUwLjhjLTUuNiwwLTEwLjQsNC44LTEwLjQsMTAuNFYyOTJjMCw1LjYsNC44LDEwLjQsMTAuNCwxMC40YzUuNiwwLDEwLjQtNC44LDEwLjQtMTAuNHYtMzAuOCAgICAgQzE2MS42LDI1NS42LDE1Ni44LDI1MC44LDE1MS4yLDI1MC44eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNNjYsMjIxLjZsLTIyLDIyYy00LDQtNCwxMC40LDAsMTQuNHMxMC40LDQsMTQuNCwwbDIyLTIyYzQtNCw0LTEwLjQsMC0xNC40Qzc2LjgsMjE3LjYsNzAuNCwyMTcuNiw2NiwyMjEuNnoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCQkJPHBhdGggZD0iTTUxLjYsMTUxLjJjMC01LjYtNC44LTEwLjQtMTAuNC0xMC40SDEwLjRjLTUuNiwwLTEwLjQsNC44LTEwLjQsMTAuNHM0LjgsMTAuNCwxMC40LDEwLjRoMzAuOCAgICAgQzQ2LjgsMTYxLjYsNTEuNiwxNTYuOCw1MS42LDE1MS4yeiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNNjYsODAuOGM0LDQsMTAuNCw0LDE0LjQsMHM0LTEwLjQsMC0xNC40bC0yMi0yMmMtNC00LTEwLjQtNC0xNC40LDBzLTQsMTAuNCwwLDE0LjRMNjYsODAuOHoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
}
            </button>
        )
    }
}




export default Theme;

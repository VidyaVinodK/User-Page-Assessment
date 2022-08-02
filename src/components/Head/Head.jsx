import React from 'react'
import Body from '../Body/Body'
import './Head.css'

import Logo from './logo.jpg'
import { BrowserRouter,Routes,Route} from 'react-router-dom'


function Head() {
  return (
    <>
    <div className="container">
      
          <div className="nav">
          <div className='logo'>
          <img src={Logo}></img>
          </div>
            <a href="#home">HOME</a>
            <a href="Details.jsx">DETAILS</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
        {/* <Details/> */}
        <Body/>
  
    </>
  )
}

export default Head
import React from 'react'
import './Details.css'


function Details() {

 
  return (
    <div>
        <div className='searchpage'>
        <h4>Search the employee details</h4>
         
         <input type="search" className="search-bar" placeholder='Enter the employee Name' />
    
         <button className="searchbutton" type="submit" >search</button>
        </div>

    </div>
  )
}

export default Details
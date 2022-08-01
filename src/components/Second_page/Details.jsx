import React from 'react'
import './Details.css'

function Details() {
 
  return (
    <div>
        <div className='searchpage'>
        <h4>Search the employee details</h4>
         
         <input type="search" className="search-bar" placeholder='name' />
         <button className="searchbutton" type="search" >search</button>
        </div>

    </div>
  )
}

export default Details
import React from 'react'
import './Body.css'
import { useState, useEffect } from 'react';

function Body() {
    const detail = localStorage.getItem("userInfo") || "[]";
    const url = "https://randomuser.me/api/?results=20";
    const [data, setData] = useState(JSON.parse(detail));
    useEffect(() => {
        fetch(url).then((res) => {
            res.json().then((data) => {
                console.log(data);
                //setData(data);
                localStorage.setItem("userInfo", JSON.stringify(data.results));
            })
        })
    }, [])

    return (
      <div className='total'>
          {
              (data.length > 0 && data.map((obj,key)=>(
             <div className='totalContainer'  key={key}>
                <div className='content'>
                  <img src={obj.picture.large}></img>
                  <div className='contain'>
                  <span className='userName'>Name:{obj.name.first}</span><br></br>
                  <span className='email'>Email:{obj.email}</span><br></br>
                  <span className='userName'>Date Of Birth:{obj.dob.age}</span><br></br>
                  <span className='userName'>Phone:{obj.phone}</span>
                  </div>
                
                </div>
                </div>
              )))
              
          }
      </div>
        
      )
}

export default Body
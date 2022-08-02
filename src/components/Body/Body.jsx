import React from 'react'
import './Body.css'
import { useState, useEffect } from 'react';


function Body() {
    const detail = localStorage.getItem("userInfo") || "[]";
    const url = "https://randomuser.me/api/?results=10";
    const [data, setData] = useState(JSON.parse(detail));
    const [search,setSearch]=useState('');
    useEffect(() => {
        fetch(url).then((res) => {
            res.json().then((data) => {
                console.log(data);
                //setData(data);
                localStorage.setItem("userInfo", JSON.stringify(data.results));
            })
        })
    }, [])

    const findEmp = (e) => {
        e.preventDefault()
        let emp = data.filter((item) => item.name.first === search)
        setData(emp);
        console.log(emp);
    }


    return (
        <div className='total'>

            <div className='searchpage'>
                <h4>Search the employee details</h4>
                <form onSubmit={findEmp}>
                    <input type="text" className="search-bar" placeholder='Enter the employee Name' onChange={(e) => setSearch(e.target.value)} />

                    <button className="searchbutton" type="submit" >search</button></form>
            </div>
            {
                (data.length > 0 && data.map((obj, key) => (
                    <div className='totalContainer' key={key}>
                        <div className='content'>
                            <img src={obj.picture.large}></img>
                            <div className='contain'>
                                <span className='userName'>Name       : {obj.name.title}. {obj.name.first} {obj.name.last}</span><br></br>
                                <span className='email'>Email         : {obj.email}</span><br></br>
                                <span className='Age'>Age             : {obj.dob.age}</span><br></br>
                                <span className='Phone'>Phone        : {obj.phone}</span>
                            </div>

                        </div>
                    </div>
                )))

            }{
                data.length===0 && <h1 className='noData'>No data Found</h1>
            }
        </div>

    )
}

export default Body
import React from 'react'
import {Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'


const Single = ({item,bien}) => {
    return (
        <div className="sig col-lg-4 col-sm-6 col-12">
          <img className="sig-img" src={item.image}></img>
          <div className="sig-khung">
             <div>
                <Link to={`/chitiet/${item.id}`}><FaSearch></FaSearch></Link> 
             </div>
        </div>
          <div className="sig-tt">
              <h5>{item.name}</h5>
              <p className="tien">${item.price}</p>
             
          </div>
         
        </div>
    )
}

export default Single

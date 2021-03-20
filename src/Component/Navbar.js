import React, { useEffect, useState } from 'react'
import  {FaCartPlus,FaUserPlus,FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useGlobalContext} from '../context'
const Navbar = () => {
    const {cart}=useGlobalContext();
    const [amount,setAmount]=useState(0);
    useEffect(()=>
        {
            let sl=0;
            cart.map((item,index)=>
                {
                    sl=sl+item.amount;
                })
            setAmount(sl)
        })
    const [dong,setDong]=useState(false);
    const handleClick=()=>
        {
            setDong(~dong);
        }
    return (
        <div className="row nav"> 
            <div className="nav-logo col-md-4 col-11 ">
                <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"></img>
            </div>
            <div className="nav-title col-md-4 ">
                <ul>
                    <li ><Link to="/">Home</Link> </li>
                    <li><Link to="/product">Products</Link></li>
                </ul>
            </div>
            <div className="nav-icons col-md-4 ">
                <div>
               <Link to="/cart"><i>Cart <FaCartPlus></FaCartPlus><sup>{amount}</sup></i></Link> 
                
                
                </div>
               
            </div>
            <div className="nav-bars  ">
              <i> <FaBars onClick={handleClick}></FaBars></i>
            </div>
            <div className={`${dong ?"nav-list hien":"nav-list"}`}>
                <ul>
                   <li className="dacbiet"><img src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"></img>
                   <i><FaTimes onClick={handleClick}></FaTimes></i></li>
                   <li onClick={handleClick}><Link to="/">Home</Link></li>
                   <li onClick={handleClick}><Link to="/product">Products</Link></li>

                   <li><Link to="/cart"><i>Cart <FaCartPlus></FaCartPlus><sup>2</sup></i></Link>  </li>
                   
                </ul>
            </div>
        </div>
    )
}

export default Navbar

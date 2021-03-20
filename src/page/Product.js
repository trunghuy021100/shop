import React, { useState } from 'react'
import { FaThLarge,FaBars } from 'react-icons/fa'
import Title from '../Component/Title'
import {useGlobalContext} from '../context'
import Single from '../Component/Single'
import Filterr from '../Component/Filter'
import Filter from '../Component/Filter'
const Product = () => {
    const {list}=useGlobalContext();
    const [trangthai,setTrangthai]=useState(true);
    const [chinhsua,setChinhsua]=useState("");
    const handleClickchon2=()=>
        {
            setTrangthai(false);
        }
    const handleClickchon1=()=>
        {
            setTrangthai(true);
        }
    
    window.addEventListener('scroll',function()
        {
            if(window.scrollY>200 )
                {
                    setChinhsua("yen")
                }
            else{
                setChinhsua("");
            }
        })
    return (
        <div>
            <Title title={"PRODUCTS"}></Title>
            <div className="pro row">
                <div className="col-4 col-md-2">
                <div className={`pro-trai ${chinhsua}`}>
                    <Filterr></Filterr>
                </div>
                </div>
                <div className="pro-phai col-8 col-md-10">
                    <div className="pro-chedo">
                       <i onClick={handleClickchon1} className={`${trangthai?"boido":""}`}><FaThLarge></FaThLarge></i> 
                        <i onClick={handleClickchon2}  className={`${trangthai?"":"boido"}`}><FaBars></FaBars></i>
                        <div className="duong-ke">
                            
                        </div>
                    </div>
                <div className="row">
                        {list.map((item,index)=>
                            {   return(
                                <Single item={item} key={index} bien={trangthai}></Single> 
                            )
                            })}
                    </div>
                </div>
                

                </div>
            </div>
        
    )
}

export default Product

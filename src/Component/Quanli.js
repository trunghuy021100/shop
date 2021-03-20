import React, { useState } from 'react'
import {useGlobalContext} from '../context'
import { data } from '../data';
import {FaCogs, FaExchangeAlt, FaMinus, FaMinusCircle, FaPlus, FaPlusCircle, FaUser} from 'react-icons/fa'

import Create from './quanli/Create';
import Deletee from './quanli/Delete';

 
const Quanli = () => {
    const {setList,list}=useGlobalContext();
    const [so,setSo]=useState(1);
    // *****************************************************
    

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }
    // const xuly=()=>
    //     {
    //         postData("http://localhost:3000/data",form).then(data=>
    //             {
    //                 setList([...list,data])
    //             })
    //     }
    return (
        <div className="che">
            <div className="che-icons">

            </div>
            <div className="quanli row">
                <div className="tab-quanli col-md-3" >
                    <ul>
                        <li  onClick={()=>setSo(1)} className={`${so===1?"maunen":""}`} > <i className="text-primary"><FaUser></FaUser></i> <b>Profile</b></li>
                        <li  onClick={()=>setSo(2)} className={`${so===2?"maunen":""}`}> <i className="text-success"><FaPlusCircle></FaPlusCircle></i> <b>Create</b></li>
                        <li  onClick={()=>setSo(3)} className={`${so===3?"maunen":""}`}> <i className="text-warning"><FaExchangeAlt></FaExchangeAlt></i> <b>Change</b></li>
                        <li  onClick={()=>setSo(4)} className={`${so===4?"maunen":""}`}> <i className="text-danger"><FaMinusCircle></FaMinusCircle></i> <b>Delete</b></li>
                        <li  onClick={()=>setSo(5)} className={`${so===5?"maunen":""}`}> <i className="text-secondary"><FaCogs></FaCogs></i> <b>Settings</b></li>

                    </ul>
                </div>
                <div className="content-quanli col-md-9">
                    <div className={`${so===1?"tungphan":"tungphan an"}`}>

                    </div>
                    <div className={`${so===2?"tungphan":"tungphan an"}`}>
                        <Create></Create>
                    </div>
                    <div className={`${so===3?"tungphan":"tungphan an"}`}>

                    </div>
                    <div className={`${so===4?"tungphan":"tungphan an"}`}>
                        <Deletee></Deletee>
                    </div>
                    <div className={`${so===5?"tungphan":"tungphan an"}`}>

                    </div>
                </div> 
            </div>

            
        </div>
      
        
    )
}

export default Quanli

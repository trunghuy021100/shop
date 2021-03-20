import React, { useState } from 'react'
import { FaCheck, FaTrash } from 'react-icons/fa';

import {useGlobalContext} from '../../context'


const Deletee = () => {
    const {list,setList}=useGlobalContext();

    async function deleteData(url = '') {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
         
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }
    
      async function getData(url="")
        {
            const responsive=await fetch( "http://localhost:3000/data")
            const data=await responsive.json()
          setList(data)
        }
      const xuly=(bien)=>
      {
          deleteData(`http://localhost:3000/data/${bien}`).then(data=>
              {
                 
               getData("http://localhost:3000/data");
              })
            }
             
    return (
        <div className="del">
           {
               
               list.map((item,index)=>
                {
                    return (
                        <div key={index} className="del-part">
                            <p>{item.id}</p>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <i onClick={()=>{
                               xuly(item.id)
                                
                            }}><FaTrash></FaTrash></i>
                            </div>
                    )
                })
           }
           </div>


    )

        }
export default Deletee

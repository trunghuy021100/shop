import React, { useContext, useState } from 'react'
import {useGlobalContext} from '../../context'
const Create = () => {
    const {list,setList}=useGlobalContext();
    
    const [bang,setBang]=useState({
        name:"",
        price:null,
        image:"",
        category:"",
        company:"",
        content:""

    })

    function handleChi(e)
        {
          const bien1=e.target.name;
          
          const bien2=e.target.value;
          setBang({...bang,[bien1]:bien2})
        }
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
    const xuly=()=>
        {
            postData("http://localhost:3000/data",bang).then(data=>
                {
                    setList([...list,data])
                    
                })
            setTimeout(()=>
                {
                    setBang({
                        name:"",
                        price:0,
                        image:"",
                        category:"",
                        company:"",
                        content:""
                
                    })
                },100)
        }
    return (
        <div>
            <div className="khung-input ">
                <ul className="row">
                    <li className="col md-6"><input onChange={handleChi} name="name" type="text" placeholder="name ..." value={bang.name}></input></li>
                    <li className="col-md-6"><input onChange={handleChi} name="image" type="text" placeholder="image address ..." value={bang.image}></input></li>
                    <li className="col-md-6"><input onChange={handleChi} name="price" type="number" placeholder="price ..." value={bang.price}></input></li>
                    <li className="col-md-6"><input onChange={handleChi} name="category" type="text" placeholder="category ..." value={bang.category}></input></li>
                    <li className="col-md-6"><input onChange={handleChi} name="company" type="text" placeholder="company ..." value={bang.company}></input></li>
                    <li className="col-md-6"><input onChange={handleChi} name="content" type="text" placeholder="content ..." value={bang.content}></input></li>
                    
                </ul>

            </div>
            <div className="btn-nut">
            <button className="btn btn-success" onClick={xuly}>Create</button>
            </div>
            
        </div>
    )
}

export default Create

import React, { useEffect, useState } from 'react'
import {useGlobalContext} from '../context'
import {data} from '../data'

const Filterr = () => {
    const {handleSelect,setText,filter,setFilter}=useGlobalContext();
    
    let allCategories = ['all', ...new Set(data.map((item) => item.category))];
    let company=['all', ...new Set(data.map((item) => item.company))];
   allCategories= allCategories.map((item,index)=>
        {
            return <button  type="button" className={`${filter.type===item?"gachchan":""}`} key={index} value={item} name="type"
            onClick={handleSelect}>{item}</button>
        })
        company=company.map((item,index)=>
        {
            return <option key={index} value={item} name="company"
            onChange={handleSelect}>{item}</option>
        })
   
        const trave=()=>
            {
                setFilter({
                    type:"all",
            company:"all",
            price:Math.max(...data.map(item=>parseInt(item.price)))
            ,minPrice:0
            ,maxPrice:Math.max(...data.map(item=>parseInt(item.price)))
            ,check:false
                })
            }
    return (
        <div className="filter">
            <form className="filter-form">
                <div className="filter-1">
                    <input type="text" placeholder="Search ..." onChange={(e)=>setText(e.target.value)}></input>
                </div>
            <div  className="filter-2">
                            <h5 >Category</h5>
                            <div>
                            {allCategories}
                            </div>
                           
            </div>
            <div className="filter-3">
                <h5>Company</h5>
                <div>
                <select name="company"
                    id="company"
                    className="form-control"
                    onChange={handleSelect}>
                   
                   {
                        company
                   }
                    </select>
                </div>
            </div>
            <div className="filter-4">
            <h3>Price</h3>
                   <label htmlFor="price">
                       ${filter.price}
                   </label>
                   <input type="range" name="price" min={filter.min}
                   max={filter.maxPrice} id="price" value={filter.price} onChange={handleSelect} className="form-control"/>
            </div>
            <div className="filter-5">
                <p>Free Shipping</p>
                <input type="checkbox" name="check" onClick={handleSelect}></input>
            </div>
            <div className="filter-6">
                   <button className="btn btn-danger" onClick={trave}>Clear filter</button>
            </div>
            </form>
        </div>
    )
}

export default Filterr

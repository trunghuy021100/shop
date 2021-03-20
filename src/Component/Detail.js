import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import {Link, useParams} from 'react-router-dom'
import {data} from '../data'
import {useGlobalContext} from '../context'

import Title from './Title'

const Detail = () => {
    const {cart,setCart,list}=useGlobalContext();
    const {id}=useParams();
    const vidu=list.filter((item)=>(item.id===Number(id) ))
    const [picture,setPicture]=useState(vidu[0].image)
    const [dem,setDem]=useState(1)

    const handleChangeImage=(e)=>
        {
            const bien=e.target.src;
            setPicture(bien)
        }
    const handleTang=()=>
        {
            setDem(dem+1)
        }
    const handleGiam=()=>
        {   if(dem>1)
            {
            setDem(dem-1)
            }
        }
    const handleClick=(items)=>
        {   let bodem=[];
            bodem=cart.filter((item)=>item.name===items.name);
            console.log(bodem.length);
            if(bodem.length===0)
                {
                    setCart([...cart,{name:items.name,image:items.image,price:items.price,amount:dem}])
                }
            else{
            
              let arr= cart.map((item,index)=>
                    {
                        if(item.name===items.name)
                            {
                                return {...item,amount:item.amount+1};
                            }
                        else
                            {
                                return {...item}
                            }
                    })
                setCart(arr);
            }
            console.log(cart);
        }
    return (
        <div>
            {list.map((item,index)=>
                {
                    if(item.id===Number(id))
                        {
                           
                            return (
                                <div key={index}>
                                <Title title={`PRODUCT  /  ${item.name.toUpperCase()}`}></Title>
                                <button className="btn btn-dark comeback"><Link to="/product">BACK TO PRODUCTS</Link></button>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="anh">
                                            <div className="anh-to">
                                                <img src={picture}></img>
                                            </div>
                                            <div className="anh-nho ">
                                                <img src={item.image} onClick={handleChangeImage}></img>
                                                <img src="https://dl.airtable.com/.attachments/4dad605e632ec2971f2235a996329952/63ae6f9a/z-extra-1.jpeg" onClick={handleChangeImage}></img>
                                                <img src="https://dl.airtable.com/.attachments/4ab93148649c1559050398743f713710/1c3f6916/z-extra-2.jpeg" onClick={handleChangeImage}></img>
                                                <img src="https://dl.airtable.com/.attachments/6370c196d2b2f7e26c23daf4a0205b9b/7b5cfeed/z-extra-3.jpeg" onClick={handleChangeImage}></img>
                                                <img src="https://dl.airtable.com/.attachments/88d5851bd98cade822c466eab7d50bd4/f11d5ee8/z-extra-4.jpeg" onClick={handleChangeImage}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="thongtin">
                                            <h1>{item.name}</h1>
                                            <h4 className="text-danger">$ {item.price}</h4>
                                            <p>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
                                            <p><b>AVAILABLE :</b>  In Stock</p>
                                            <p><b>SKU :</b>  RecoM2MyHJGHLVi5l</p>
                                            <p><b>BRAND :</b>  Liddy</p>
                                            <div className="duong-ke"></div>
                                            <div className="soluong">
                                                <i onClick={handleGiam}><FaMinus></FaMinus></i>
                                                <h1>{dem}</h1>
                                                <i onClick={handleTang}><FaPlus></FaPlus></i>
                                                </div>
                                            <button className="btn btn-danger" onClick={()=>handleClick(item)}><Link to="/cart">ADD TO CART</Link></button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            )
                        }
                })}
        </div>
    )
}

export default Detail

import React, { useEffect, useState } from 'react'
import Title from './Title'
import {useGlobalContext} from '../context'
import { FaCheck, FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Cart = () => {
    const {cart,setCart}=useGlobalContext();
    const [tien,setTien]=useState(0);
    const [ship,setShip]=useState(0);
    const [tong,setTong]=useState(0);
    const [pay,setPay]=useState(false);
    const handlePay=()=>
        {
            setPay(true);
            setTimeout(()=>
            {
                setCart([]);
                setPay(false)
            },2000)
        }
    const handleTa=(items)=>
        {
            let bang=cart.map((item,index)=>
                {
                    if(item.name===items.name)
                        {
                            return {...item,amount:items.amount+1}
                        }
                    else{
                        return {...item}
                    }
                })
            setCart(bang);
        }
    useEffect(()=>
        {   let demtien=0;
            let demship=0;
            let demtong=0;
            cart.map((item,index)=>
                {
                    demtien=demtien+Number(item.price)*item.amount;
                    if(item.name.indexOf("f")!==-1)
                        {
                            demship=5.29;
                        }
                })
            demtong=demtien+demship;
            setTien(demtien);
            setShip(demship);
            setTong(demtong);

        },[cart])
        const handleGa=(items)=>
        {
            let bang=cart.map((item,index)=>
                {
                    if(item.name===items.name && item.amount>1)
                        {
                            return {...item,amount:items.amount-1}
                        }
                    else{
                        return {...item}
                    }
                })
            setCart(bang);
        }
    const handlexoa=(items)=>
        {
            let bang=cart.filter((item)=>item.name!==items.name);
            setCart(bang);
        }
    const handleClear=()=>
        {
            setCart([]);
        }
    if(cart.length==0)
        {
            return(
                <div className="trong" >
                    <h1 className="text-danger">Your cart is empty</h1>
                    <button className="btn btn-dark"><Link to="/product">Fill it</Link></button>
                </div>
            )
        }
    return (
        <div>
            <Title title={"CART"}></Title>
            <div className="container">
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item,index)=>
                                    {
                                        return (
                                            <tr key={index}>
                                                <th className="sua-anh">
                                                    <img src={item.image}></img>
                                                </th>
                                                <th>${item.price}</th>
                                                <th className="day">
                                                    <i onClick={()=>handleGa(item)}><FaMinus></FaMinus>&ensp;&ensp;</i>
                                                    <b>{item.amount}</b>
                                                    <i onClick={()=>handleTa(item)}>&ensp;&ensp;<FaPlus></FaPlus></i>
                                                </th >
                                                <th className="sua-xoa"> ${(item.price * item.amount).toFixed(2)}&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<i onClick={()=>handlexoa(item)}><FaTrash></FaTrash></i></th>
                                            </tr>
                                        )
                                    })
                            }
                            </tbody>
                    
                </table>
                <div className="but">
                    <button className="btn btn-dark"><Link to="/product">Continue Shop</Link></button>
                    <button className="btn btn-warning" onClick={handleClear}>Clear Shopping Cart</button>
                </div>
                <div className="thanhtoan">
                    <div className="chinh-thanhtoan">
                    <p><b>Subtotal</b>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;$ {tien.toFixed(2)}</p>
                    <p>Shipping fee:&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp; &ensp;$ {ship}</p>
                    <div className="duong-ke"></div>
                    <div className="tong"><b><h5>ORDER TOTAL :&ensp;$ {tong.toFixed(2)}</h5></b></div>
                    </div>
                    
                </div>
                <div className="btn-thanhtoan">
                    <button className="btn btn-success" onClick={handlePay}>PAY</button>
                </div>
            </div>
            <div className={`${pay?"khung-thongbao hienlen":"khung-thongbao"}`}>
                <div className="thongbao">
                <i><FaCheck></FaCheck></i>
                <h3>Ban da thanh toan thanh cong</h3>
                </div>
                
            </div>
        </div>
    )
}

export default Cart

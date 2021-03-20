import React from 'react'
import {data} from '../data';
import Single from '../Component/Single'
import { FaFacebook, FaTwitter, FaYahoo, FaYoutube } from 'react-icons/fa';
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div className="home">
            <div className="home-intro row">
                <div className=" col-lg-6 col-12">
                    <div className="intro-trai">
                    <h1>Design Your Comfort Zone</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                    <button type="button" className="btn btn-primary"><Link to="/product"><b className="text-danger">SHOP NOW</b></Link></button>
                    </div>
                    
                </div>
                <div className=" col-lg-6">
                    <div className="intro-phai">
                    <img className="anh1" src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg"></img>
                    <img className="anh2" src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.78991864.jpeg"></img>
                    </div>
                    
                </div>
            </div>
            <div className="home-demo">
                <h1>
                Featured Products
                </h1>
                <div className="demo-sp row">
                    {data.map((item,index)=>
                        {   if(index<=2)
                            {
                            return (
                               <Single item={item} key={index} bien={true}></Single>
                            )
                            }
                        })}
                </div>
                <div className="demo-btn">
                <button type="button" className="btn btn-dark ">
                    <Link to="/product">All Products</Link>    
                </button>
                </div>
                
            </div>
            <div className="home-des">
                <div className="des-tt row">
                    <div className="col-md-1"></div>
                <h2 className="col-md-4">Custom Furniture Built Only For You</h2>
                <p className="col-md-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
                </div>
              
                <div  className="row des-tong"> 
             
                <div className="col-lg-4 col-sm-6">
                    <div className="des-part">
                        <i className="twitter"><FaTwitter></FaTwitter></i>
                        <h3>Twitter</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                <div className="des-part">
                         <i className="yahoo"><FaYahoo></FaYahoo></i>
                        <h3>Yahoo</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                <div className="des-part">
                        <i className="youtube"><FaYoutube></FaYoutube></i>
                        <h3>Youtube</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                </div>
                </div>
               
                </div>

            </div>
            <div className="home-sale row">
                        
                            <div className=" col-lg-6">
                                <div className="sale-trai">
                                <h1>Join our newsletter and get 20% off</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
                                </div>
                           
                            </div>
                            <div className="sale-phai col-lg-6">
                            <input type="input" placeholder="enter email"></input>
                            </div>
                        
            </div>
        </div>
    )
}

export default Home

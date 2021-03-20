import React, { useState,useContext, useEffect } from 'react'
import {data} from './data'

const AppContext=React.createContext();


const AppProvider=({children})=>
    {
        const [list,setList]=useState(data);
        const [text,setText]=useState("");
        const [cart,setCart]=useState([]);
        const [filter,setFilter]=useState(
            {type:"all",
            company:"all",
            price:Math.max(...data.map(item=>parseInt(item.price)))
            ,minPrice:0
            ,maxPrice:Math.max(...data.map(item=>parseInt(item.price)))
            ,check:false
        }
        )
        
           
       useEffect(()=>
        {   
            chonlai();
        },[text,filter])

        function handleSelect(e)
            {
                const target=e.target;
                const value=target.type==="checkbox" ? target.checked : target.value
                const name=e.target.name
                setFilter({...filter,[name]:value});
                console.log(filter);
            }

        const chonlai=()=>
            {   
                console.log(text);
                let tempList=[...data];
                tempList=tempList.filter((item,index)=>item.name.indexOf(text)!==-1)
                if(filter.type!=="all")
                {
                tempList=(tempList.filter((item)=>item.category===filter.type))
          
                }
                if(filter.company!=="all")
                {
                tempList=(tempList.filter((item)=>item.company===filter.company))
                }
                tempList=(tempList.filter((item)=>parseInt(item.price)<=parseInt(filter.price)))
                if(filter.check===true)
                    {
                        tempList=tempList.filter((item,index)=>item.name.indexOf("f")!==-1)
                    }
                setList(tempList);
            }

        
              
             
        return (
            <AppContext.Provider value={{
                list,setList,
                handleSelect,
                text,setText,
                filter,
                cart,setCart
                }}>
                    {children}
                </AppContext.Provider>
        )
    }
export const useGlobalContext = () => {
        return useContext(AppContext)
      }
      
     export { AppContext, AppProvider }
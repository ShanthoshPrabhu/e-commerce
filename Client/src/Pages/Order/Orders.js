import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../../../src/Pages/Navbar/Navbar'
import Orderedproducts from '../../../src/Pages/Order/Orderedproducts'
import { useStateValue } from '../Stateprovider';

function Orders() {

  const [{basket,user},dispatch] = useStateValue();
  const[orders,setorders]=useState([]);
  const[created,setcreated] = useState('')
  const[total,setTotal] = useState('')

  useEffect(()=>{

        
    if(user){
        
        const getproducts = async() =>{
            const products =await axios.get(`http://localhost:2002/products/${user._id}`)
            
            setorders(products.data)
        }
        
        getproducts()
    
    }
    else{
        setorders([])
    }
    
},[])

  
  return (
    <div>
       <Navbar/>
       <Orderedproducts orders={orders}/>
    </div>
  )
}

export default Orders
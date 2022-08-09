

import {  Search, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
 import { auth } from '../Firebase';
import './Navbar.css'
import { useStateValue } from '../Stateprovider';
import {mobile} from '../../Responsive'

const Container = styled.div`
  height: 80px;
  background-color:#131921;
  color:white;
  width: 1514px;
  ${mobile({
     height:'100px',
     width:'950px',
     justifyContent: "center",
     alignItems:'center',
     paddingBottom:'20px'
  })}

`

const Wrapper = styled.div`
     padding:0px 30px 70px 70px ;
     display: flex;
     
`
const Input= styled.input`
  flex: 1;
  height:30px;
  border:none;
  outline: none;
  font-size: 16px;
  ${mobile({ 
    fontSize:'25px',
    position:'relative',
    width:'40px',
    backgroundColor:'orange'
  })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items:center;
  justify-content: center;
  ${mobile({
      width:'300px',
      justifyContent: "center",
      position:'relative',
      right:'30px'
     })}
`
const Middle = styled.div`
  flex: 1;
  ${mobile({ flex: 1, 
  display:'flex',
  justifyContent: "center" ,
  alignItems:'center'
  })}
`
const Right = styled.div`
  flex: 1;
  ${mobile({ 
    flex: 2,
    display:'flex',
    justifyContent: "center" ,
    alignItems:'center'
   })}
`

const Searchcontainer=styled.div`
   border:1px solid white;
   display: flex;
  align-items:center;
  margin-left:10px;
  cursor:pointer;
  background-color: white;
  height:5px;
  width: 300px;
  color:black;
  padding:15px;
  border-radius:30px;
  margin-left:10px;
   margin-top:1px;
   min-width: 200px;
   margin-bottom: 6px;
   ${mobile({ 
    position:'relative',
      backgroundColor:'green',
      width:'100px'
  })}
`

const Logo=styled.h1`
    font-size:40px;
    color:rgb(126, 202, 314);
    font-family: 'Dancing Script', cursive;
    text-align: center;
    cursor:pointer;
    justify-content: center;
   margin-top:12px;
   min-width: 420px;
   ${mobile({ 
    fontSize: "40px",
    display:'flex',
    justifyContent: "center" ,
    alignItems:'center',
    position:'relative',
    right:'70px',
     })}
`
const Items=styled.div`
    display: flex;
    align-items:center;
   vertical-align:middle;
   padding: 20px 30px;
   margin-right: none;
   justify-content: flex-end;
   position: relative;
   ${mobile({ 
    position:'relative',
      right:'150px'
    })}
`
const Login=styled.button`
   font-size:18px;
   color: white;
   background-color:#131921;
   cursor: pointer;
   margin-left:10px;
   margin-top:5px;
   border: none;
   margin: none;
   ${mobile({
    width:'80px', 
    display:'flex',
    alignItems:'center',
    justifyContent: "center" ,
    marginTop:'24px'
  })}
`
const Signup=styled.button`
   font-size:18px;
   color: white;
   background-color:#131921;
   cursor: pointer;
   margin-left:10px;
   margin-top:5px;
   border: none;
   margin: none;
`

const Cartcoloumn=styled.button`
  cursor: pointer;
  color: white;
  background-color:#131921;
  display: flex;
  margin-left:10px;
  margin-top:5px;
  border: none;
  margin: none;
  ${mobile({ 
    
    })}
`

const Text=styled.div`
   font-size:18px; 
   margin-top:2px;
   
`
const Orderscoloumn=styled.div`
   font-size:18px; 
   margin-top:2px;
   padding-left: 15px;
   ${mobile({ 
    
  })}
`

function Navbar () {

  const[{basket,user},dispatch] = useStateValue();

  const handlelogin = () => {
    if(user){
      auth.signOut();
    }
  }

  const finay = () => {
    alert("This feature isn't available yet")
  }
  return (
    
    < Container className='navcontainer'>
     < Wrapper>
        <Left>
          <Searchcontainer >
            <Input></Input>
            <div onClick={finay}><Search ></Search></div>
            
          </Searchcontainer>
        </Left>
        <Middle>
          <Link to="/" className='logo'>
           <Logo >E-COM</Logo>
           </Link>
        </Middle>
        <Right>
        <Items>
           <Link to={!user && '/login'}>
              <Login onClick={handlelogin}>{user ? 'Log out' : 'Log in'}</Login>
           
              <Signup>{user ? '' : 'Sign in'}</Signup>
            </Link>
            <Link to="/Cartz" className='link'>
             <Cartcoloumn >
              <ShoppingCartOutlined  className='cartlogo' />
              <Text>Cart </Text>
               <div className='cartvalue'>{basket?.length}</div>
            </Cartcoloumn>
            </Link>
            <Link to='/orderspage' className='oc'>
              <Orderscoloumn >Orders</Orderscoloumn>
            </Link>
          </Items>
        </Right>
     </Wrapper>   
    </ Container>
  )
}

export default Navbar 
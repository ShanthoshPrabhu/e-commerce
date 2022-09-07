

import {  Search, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
 import { auth } from '../Firebase';
import './Navbar.css'
import { useStateValue } from '../Stateprovider';
import {mobile} from '../../../src/Responsive'

const Container = styled.div`
  height: 80px;
  background-color:#131921;
  color:white;
  width: 1514px;
  ${mobile({
     height:'80px',
     width:'260px',
     justifyContent: "center",
     alignItems:'center',
     paddingBottom:'20px',
    //  display:'flex',
    //  flexDirection:'column'
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
    display:'flex',
    fontSize:'1px',
    width:'20px',
  })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items:center;
  justify-content: center;
  ${mobile({
      width:'120px',
      justifyContent: "center",
      position:'relative',
      right:'30px',
      top:'8px'
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
      height:'0px',
      top:'10px',
      left:'40px'
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
    fontSize: "26px",
    display:'flex',
    justifyContent: "center" ,
    alignItems:'center',
    position:'relative',
    right:'325px',
    bottom:'24px',
    // paddingBottom:'10px'
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
      right:'400px',
      fontSize:'12px'
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
    marginTop:'24px',
    textDecoration:'none',
    position:'relative',
    fontSize:'14px',
    bottom:'30px'
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
   ${mobile({ 
    display:'flex',
    position:'relative',
    fontSize:'14px',
    bottom:'54px',
    left:'60px',
    textDecoration:'none',
    color:'red'
  })}
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
    position:'relative',
    fontSize:'8px',
    right:'64px',
    top:'14px'
    })}
`

const Text=styled.div`
   font-size:18px; 
   margin-top:2px;
   ${mobile({ 
    display:'none'
    })}
`
const Orderscoloumn=styled.div`
   font-size:18px; 
   margin-top:2px;
   padding-left: 15px;
   ${mobile({ 
    position:'relative',
    fontSize:'14px',

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
          <Searchcontainer className='sc'>
            <Input className='sinput'></Input>
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
           <Link to={!user && '/login'} className='link'>
              <Login onClick={handlelogin}>{user ? 'Log out' : 'Log in'}</Login>
           
              <Signup>{user ? '' : 'Sign up'}</Signup>
            </Link>
            <Link to="/Cartz" className='link'>
             <Cartcoloumn >
              <div className='cartlogo'>
              <ShoppingCartOutlined   />
              </div>
              
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
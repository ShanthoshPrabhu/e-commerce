import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useStateValue } from '../Stateprovider';

function Login() {
   
  const navigate = useNavigate();
  const [email ,setemail] = useState('');
  const [password ,setpassword] = useState('');
  const {dispatch ,user,isFetching}=useStateValue()

  const loginn =async(e) => {
    e.preventDefault();
    
    try{
      const response=await axios.post('http://localhost:2001/auth/login',{
        email:email,
        password:password
      })
      console.log(response.data)
      // localStorage.setItem('user',JSON.stringify(response.data))
      dispatch({
        type:'User',
        user: response.data
      })
      
    } catch (err){
      console.log(err)
    }
   console.log('hdh',user)
    navigate('/')
    window.location.reload()
  }

  

  return (
    <div className='login'>
      <div className='login_logo'>E-COM</div>
       <div className='logincontainer'>
        
        
        <h2>Log-in</h2>
        <form>
           <h4>E-mail</h4>
           <input type='text' value={email}  onChange={(e) => setemail(e.target.value)}/>

           <h4>Password</h4>
           <input type="password" value={password}  onChange={(e) => setpassword(e.target.value)}/>
        </form>
        <div className='terms'>
         <p>By continuing, you agree to E-COM's Conditions of Use and Privacy Notice.</p>
         </div>
         <button type='submit' onClick={loginn} className='loginbutton'>Login</button>
          <Link to='/signup'>
         <button  className='registerbutton'>Create new account?!</button>
         </Link>
       </div>

       
    </div>
  )
}

export default Login
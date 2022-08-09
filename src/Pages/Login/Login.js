import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import "./Login.css"
import {Link} from 'react-router-dom'

function Login() {
   
  const Lognavigate = useNavigate();
  const [email ,setemail] = useState('');
  const [password ,setpassword] = useState('');

  const loginn = e => {
    e.preventDefault();
    
    auth.signInWithEmailAndPassword(email,password)
    .then((auth) => {
       Lognavigate('/')
    })
    .catch(error => alert(error.message))
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
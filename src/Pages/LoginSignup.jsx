import React from 'react'
import './CSS/LoginSignup.css'
import { NavLink } from 'react-router-dom'

const LoginSignup = () => {
  debugger;

  const handleSubmit = (event)=>{
    event.preventDefault()

    const data=new FormData(event.currentTarget);

    const userData={
        firstName:data.get("firstname"),
        lastName:data.get("lastName"),
        email:data.get("email"),
        password:data.get("password")
    }
    console.log("userData",userData);
}

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="firstname" placeholder='First Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <NavLink to={{ pathname: '/register', pageName: 'Register' }}>Login here</NavLink></p>
        <div className="loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
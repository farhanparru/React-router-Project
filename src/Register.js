import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='sign-up'>
    <h1>Register From</h1>
    <form action=''>
        <input id="username" 
        label="Username" 
        type="text" 
        placeholder="Enter Username"
        /> 
        <input id="phoneNumber" 
        label="Phone Number" 
        type="text" 
        placeholder="Enter Phone Number"
        /> 
        <input id="email" 
        label="Email" 
        type="email" 
        placeholder="Enter Email"
        /> 
        <input id="password" 
        label="Password" 
        type="password" 
        placeholder="Enter Password"
        /> 
        <input id="confirm Password" 
        label="Confirm Password" 
        type="password" 
        placeholder="Confirm Password"
        /> 
       <Link to="/login"><button>Submit</button></Link> 
    </form>
    </div>
  
  )
}

export default Register

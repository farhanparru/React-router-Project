import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className=' wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
    <div className='login'>
    <h2 className='mb-3'>Login From</h2>
    <from className="needs-validation">

    <div className='from-group was-validated mb-2 ' >
      <label htmlFor='email ' className='from-label'>Email Addres</label>
      <input type='email' className='from-control' required></input>
      <div className='invalid-feedback'>
          Please Enter you email
      </div>
    </div>

    <div className='from-group  was-validated  mb-2'>
         <label htmlFor='Password' className='from-label'>Password</label>
         <input type='Password'className='from-control'required></input>
         <div className='invalid-feedback'>
          Please Enter you Password
      </div>
    </div>

    <div className='from-group form-check mb-2 ' style={{padding:"3px"}}>
        <input type='checkbox'className='from-check-input'></input>
         <label htmlFor='check'className='from-check-label'>Remember me</label>
    </div>

    <Link to="/home"><button type='submit' className='btn btn-success w-100 mt-2'>Login IN</button></Link>      
    </from>
    </div>
    </div>
  )
}

export default Login

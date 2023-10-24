import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="container">
      <div className="row">
        <div className="col vh-100 d-flex justify-content-center align-items-center">
          <div className="card my-5 p-5 border-0 shadow">
          <h2 className='text-danger text-center'>Register Here</h2>
          <p className="text-center">Create your account to get full acces</p>
          <div className='text-center'>
            <input type="text" className='form-control my-3'  placeholder='Full Name'/>
            <input type="email" className='form-control my-3'  placeholder='Email'/>
            <input type="password" className='form-control my-3'  placeholder='Password'/>
            <input type="password" className='form-control my-3'  placeholder='Confirm Password'/>
            <button className='btn btn-danger text-light'>login</button>
          </div>
          <p>All Ready have an Account <Link to="/auth/login">Login Here</Link>
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

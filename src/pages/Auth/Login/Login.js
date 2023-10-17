import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex flex-column justify-center flex-align-center">
          <div className="card my-5 p-5">
          <h2 className='text-danger'>Login Here</h2>
          <div className=''>
            <input type="text" className='form-control my-3'  placeholder='Full Name'/>
            <input type="text" className='form-control my-3'  placeholder='Email'/>
            <input type="text" className='form-control my-3'  placeholder='Dob'/>
            <input type="text" className='form-control my-3'  placeholder='home'/>
            <button className='btn btn-danger' >login</button>
          </div>
          <p>Not have any Account yet?
          <Link to="/register">Register here</Link>
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

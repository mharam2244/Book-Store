import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col vh-100 d-flex justify-content-center align-items-center">
          <div className="card my-5 p-5 border-0 shadow">
            <h2 className='text-danger text-center'>Login Here</h2>
            <p className="text-center">Enter Login details to get access</p>

            <div className='text-center'>
              <input type="text" className='form-control my-3' placeholder='Email' />
              <input type="password" className='form-control my-3' placeholder='Password' />
              <button className='btn btn-danger text-light' >login</button>
            </div>
            <p>Not have any Account yet? <Link to="/auth/register">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

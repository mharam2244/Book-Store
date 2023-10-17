import React from 'react'
import Register from './Register'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'
export default function index() {
  return (
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>

    </Routes>
  )
}

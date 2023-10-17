import React from 'react'
import {Routes, Route  } from 'react-router-dom'
import Frontend from "./Frontend"
import Auth from "./Auth"
export default function Router() {
  return (
    <>
        <Routes>
          <Route path='/*' element={<Frontend/>} />
          <Route path='Auth/*' element={<Auth/>} />
        </Routes>
    </>
  )
}

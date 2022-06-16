import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignIn from '../components/sign_in'
import SignUp from '../components/sign_up'



export default function Routs () {

  return (
      <Routes>
      {/*<Route exact path="/" element={<Home/>}/>*/}
      {/*<Route exact path="/home" element={<Home/>}/>*/}
      <Route exact path="/login" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
    </Routes>
  )
}

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignIn from '../components/sign_in'
import SignUp from '../components/sign_up'
import PrivateRoute from './private_router'

export default function Routs () {

  return (
    <Routes>
      <Route exact path="/" element={<PrivateRoute
        isAuthenticated={false}
        children={{}}/>}/>
      <Route exact path="/home" element={<PrivateRoute
        isAuthenticated={false}
        children={{}}/>}/>
      <Route exact path="/login" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
    </Routes>
  )
}

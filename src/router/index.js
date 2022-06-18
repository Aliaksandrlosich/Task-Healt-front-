import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignIn from '../container/sign_in'
import SignUp from '../container/sign_up'
import PrivateRoute from './private_router'
import HomePage from '../container/home'

export default function Routs () {

  return (
    <Routes>
      <Route exact path="/" element={<PrivateRoute
        isAuthenticated={false}
        children={<HomePage/>}/>}
      />
      <Route exact path="/home" element={<PrivateRoute
        isAuthenticated={false}
        children={<HomePage/>}/>}
      />
      <Route exact path="/login" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
    </Routes>
  )
}

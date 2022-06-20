import React from 'react'
import { Routes, Route } from 'react-router-dom'

import {useAuth} from '../api/auth'
import SignIn from '../container/sign_in'
import SignUp from '../container/sign_up'
import PrivateRoute from './private_router'
import HomePage from '../container/home'

export default function Routs () {
  const auth = useAuth()

  return (
    <Routes>
      <Route exact path="/" element={<PrivateRoute
        isAuthenticated={auth.isAuthorized()}
        children={<HomePage/>}/>}
      />
      <Route exact path="/home" element={<PrivateRoute
        isAuthenticated={auth.isAuthorized()}
        children={<HomePage/>}/>}
      />
      <Route exact path="/login" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
    </Routes>
  )
}

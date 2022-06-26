import { useState, useEffect, memo } from 'react'

import { useAuth } from '../../api/auth'
import { useUsersApi } from '../../api/users'
import Button from '../button'

import './header.css'

const texts = {
 logoutButton: 'Logout',
 welcomeLabel: 'Welcome'
}

const Header = memo(() => {
 const auth = useAuth()
 const [username, setUsername] = useState('')
 const user = useUsersApi({ userId: auth.getUserId() })

 useEffect(() => {
  if (auth.getUserId() && !username) {
   user.getUsername().then(username => setUsername(username))
  }
 })

 const onLogout = async (event) => {
  await auth.logout()
 }

 const headerClassName = auth.isAuthorized() ? 'header' : 'block_hidden'
 return (<header className={headerClassName}>
  <p className="header__text">{texts.welcomeLabel} {username}!</p>
  <Button
   text={texts.logoutButton}
   onClick={onLogout}
  />

 </header>)
})

export default Header

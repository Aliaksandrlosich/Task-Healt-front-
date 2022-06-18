import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/button'
import TextField from '../../components/text_field'

import './sign_up.css'
import { useAuth } from '../../api/auth'

const texts = {
  signUpButton: 'Register',
  promoText: 'Welcome!  Register your new account',
  username: 'username',
  password: 'password',
  repeatPassword: 'repeat password',
  signInSuggest: 'Have user?',
  signInButton: 'Sign in',
  incorrectPassword: 'The passwords don\'t match!',
  incorrectUsername: 'Such a user is already in the system!',
}

const validationErrors = {
  incorrectPassword: texts.incorrectPassword,
  incorrectUsername: texts.incorrectUsername,
}

const SignUp = () => {
  const navigate = useNavigate()
  const auth = useAuth()
  const [form, setForm] = useState({
    username: '', password: '', repeatPassword: '',
  })

  const [error, setError] = useState({
    type: undefined,
  })

  const navigateToSignIn = () => navigate('/login')
  const navigateToHome = () => navigate('/home')

  const onChangeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
    setError({ type: undefined })
  }

  const onRegistration = async (event) => {
    const { password, repeatPassword, username } = form
    if (password === repeatPassword) {
      const result = await auth.registration({ username, password })
      if (result.isError) {
        setError({ type: 'incorrectUsername' })
      } else {
        navigateToHome()
      }
    } else {
      setError({ type: 'incorrectPassword' })
    }
  }

  const isErrorInput = !!error.type
  const errorInputHelperText = validationErrors[error.type]
  return (
    <div className="sign-in__wrapper">
      <p className="sign-in__promo-text">
        {texts.promoText}
      </p>
      <div className="sign-in__text-field-wrapper" onChange={onChangeHandler}>
        <TextField id={'sign-up-username'} label={texts.username}
                   classes={'sign-in__text-field'}
                   name={'username'}
                   isError={isErrorInput}
                   helperText={errorInputHelperText}
                   onChange={onChangeHandler}/>
        <TextField id={'sign-up-password'} label={texts.password}
                   classes={'sign-in__text-field'}
                   name={'password'}
                   type="password"
                   helperText={errorInputHelperText}
                   isError={isErrorInput}
                   onChange={onChangeHandler}/>
        <TextField id={'sign-up-repeatpassword'} label={texts.repeatPassword}
                   classes={'sign-in__text-field'}
                   name={'repeatPassword'}
                   type="password"
                   isError={isErrorInput}
                   helperText={errorInputHelperText}
                   onChange={onChangeHandler}/>
      </div>
      <Button
        text={texts.signUpButton}
        classes={'sign-in__button'}
        onClick={onRegistration}
      />
      <div className="sign-in__register-block">
        <p className="sign-in__text">{texts.signInSuggest}</p>
        <Button
          variant={'text'}
          text={texts.signInButton}
          onClick={navigateToSignIn}
        />
      </div>
    </div>
  )
}

export default SignUp

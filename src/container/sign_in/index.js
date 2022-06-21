import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../api/auth'

import Button from '../../components/button'
import TextField from '../../components/text_field'

import './sign_in.css'

const texts = {
  signInButton: 'Sign In',
  promoText: 'Welcome!  Log in to your account',
  username: 'username',
  password: 'password',
  signUpSuggest: 'Don\'t have user?',
  signUpButton: 'Sign Up',
  incorrectUsernameOrPassword: 'Incorrect username or password',
}

const validationErrors = {
  incorrectUsernameOrPassword: texts.incorrectUsernameOrPassword,
}

const SignIn = () => {
  const navigate = useNavigate()
  const auth = useAuth()
  const [form, setForm] = useState({
    username: '', password: '',
  })
  const [error, setError] = useState({
    type: undefined,
  })
  const navigateToSignUp = () => navigate('/register')

  const onChangeHandler = event => setForm({ ...form, [event.target.name]: event.target.value })
  const onLogin = async (event) => {
    const { username, password } = form
    if (username && password && password.length > 7) {
      const result = await auth.authorization({ username, password })
      if (result.isError) {
        setError({ type: 'incorrectUsernameOrPassword' })
      }
    } else {
      setError({ type: 'incorrectUsernameOrPassword' })
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
        <TextField id={'sign-in-username'}
                   label={texts.username}
                   classes={'sign-in__text-field'}
                   name={'username'}
                   helperText={errorInputHelperText}
                   isError={isErrorInput}/>
        <TextField id={'sign-in-password'}
                   label={texts.password}
                   classes={'sign-in__text-field'}
                   name={'password'}
                   type="password"
                   helperText={errorInputHelperText}
                   isError={isErrorInput}/>
      </div>
      <Button
        text={texts.signInButton}
        classes={'sign-in__button'}
        onClick={onLogin}
      />
      <div className="sign-in__register-block">
        <p className="sign-in__text">{texts.signUpSuggest}</p>
        <Button
          variant={'text'}
          text={texts.signUpButton}
          onClick={navigateToSignUp}
        />
      </div>
    </div>
  )
}

export default SignIn

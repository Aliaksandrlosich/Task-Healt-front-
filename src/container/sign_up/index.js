import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/button'
import TextField from '../../components/text_field'

import './sign_up.css'

const texts = {
  signUpButton: 'Register',
  promoText: 'Welcome!  Register your new account',
  username: 'username',
  password: 'password',
  repeatPassword: 'repeat password',
  signInSuggest: 'Have user?',
  signInButton: 'Sign in',
}

const SignUp = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: '', password: '', repeatPassword: '',
  })

  const navigateToSignIn = () => navigate('/login')

  const onChangeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  return (
    <div className="sign-in__wrapper">
      <p className="sign-in__promo-text">
        {texts.promoText}
      </p>
      <div className="sign-in__text-field-wrapper" onChange={onChangeHandler}>
        <TextField id={'sign-up-username'} label={texts.username} classes={'sign-in__text-field'} name={'username'}
                   onChange={onChangeHandler}/>
        <TextField id={'sign-up-password'} label={texts.password} classes={'sign-in__text-field'} name={'password'}
                   type="password"
                   onChange={onChangeHandler}/>
        <TextField id={'sign-up-repeatpassword'} label={texts.repeatPassword} classes={'sign-in__text-field'}
                   name={'repeatPassword'} type="password"
                   onChange={onChangeHandler}/>
      </div>
      <Button
        text={texts.signUpButton}
        classes={'sign-in__button'}
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

SignUp.propTypes = {}

export default SignUp

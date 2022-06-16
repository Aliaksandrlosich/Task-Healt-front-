import React from 'react'
import { useNavigate } from "react-router-dom";

import Button from '../button'
import TextField from '../text_field'

import './sign_up.css'

const texts = {
  signUpButton: 'Register',
  promoText: 'Welcome!  Register your new account',
  username: 'username',
  password: 'password',
  repeatPassword: 'repeat password',
  signInSuggest: 'Have user?',
  signInButton: 'Sign in'
}

const SignUp = () => {
  const navigate = useNavigate();
  const navigateToSignIn = () => navigate('/login');
  return (
    <div className="sign-in__wrapper">
      <p className='sign-in__promo-text'>
        {texts.promoText}
      </p>
      <TextField label={texts.username} classes={'sign-in__text-field'}/>
      <TextField label={texts.password} classes={'sign-in__text-field'} type="password"/>
      <TextField label={texts.repeatPassword} classes={'sign-in__text-field'} type="password"/>
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

SignUp.propTypes = {
}

export default SignUp

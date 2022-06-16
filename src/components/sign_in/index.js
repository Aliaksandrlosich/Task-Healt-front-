import React from 'react'
import { useNavigate } from "react-router-dom";

import Button from '../button'
import TextField from '../text_field'

import './sign_in.css'

const texts = {
  signInButton: 'Sign In',
  promoText: 'Welcome!  Log in to your account',
  username: 'username',
  password: 'password',
  signUpSuggest: 'Don\'t have user?',
  signUpButton: 'Sign Up'
}

const SignIn = () => {
  const navigate = useNavigate();
  const navigateToSignUp = () => navigate('/register');
  return (
    <div className="sign-in__wrapper">
      <p className='sign-in__promo-text'>
        {texts.promoText}
      </p>
      <TextField label={texts.username} classes={'sign-in__text-field'}/>
      <TextField label={texts.password} classes={'sign-in__text-field'} type="password"/>
      <Button
        text={texts.signInButton}
        classes={'sign-in__button'}
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

SignIn.propTypes = {
}

export default SignIn

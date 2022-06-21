import { useNavigate } from 'react-router-dom'

import useRequest from '../hooks/request'

const apiURL = 'http://localhost:3001/api/auth'
const loginRout = '/login'
const registrationRout = '/registration'
const logoutRout = '/logout'
let userId

export const useAuth = () => {
  const { request, loading } = useRequest()
  const navigate = useNavigate()

  const navigateToHome = () => navigate('/home')
  const navigateToLogin = () => navigate('/login')

  const authorization = async ({ username, password }) => {
    try {
      const response = await request(`${apiURL}${loginRout}`, 'POST', { username, password })
      const isError = !!response.error
      if (isError) {
        return { isError: response.error, message: '' }
      } else {
        saveUserId(response.userId)
        navigateToHome()
        return { message: '' }
      }
    } catch (error) {
      console.error(error)
    }
  }

  const registration = async ({ username, password }) => {
    try {
      const response = await request(`${apiURL}${registrationRout}`, 'POST', { username, password })
      const isError = !!response.error
      if (isError) {
        return { isError: response.error, message: '' }
      } else {
        saveUserId(response.userId)
        navigateToHome()
        return { message: '' }
      }
    } catch (error) {
      console.error('Error')
    }
  }

  const logout = async () => {
    try {
      const data = await request(`${apiURL}${logoutRout}`, 'POST', { userId: getUserId() })
      removeUserId()
      navigateToLogin()

    } catch (error) {

    }
  }

  const saveUserId = (newUserId) => {
    userId = newUserId
    localStorage.setItem('healthUserId', newUserId)
  }

  const getUserId = () => userId || localStorage.getItem('healthUserId')

  const removeUserId = () => {
    userId = undefined
    localStorage.removeItem('healthUserId')
  }

  const isAuthorized = () => !!getUserId()

  return { authorization, isAuthorized, registration, logout, loading }
}

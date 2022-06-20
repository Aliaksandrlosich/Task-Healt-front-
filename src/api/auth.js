import { useNavigate } from 'react-router-dom'

import useRequest from '../hooks/request'

const apiURL = 'http://localhost:3001/auth'
const loginRout = '/login'
const registrationRout = '/registration'
const logoutRout = '/logout'
let accessToken
let userId

export const useAuth = () => {
  const { request, loading } = useRequest()
  const navigate = useNavigate()

  const navigateToHome = () => navigate('/home')
  const authorization = async ({ username, password }) => {
    try {
      const data = await request(`${apiURL}${loginRout}`, 'POST', { username, password }, {})
      console.log(data)
    } catch (error) {

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
      console.error('server Error')
    }
  }

  const logout = async ({}) => {
    try {
      const data = await request(`${apiURL}${logoutRout}`, 'POST', {}, { header_access_token: '' })
      console.log(data)
    } catch (error) {

    }
  }

  const saveAccessToken = (newAccessToken) => {
    accessToken = newAccessToken
  }

  const saveUserId = (newUserId) => {
    userId = newUserId
    localStorage.setItem('healthUserId', newUserId)
  }

  const getUserId = () => userId || localStorage.getItem('healthUserId')

  const getAccessToken = () => accessToken

  const removeUserId = () => {
    userId = undefined
    localStorage.removeItem('healthUserId')
  }

  const isAuthorized = () => !!getUserId()

  const removeAccessToken = () => {
    accessToken = undefined
  }

  return { authorization, isAuthorized, registration, loading }
}

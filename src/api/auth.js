import useRequest from '../hooks/request'

const apiURL = 'http://localhost:3001/auth'
const loginRout = '/login'
const registrationRout = '/registration'
const logoutRout = '/logout'

export const useAuth = () => {
  const { request, loading } = useRequest()

  const authorization = async ({ username, password }) => {
    try {
      const data = await request(`${apiURL}${loginRout}`, 'POST', { username, password }, {})
      console.log(data)
    } catch (error) {

    }
  }

  const registration = async ({ username, password }) => {
    try {
      const { message, refreshToken, accessToken } = await request(`${apiURL}${registrationRout}`, 'POST', { username, hash: password })
      const isError = message === 'NOT_UNIQ_USERNAME'
      return { isError, message: '' }
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

  const saveRefreshToken = () => {

  }

  const saveAccessToken = () => {

  }

  const getRefreshToken = () => {

  }

  const getAccessToken = () => {

  }

  return { authorization, registration, loading }
}

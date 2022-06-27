import useRequest from '../hooks/request'

const apiURL = 'http://localhost:3001/api/users'

let username

export const useUsersApi = ({ userId, unauthorizedCB }) => {
 const { request, loading } = useRequest()
 const getUsername = async () => {
  try {
   let currentUsername = username || localStorage.getItem('healthUsername')
   if (!currentUsername) {
    const response = await request(`${apiURL}/${userId}`, 'GET')
    if(response.status === 401) {
     unauthorizedCB()
    } else {
     currentUsername = response.username
     saveUsername(response.username)
    }
   }
   return currentUsername
  } catch (e) {
   console.error('Error')
   console.error(e)
  }
 }

 const saveUsername = (newUsername) => {
  username = newUsername
  localStorage.setItem('healthUsername', newUsername)
 }

 const deleteUsername = () => {
  username = undefined
  localStorage.removeItem('healthUsername')
 }

 return { getUsername }
}

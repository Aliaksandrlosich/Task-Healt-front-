import useRequest from '../hooks/request'
import { useState } from 'react'

const apiURL = 'http://localhost:3001/api/medications'

export const useMedicationApi = ({ userId }) => {
 const { request, loading } = useRequest()
 const [isNeedUpdate, setIsNeedUpdate] = useState(true)
 const addNewMedication = async ({ name, description = '', initCount = 0, destinationCount = 0 }) => {
  const response = await request(`${apiURL}`, 'post', { name, description, initCount, destinationCount, userId })
  setIsNeedUpdate(true)
  return { error: response.error }
 }

 const getMedicationsList = async () => {
  const response = await request(`${apiURL}/`, 'get', null, { user_id: userId })

  setIsNeedUpdate(false)
  return response.medications
 }

 return { addNewMedication, getMedicationsList, loading, isNeedUpdate }
}
import useRequest from '../hooks/request'
import { useState } from 'react'

const apiURL = 'http://localhost:3001/api/medications'

export const useMedicationApi = ({ userId, unauthorizedCB }) => {
 const { request, loading } = useRequest()
 const [isNeedUpdate, setIsNeedUpdate] = useState(true)

 const addNewMedication = async ({ name, description = '', initCount = 0, destinationCount = 0 }) => {
  const response = await request(`${apiURL}`, 'POST', { name, description, initCount, destinationCount, userId })
  if (response.status === 401) {
   unauthorizedCB()
  } else {
   setIsNeedUpdate(true)
   return { error: response.error }
  }
 }

 const getMedicationsList = async () => {
  const response = await request(`${apiURL}/`, 'GET', null, { user_id: userId })
  if (response.status === 401) {
   unauthorizedCB()
  } else {
   setIsNeedUpdate(false)
   return response.medications
  }
 }

 const updateMedication = async ({ name, description, initCount, destinationCount, id }) => {
  const response = await request(`${apiURL}/${id}`, 'PATCH', {
   name, description, initCount, destinationCount
  })
  if (response.status === 401) {
   unauthorizedCB()
  } else {
   setIsNeedUpdate(true)
   return response
  }
 }

 const deleteMedication = async ({ id }) => {
  const response = await request(`${apiURL}/${id}`, 'DELETE')

  if (response.status === 401) {
   unauthorizedCB()
  } else {
   setIsNeedUpdate(true)
   return response
  }
 }

 return { addNewMedication, getMedicationsList, loading, updateMedication, isNeedUpdate, deleteMedication }
}

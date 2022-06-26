import useRequest from '../hooks/request'

const apiURL = 'http://localhost:3001/api/medications'

export const useMedicationApi = ({ userId }) => {
 const { request, loading } = useRequest()

 const addNewMedication = async ({ name, description = '', initCount = 0, destinationCount = 0 }) => {
  const response = await request(`${apiURL}/`, 'post', { name, description, initCount, destinationCount, userId })

  return {error: response.error}
 }

 return { addNewMedication }
}

import { memo } from 'react'

import Button from '../../components/button'
import { useAuth } from '../../api/auth'
import Table from '../../components/table'
import AddMedicationDialog from '../../components/addMedicationDialog'
import { useMedicationApi } from '../../api/medication'

const theadArray = [
 { name: 'Name' },
 { name: 'Description' },
 { name: 'Initial count' },
 { name: 'Destination count' }
]

const HomePage = memo(() => {
 const auth = useAuth()
 const medicationApi = useMedicationApi({ userId: auth.getUserId() })
 const data = [{ name: 'lemon', description: 'Hello', initCount: 200, destinationCount: 50 },
  { name: 'lemon', description: 'Hello', initCount: 200, destinationCount: 50 },
  { name: 'lemon', description: 'Hello', initCount: 200, destinationCount: 50 },
  { name: 'lemon', description: 'Hello', initCount: 200, destinationCount: 50 },
  { name: 'lemon', description: 'Hello', initCount: 200, destinationCount: 50 },
  { name: 'lemon', description: 'Hello', initCount: 200, destinationCount: 50 }]
 return (
  <div>
   <Table theadArray={theadArray} data={data}/>
   <AddMedicationDialog successApi={medicationApi.addNewMedication}/>
  </div>
 )
})

export default HomePage

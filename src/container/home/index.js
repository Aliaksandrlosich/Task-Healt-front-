import { memo, useEffect, useState } from 'react'

import { useAuth } from '../../api/auth'
import { useMedicationApi } from '../../api/medication'
import Table from '../../components/table'
import AddMedicationDialog from '../../components/addMedicationDialog'

const theadArray = [
 { name: 'Name' },
 { name: 'Description' },
 { name: 'Initial count' },
 { name: 'Destination count' }
]

const HomePage = memo(() => {
 const auth = useAuth()
 const medicationApi = useMedicationApi({ userId: auth.getUserId() })
 const [medicationsList, setMedicationsList] = useState([])
 useEffect(() => {
  if (auth.getUserId() && medicationApi.isNeedUpdate) {
   medicationApi.getMedicationsList().then(medications => setMedicationsList(medications))
  }
 }, [medicationApi.isNeedUpdate])

 return (
  <div>
   <Table theadArray={theadArray} data={medicationsList}/>
   <AddMedicationDialog successApi={medicationApi.addNewMedication}/>
  </div>
 )
})

export default HomePage

import { memo, useEffect, useState } from 'react'

import { useAuth } from '../../api/auth'
import { useMedicationApi } from '../../api/medication'
import Table from '../../components/table'
import MedicationDialog from '../../components/addMedicationDialog'

import './home.css'

const texts = {
 id: 'ID',
 name: 'Name',
 description: 'Description',
 initCount: 'Initial count',
 destinationCount: 'Destination count',
 detail: 'Detail'
}

const theadArray = [
 { name: texts.id, key: 'id' },
 { name: texts.name, key: 'name' },
 { name: texts.description, key: 'description' },
 { name: texts.initCount, key: 'initCount' },
 { name: texts.destinationCount, key: 'destinationCount' },
 { name: texts.detail, key: 'detail'}
]

const HomePage = memo(() => {
 const auth = useAuth()
 const medicationApi = useMedicationApi({ userId: auth.getUserId(), unauthorizedCB: auth.unauthorizedCB })
 const [medicationsList, setMedicationsList] = useState([])
 useEffect(() => {
  if (auth.getUserId() && medicationApi.isNeedUpdate) {
   medicationApi.getMedicationsList().then(medications => setMedicationsList(medications))
  }
 }, [medicationApi.isNeedUpdate])

 const emptyMessage = medicationsList.length === 0 && <p className="home__empty-text"> Medication list is empty</p>

 return (
  <div className="home__page">
   <Table theadArray={theadArray} data={medicationsList} updateMedication={medicationApi.updateMedication}/>
   {emptyMessage}
   <MedicationDialog successApi={medicationApi.addNewMedication}/>
  </div>
 )
})

export default HomePage

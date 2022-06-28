import { memo } from 'react'

import TableHead from './tableHead/index'
import TableRow from './tableRow'
import MedicationDialog from '../addMedicationDialog'
import Button from '../button'

import './table.css'

const texts = {
 update: 'Update',
 delete: 'Delete'
}

const Table = memo(({ data = [], theadArray, updateMedication = () => {}, deleteMedication = () => {} }) => {
 const addActionsButtons = (medication) => {
  return <>
   <MedicationDialog successApi={updateMedication} medication={medication}
                     openButtonText={texts.update}/>
   <Button onClick={(event) => onClickDeleteButton(event, medication.id)} text={texts.delete} variant={'text'}/>
  </>
 }

 const onClickDeleteButton = async (event, id) => {
  event.stopPropagation()
  deleteMedication && await deleteMedication({ id })
 }

 const destinationBlock = (medication) => {
  return <div className="table__destination-cell-content">
   <p className="table__ceil_destination">{medication.destinationCount}</p>
   <div className="table__destination-buttons" onClick={(event) => onChangeDestination(event, medication)}>
    <Button classes={'table__destination-button'} text={'+'} variant={'text'}
            dataType={'+'} size={'small'}/>
    <Button classes={'table__destination-button'} text={'-'} variant={'text'}
            dataType={'-'} size={'small'}/>
   </div>
  </div>
 }

 const onChangeDestination = (event, medication) => {
  event.stopPropagation()
  const type = event.target.getAttribute('data-type')
  const isAdding = type === '+'
  const destinationCount = isAdding
   ? ++medication.destinationCount
   : --medication.destinationCount

  updateMedication({ ...medication, destinationCount })
 }

 const rows = data.length > 0 && data.map((rawMedication) => {
  const medication = {
   name: rawMedication.name,
   description: rawMedication.description,
   initCount: rawMedication.initcount,
   destinationCount: rawMedication.destinationcount,
   id: rawMedication.id
  }
  const cells = theadArray.map(pattern => {
   let value = medication[pattern.key]
   if (pattern.key === 'destinationCount') {
    value = destinationBlock(medication)
   }
   if (pattern.key === 'actions') {
    value = addActionsButtons(medication)
   }
   return [medication.key, value]
  })

  return <TableRow key={medication.id} onClick={() => {}} data={cells} id={medication.id}/>
 })

 return (<table className="table__wrapper">
  <TableHead data={theadArray}/>
  <tbody className="table__body">
  {rows}
  </tbody>
 </table>)

})

export default Table

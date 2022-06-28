import { memo } from 'react'

import TableHead from './tableHead/index'

import './table.css'
import TableRow from './tableRow'
import MedicationDialog from '../addMedicationDialog'
import Button from '../button'

const texts = {
 update: 'Update',
 delete: 'Delete'
}

const Table = memo(({ data = [], theadArray, updateMedication = () => {}, deleteMedication = () => {} }) => {
 const addButtonsInLastCell = ({ cells, medication }) => {
  const lastCorrectCellsIndex = cells.length - 1
  cells[lastCorrectCellsIndex][1] = <>
   <MedicationDialog successApi={updateMedication} medication={medication}
                     openButtonText={texts.update}/>
   <Button onClick={(event) => onClickDeleteButton(event, medication.id)} text={texts.delete} variant={'text'}/>

  </>
  return cells
 }

 const onClickDeleteButton = async (event, id) => {
  event.stopPropagation()
  deleteMedication && await deleteMedication({ id })
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
   return [medication.key, medication[pattern.key]]
  })
  const correctCells = addButtonsInLastCell({ cells, medication })

  return <TableRow key={medication.id} onClick={() => {}} data={correctCells} id={medication.id}/>
 })

 return (<table className="table__wrapper">
  <TableHead data={theadArray}/>
  <tbody className="table__body">
  {rows}
  </tbody>
 </table>)

})

export default Table

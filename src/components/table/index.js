import { memo } from 'react'

import TableHead from './tableHead/index'

import './table.css'
import TableRow from './tableRow'
import MedicationDialog from '../addMedicationDialog'

const Table = memo(({ data = [], theadArray, updateMedication = ()=> {} }) => {
 const addButtonInLastCell = ({ cells, medication}) => {
  const lastCorrectCellsIndex = cells.length - 1
  cells[lastCorrectCellsIndex][1] = <MedicationDialog successApi={updateMedication} medication={medication}
                                                             openButtonText={'Update'}/>
  return cells
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
  const correctCells = addButtonInLastCell({ cells, medication })

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

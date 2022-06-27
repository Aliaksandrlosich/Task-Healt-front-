import { memo } from 'react'

import TableHead from './tableHead/index'

import './table.css'
import TableRow from './tableRow'

const Table = memo(({ data = [], theadArray }) => {
 const rows = data.length > 0 && data.map((object) => {
  const correctCells = theadArray.map(pattern => {
   return [pattern.key, object[pattern.key]]
  })
  const cells = Object.entries(object)
  return <TableRow key={object.id} onClick={() => {}} data={correctCells} id={object.id}/>
 })

 return (<table className="table__wrapper">
  <TableHead data={theadArray}/>
  <tbody className="table__body">
  {rows}
  </tbody>
 </table>)

})

export default Table

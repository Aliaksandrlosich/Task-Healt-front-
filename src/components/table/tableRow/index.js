import { memo } from 'react'
import TableCell from '../tableCell'

const TableRow = memo(({ data, onClick, id }) => {
 const cells = data.map(cell => {
  const [key, value] = cell
  return <TableCell key={key} id={key}>
   {value}
  </TableCell>
 })

 return (<tr className="table__row" id={id} onClick={onClick}>
  {cells}
 </tr>)
})

export default TableRow

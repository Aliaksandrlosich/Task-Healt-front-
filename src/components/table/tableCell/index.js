import { memo } from 'react'

import './tableCeil.css'

const TableCell = memo(({ children, className, id }) => {
 const tableCeilClassNames = `table__ceil ${className}`
 return (<td className={tableCeilClassNames} id={id}>
  {children}
 </td>)
})

export default TableCell

import { memo } from 'react'

import TableCell from '../tableCell/index'

import './tableHead.css'

const TableHead = memo(({ data = [], onClick = () => {} }) => {
 const theadRow = data?.map((headCeil) => {
  const { name, value } = headCeil
  return (<TableCell key={name} className="table__header-ceil" id={name} children={name}/>)

 })

 return (<thead onClick={onClick}>
 <tr>
  {theadRow}
 </tr>
 </thead>)
})

export default TableHead

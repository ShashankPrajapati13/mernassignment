import React from 'react'

const TableComponent = ({rows,data}) => {


  return (
    <div className='table'>
        <table>
    <tr>
      {rows.map((e)=>(
        <th>{e}</th>
      ))}
      
    </tr>
   {data}
  </table>
      </div>
  )
}

export default TableComponent
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TableComponent from './TableComponent';
import { useParams } from 'react-router-dom';
import { acyncGetData } from '../Redux/slice/userSlice';

const UserTable = () => {

    const data = useSelector(e=>e);

    const params = useParams()
    console.log(params.id)
    const id = params.id

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(acyncGetData(id))
    }, [])
    

    
    const userData = data.userData.userData
    console.log(data.userData.userData)
    const tableRows = userData?.map((elem)=>(
        <tr>
        <td>{elem.userId}</td>
        <td>{elem.id}</td>
        <td>{elem.title}</td>
        <td>{elem.completed?"true":"false"}</td>
      </tr>
      ))

      let rows = ["UserId","Id","Title","Completed"]

  return (
    <TableComponent rows={rows} data={tableRows}/>
  )
}

export default UserTable
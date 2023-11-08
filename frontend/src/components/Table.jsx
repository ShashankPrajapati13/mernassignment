import axios from '../axios/axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate } from 'react-router-dom'
import { acyncGetData } from '../Redux/slice/userSlice'
import TableComponent from './TableComponent'

const Table = () => {
    const [data, setData] = useState(null)

    const userData = useSelector(e=>e)
    console.log(userData.userData)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
      if(userData.userData.isAuthenticate===false) navigate("/")
      dataHandler()
    },[])
    
    const dataHandler = async ()=>{
      try {
        const data = await axios.get("/")
        setData(data.data)
        console.log(data)

  
      } catch (error) {
        console.log(error)
      }
    }
    var clickHandler = async (id)=>{
      try {
        dispatch(acyncGetData(id))
        navigate(`/user/${id}`)
      } catch (error) {
        
      }
    }
    let rows = ["Id","Name","Username","Email","Phone No."]
  
    const tableRows = data?.map((elem)=>(
      <tr>
      <th>{elem.id}</th>
      <th>{elem.name}</th>
      <th onClick={()=>clickHandler(elem.id)}>{elem.username}</th>
      <th>{elem.email}</th>
      <th>{elem.phone}</th>
    </tr>
    ))
  
  
    return (
      <TableComponent rows={rows} data={tableRows}/>
    )
}

export default Table
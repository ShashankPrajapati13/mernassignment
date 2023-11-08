
import React, { useEffect, useState } from 'react'
import Table from './components/Table.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTable from './components/UserTable.jsx';
import Login from './components/Login.jsx';


const App = () => {
  return(
    // <div>
    //   <Table/>
    // </div>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={< Table/>}/>
      <Route path="/user/:id" element={< UserTable/>}/>
    </Routes>
  )
}

export default App
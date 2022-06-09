import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import  Test  from './Test.jsx'
import Try from './Try.jsx'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Allsubject from './Allsubject.jsx'
import Asubject from './Asubject.jsx'
import Header from './Header.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (



    <BrowserRouter>



  <Header></Header>

  <Routes> 

    <Route path="/"  element={<Try />}></Route>
    <Route path ="/register" element={<Test />}></Route>
    <Route path ="/allsubject" element={<Allsubject/>}></Route>
    <Route path ="/Sujet" element={<Asubject/>}></Route>

  </Routes>
  
  </BrowserRouter>

  )

}

export default App

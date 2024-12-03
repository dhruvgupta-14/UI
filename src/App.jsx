

import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import EmailVerified from './pages/EmailVerified'
import User from './pages/User'


function App() {
  
  return (
   <BrowserRouter>
   <Routes>
    <Route path={"/"} element={<Home></Home>}></Route>
    <Route path={"/email"} element={<EmailVerified></EmailVerified>}></Route>
    <Route path={"/user"} element={<User></User>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App

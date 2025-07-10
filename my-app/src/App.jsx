import { useState } from 'react'
import './index.css'; 


import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ProtectedRoute from './routes/ProtectedRoute';
import LoginPage from './Pages/LoginPage';



function App() {
 

  return (
    <Routes>
<Route path='/' element={<MainLayout/>} >
<Route index element={<HomePage/>}/>
<Route path='about' element={<ProtectedRoute><AboutPage/></ProtectedRoute>}/>
<Route path='contact' element={<ContactPage/>}/>
<Route path='login' element={<LoginPage/>}/>
</Route>

    </Routes>
  )
}

export default App

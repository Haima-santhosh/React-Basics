import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
   <>
   <Header />
   <main>
    <Outlet />
   </main>
   </>
  )
}

export default MainLayout
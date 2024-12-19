import React from 'react'
import './App.css'
import SiteRoutes from './Routes/SiteRoutes.jsx'
import Navbar from './components/NavBar/Navbar.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <SiteRoutes />
    </>
  )
}

export default App
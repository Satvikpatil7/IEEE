import React from 'react'
import Home from '../components/Home/Home'
import { Route , Routes } from 'react-router-dom'
import UnderConstruction from '../components/UnderConstruction/UnderConstruction'

const SiteRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<UnderConstruction/>} />
            <Route path='/events' element={<UnderConstruction/>} />
            <Route path='/achievements' element={<UnderConstruction/>} />
            <Route path='/execoms' element={<UnderConstruction/>} />
            <Route path='/societies' element={<UnderConstruction/>} />
            <Route path='/affinities' element={<UnderConstruction/>} />
            <Route path='/membership' element={<UnderConstruction/>} />
            <Route path='/photo-gallery' element={<UnderConstruction/>} />
            <Route path='/*' element={<UnderConstruction />} />
        </Routes>
    </>
  )
}

export default SiteRoutes
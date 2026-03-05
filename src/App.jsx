import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarVan from './components/NavbarVan'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetails from './pages/VanDetails'
import RoutePage from './pages/RoutePage'
import Layqout from './components/Layout'
import Income from './pages/host/Income'
import  Reviews from './pages/host/Reviews'
import  Dashboard from './pages/host/Dashboard'
import  HostVans from './pages/host/HostVans'
import HostVansDetails from './pages/HostVansDetails'
import HostLayout from './components/HostLayout'
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhotos from './pages/host/HostVanPhotos'
import HostVaninfo from './pages/host/HostVaninfo'
import NotPagefound from './pages/NotPagefound'


function App() {

  return (
    <BrowserRouter cl>
      
      <div >

        
        <main className="grow">
          <Routes>

            <Route path='/'  element={<Layqout/>}>

              <Route path='about' element={<About />} />
              <Route index element={<Home />} />
              <Route path='vans' element={<Vans />} />
              <Route path='vans/:id' element={<VanDetails />}/>
              <Route path='vans/:id/Routecomponent' element={<RoutePage/>}></Route>

             
              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route  path="income" element={<Income />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="vans/:id" element={<HostVansDetails />} >
                  <Route path="price" element={<HostVanPricing />} />
                  <Route path="photos" element={<HostVanPhotos/>} />
                  <Route index element={<HostVaninfo/>} />
                </Route>
                <Route path="reviews" element={<Reviews />} />
              </Route>


              <Route path='*'  element={<NotPagefound/>}/>
            </Route>
          </Routes>
        </main>

       

      </div>
    </BrowserRouter>
  )
}

export default App
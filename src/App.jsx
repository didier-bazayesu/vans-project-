import React from 'react'
import { BrowserRouter, Routes, Route,createRoutesFromElements, createBrowserRouter,RouterProvider } from 'react-router-dom'
import NavbarVan from './components/NavbarVan'
import Home from './pages/Home'
import About from './pages/About'
import Vans,{loader as vansLoader} from './pages/Vans'
import VanDetails,{loader as vanDetailsLoader} from './pages/VanDetails'


import Layqout from './components/Layout'
import Income from './pages/host/Income'
import  Reviews from './pages/host/Reviews'
import  Dashboard from './pages/host/Dashboard'
import  HostVans,{loader as hostVans} from './pages/host/HostVans'
import HostVansDetails ,{loader as loaderHostVansDetails} from './pages/HostVansDetails'
import HostLayout from './components/HostLayout'
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhotos from './pages/host/HostVanPhotos'
import HostVaninfo from './pages/host/HostVaninfo'
import NotPagefound from './pages/NotPagefound'
import Error from './components/Error'
import Login,{loader as loaderLogin} from './pages/Login'

import ProtectedRoute from './components/ProtectedRoute'
import AuthRequired from './auth/AuthRequired'




function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layqout />} errorElement={<Error />}>

  {/* Public routes */}
  <Route index element={<Home />} />
  <Route path='about' element={<About />} />
  <Route path='login' element={<Login />} loader={loaderLogin} />
  
  {/* Vans routes */}
  <Route path='vans' element={<Vans />} loader={vansLoader} />
  <Route 
    path='vans/:id' 
    element={<VanDetails />} 
    loader={vanDetailsLoader}
  />
 

  {/* Host routes */}
  <Route element={<AuthRequired />}>  // 👈 no path needed
    <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} loader={hostVans} />
        <Route path="vans/:id" element={<HostVansDetails />} loader={loaderHostVansDetails}>
            <Route index element={<HostVaninfo />} />
            <Route path="price" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
    </Route>
</Route>

  {/* Fallback route */}
  <Route path='*' element={<NotPagefound />} />

</Route>


  ))

  return (
    
      
      <div >        
        <main className="grow">
             <RouterProvider router={router} />
        </main>

       

      </div>
   
  )
}

export default App
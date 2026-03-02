import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavbarVan from './components/NavbarVan'
import Home from './pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarVan/>
        <Routes>
           <Route path='/' element={<Home/>}/>
        </Routes>
       
        
      
      </BrowserRouter>
    </>
    
  )
}

export default App
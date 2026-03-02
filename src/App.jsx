import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavbarVan from './components/NavbarVan'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarVan/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='about' element={<About/>} />
        </Routes>
       
        
        <footer className='bg-[#252525] h-20 flex items-center justify-center text-white'> &copy; {new Date().getFullYear()} Bazayesu Didier.#VANLIFE </footer>

      </BrowserRouter>
    </>
    
  )
}

export default App
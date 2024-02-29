import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AboutUs from './Pages/AboutUs'
import CheckOut from './Pages/CheckOut'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
import NotFound from './Pages/NotFound'
import Orderonline from './Pages/OrderOnline'
import Reservation from './Pages/Reservation'
import Home from './Pages/Home'

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='*' element={< NotFound/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/reservation' element={<Reservation/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/orderonline' element={<Orderonline/>}/>
    <Route path='/checkout' element={<CheckOut/>}/>
   
  </Routes>
  </>
  )
}

export default App
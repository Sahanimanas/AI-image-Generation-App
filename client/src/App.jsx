import React from 'react'
import { Route,Routes } from 'react-router-dom'


import  Home  from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'




function App() {
 
  
  return (
    // for complete app css
    <div className='px-30 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b
     from-teal-50 to-orange-100'>
      <Navbar/>
      <Routes>

        <Route path = '/' element = {  <Home/>}/>
        <Route path = '/result' element = { <Result/>}/>
        <Route path = '/buy' element = {<BuyCredit/>} />
    
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App

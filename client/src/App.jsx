import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import  Home  from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App() {
 const {setShowLogin,user,showLogin} = useContext(AppContext);
  
  return (
    // for complete app css
    <div className='px-30 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b
     from-teal-50 to-orange-100'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      {showLogin && <Login/>}
      <Routes>

        <Route path = '/' element = {  <Home/>}/>
        {  user && <Route path = '/result' element = { <Result/>}/>}
        
       
        <Route path = '/buy' element = {<BuyCredit/>} />
    
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App

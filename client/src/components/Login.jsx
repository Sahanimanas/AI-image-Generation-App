import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';
import {motion} from 'framer-motion'
import axios from 'axios'
import {  toast } from 'react-toastify';

const Login =  () => {
    const [state,setState] = useState('Login')
     const {setShowLogin,backend_url ,setToken,setUser} = useContext(AppContext);
     const [name,setName] = useState('');
     const [email,setEmail] = useState('');
     const [password,setPassword] = useState('');


    const  onSubmitHandler =  async (e)=>{
        e.preventDefault()
         
    try{
     if(state === 'Login'){
      const {data} = await axios.post(backend_url + '/api/user/login',{email,password})
      if(data.success){
         setToken(data.token)
         setUser(data.user)
         localStorage.setItem('token',data.token);
         setShowLogin(false)
        
      }
      else{
       toast.error(data.message)
      } 
     }
     else{
      const {data}= await axios.post(backend_url+'/api/user/register',{name,email,password})
      if(data.success){
        setToken(data.token);
        setUser(data.user)
        localStorage.setItem('token',data.token);
        setShowLogin(false)
       alert(data.success)
     }
     else{
        toast.error(data.message)
      } 
     }
    } catch(error){
      toast.error(error.message)
    }
    }
    // console.log(backend_url+'/api/user/register')

     useEffect(()=>{
          document.body.style.overflow = 'hidden';
          return()=>{
          document.body.style.overflow = 'unset';
          }
     },[])


  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-10 backdrop-blur-sm
     bg-black/30 flex justify-center items-center'>
       
       <motion.form onSubmit={onSubmitHandler}
        initial = {{opacity:0,y:-20}}
        viewport={{once:true}}
     transistion={{duration:1}}
     whileInView={{opacity:1,y:0}}
       className=' relative bg-white p-10 rounded-xl text-slate-500'>

        <h1 className='text-center text-2xl text-neutral-700 font-medium mb-2'> {state === 'Login'?'Login':'Sign Up'}</h1>
        <p className='text-sm' >Welcome back ! Please sign in to continue</p>
        {state!=='Login'?<div className=' border px-6 py-2 flex items-center gap-2 rounded-full mt-5 border-gray-300'>
            <img src={assets.profile_icon} className='w-5' alt="" />
            <input type="text" placeholder='Full Name'  required onChange={e=>setName(e.target.value)} value={name}
            className='outline-none text-sm '/>
        </div>:""}
        

        <div className=' border px-6 py-2 flex items-center gap-2 rounded-full mt-5 border-gray-300'>
            <img src={assets.email_icon}  alt="" />
            <input type="text" placeholder='Email id'  required onChange={e=>setEmail(e.target.value)} value={email}
            className='outline-none text-sm '/>
        </div>

        <div className=' border px-6 py-2 flex items-center gap-2 rounded-full mt-5 border-gray-300'>
            <img src={assets.lock_icon}  alt="" />
            <input type="text" placeholder='Password'  required onChange={(e)=>setPassword(e.target.value)} value={password}
            className='outline-none text-sm '/>
        </div>
        <p className=' text-sm my-4 text-blue-500 cursor-pointer hover:scale-105 transition-all'>Forgot password?</p>
        <button type='submit' className='bg-blue-600 w-full text-white py-2 rounded-full cursor-pointer '>{state==='Login'?'login':'create account'} </button>
    
         
         {state !== 'Login'?
           <p className='mt-5 text-center text-sm '>Already have an account? 
           <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')}> Login</span></p>
           :<p className='mt-5 text-center text-sm '>Don't have an account?
             <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}> Sign Up</span></p>
}
       
            <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" className='absolute top-5 right-5 cursor-pointer'/>
        </motion.form>
     </div>
  )
}

export default Login
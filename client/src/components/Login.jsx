import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';

const Login = () => {
    const [state,setState] = useState('Login');
     const {setShowLogin} = useContext(AppContext);
     useEffect(()=>{
          document.body.style.overflow = 'hidden';
          return()=>{
          document.body.style.overflow = 'unset';
          }
     },[])
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 z-10 backdrop-blur-sm
     bg-black/30 flex justify-center items-center'>
       
       <form className=' relative bg-white p-10 rounded-xl text-slate-500'>

        <h1 className='text-center text-2xl text-neutral-700 font-medium mb-2'> {state === 'Login'?'Login':'Sign Up'}</h1>
        <p className='text-sm' >Welcome back ! Please sign in to continue</p>
        {state!=='Login'?<div className=' border px-6 py-2 flex items-center gap-2 rounded-full mt-5 border-gray-300'>
            <img src={assets.profile_icon} className='w-5' alt="" />
            <input type="text" placeholder='Full Name'  required
            className='outline-none text-sm '/>
        </div>:""}
        

        <div className=' border px-6 py-2 flex items-center gap-2 rounded-full mt-5 border-gray-300'>
            <img src={assets.email_icon}  alt="" />
            <input type="text" placeholder='Email id'  required
            className='outline-none text-sm '/>
        </div>

        <div className=' border px-6 py-2 flex items-center gap-2 rounded-full mt-5 border-gray-300'>
            <img src={assets.lock_icon}  alt="" />
            <input type="text" placeholder='Password'  required
            className='outline-none text-sm '/>
        </div>
        <p className=' text-sm my-4 text-blue-500 cursor-pointer hover:scale-105 transition-all'>Forgot password?</p>
        <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state==='Login'?'login':'create account'} </button>
    
         <p className='mt-5 text-center text-sm '>Don't have an account?
             <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}> Sign Up</span></p>
         {state !== 'Login'?
           <p className='mt-5 text-center text-sm '>Already have an account? 
           <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')}> Login</span></p>
           :""
}
       
            <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" className='absolute top-5 right-5 cursor-pointer'/>
        </form>
     </div>
  )
}

export default Login
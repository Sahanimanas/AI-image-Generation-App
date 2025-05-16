import { createContext, useEffect } from 'react'
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const AppContext = createContext()

const AppContextprovider = (props) =>{
    const [user,setUser]  = useState(null); // check form user login or not
    const [showLogin,setShowLogin] = useState(false);
    const backend_url = import.meta.env.VITE_API_URL;
    // console.log(backend_url)
     const [token,setToken] = useState(localStorage.getItem('token'));
     const [credit,setCredit] = useState()
      const navigate = useNavigate()
     const loadcreditdata = async () => {
         try{
            const {data} = await axios.get(backend_url + '/api/user/credits', {headers:{token}});
           
            if(data.success){
                setCredit(data.credits)
                 setUser(data.user)
                toast.success(credit)
            }else{
                toast.error('no data')
            }

         }catch(error){
            toast.error(error)
         }
      }

      const generateImage = async (prompt) =>{
        try{
            const {data} = await axios.post(backend_url + '/api/image/generate-image',{prompt},{headers:{token}})
               if(data.success){
                loadcreditdata()
                return data.resultimage
               }
               else{
                toast.error(data.error)
                loadcreditdata()
                if(data.creditbalance === 0){
                    navigate('/buy')
                }

               }
               
        }catch(err){
        toast.error(err.message)
        }
      }

     const logout = ()=>{
         localStorage.removeItem('token');
         setUser(null);
         setToken('')
     }

    
     useEffect(()=>{
          if(token){
            loadcreditdata()
          }
     },[token])
      


    const value = {
      generateImage, logout,loadcreditdata, user,setUser,setShowLogin,showLogin,backend_url,token,setToken,credit,setCredit
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextprovider;
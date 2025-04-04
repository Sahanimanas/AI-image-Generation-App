import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
const Navbar = () => {

    const {user,setShowLogin}  = useContext(AppContext)
    const navigate = useNavigate()

  return (
    <div className=' relative rounded-full p-7 h-12  top-3    flex items-center justify-between text-center align-center py-4 bg-gradient-to-b
     from-blue-300 to-orange-100'>
       <Link
       to='/'> <img src={assets.logo} alt=" " className='w-28 sm:w-32 lg:w-40' />
       </Link>
       <div>
        {user?
        <div className='flex items-center gap-2 sm:gap-3'>
          <button className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 sm:py-3 rounded-full hover:scale-105 transition-all duration-200'>
            <img src={assets.credit_star} alt="" />
            <p className='text-xs sm:text-sm font-medium '>Credits left : 50</p>
            </button>
            <p className='text-xs sm:text-sm '>Hi, Wick</p>

            <div className='relative group'>
              <img src={assets.profile_icon} alt="" className='w-10 drop-shadow'/>
              <div className='absolute hidden group-hover:block
              top-0 right-0 z-10 text-black rounded pt-12'>
                <ul className='list-none bg-white hover:bg-blue-100   text-sm rounded m-0 px-3 py-1'>
                  <li className='cursor-pointer 
                  '>Logout</li>
                </ul>
              </div>
              
            </div>
        </div>
        :
        <div className=' flex items-center gap-2 sm:gap-5 '>
            <p onClick={()=>{navigate('/buy')}} className='cursor-pointer'>Pricing</p>
            <button onClick={()=>setShowLogin(true)} className='bg-zinc-800 cursor-pointer text-white px-7 py-2 sm:px-10 text-sm  rounded-full '>Login</button>
        </div>
        }
        
       
       </div>

    </div> 
  )
}

export default Navbar
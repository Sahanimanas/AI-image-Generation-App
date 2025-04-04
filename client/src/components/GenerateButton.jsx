import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const GenerateButton = () => {
  const navigate = useNavigate();
  const {user , setShowLogin} = useContext(AppContext);
function onclickHandler(){
    if(user){
      navigate('/result');
    }else{
        setShowLogin(true)
    }
}
  return (
    <div className='pb-16 text-center'>
        <h1  className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold
         text-neutral py-6 md:py-16'>See the magic. try now</h1>
        <button className='inline-flex items-center gap-2 px-12 py-2 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500'
        onClick={onclickHandler}>
            Generate Images
            <img src={assets.star_group} alt="" className='h-6' />
        </button>
    </div>
  )
}

export default GenerateButton
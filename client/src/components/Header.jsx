import React from 'react'
import {assets} from '../assets/assets'
const Header = () => {
  return (
    <div className='flex flex-col justify-center mt-20 items-center text-center my-20'>
        <div className='inline-flex  text-stone-500 border border-neutral-500 py-1 gap-2 bg-white px-6 rounded-full mx-auto justify-center text-xs sm:text-sm '>
            <p>Best text to image generator</p>
            <img src={assets.star_icon} alt="" />

        </div>
        <h1 className='text-4xl max-w-[300px] sm:text-6xl sm:max-w-[590px] mx-auto mt-10 text-center '>Turn text to <span className='text-blue-600'>image</span> , in seconds.</h1>
      <p className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity with AI. Turn your imagination into visual art ib secinds -  just type, and  watch the magic happen</p>
    <button className='sm:text-lg text-white mt-8 px-12 py-2.5 flex item-center bg-black w-auto gap-2 rounded-full'>Generate Images
        <img src={assets.star_group} alt="" className='h-6'/>
    </button>
    <div className='flex flex-wrap justify-center mt-16 gap-3'>
        {Array(6).fill('').map((item,index)=>{
            return(
        <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer mx-sm:w-10 '
         src={
            index%2=== 0 ? 
            assets.sample_img_1:
            assets.sample_img_2
           } 
            key={index} width={70}/>)
        })}
    </div>
    <p  className='mt-2 text-neutral-600'>Generated Images from imagify</p>
    
    </div>
  ) 
}

export default Header
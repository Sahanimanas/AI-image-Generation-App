import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p  className='text-gray-500 mb-8'>Turn Imagination into visuals</p>
    
    <div className='flex flex-col gap-5 md:gap-14 md:flex-row sm:justify-center sm:items-center'>
        <img src={assets.sample_img_1} className='w-80 xl:w-96 rounded-lg ' alt="" />
        <div>
            <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing  the Ai-Powered text to Imagr generator</h2>
               <p className='text-gray-600 mb-4'>
                Easily bring your ideas to life with our free AI imsge generator. 
                Wheather you need stunnig visuals or unique 
                imagery, our tool transform your text into eye-
                catching images eith jsut a few clicks . Imagine it, describe it , and watch it come into life instantly
                . </p>
                <p className='text-gray-600 mb-4'>Simply type in a text and our cutting edge AI will generate high-quality images is seconds
                </p>
              
       
        </div>
    </div>
    </div>
  )
}

export default Description
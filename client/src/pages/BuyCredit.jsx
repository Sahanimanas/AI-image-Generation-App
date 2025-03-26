import React from 'react'
import { assets, plans } from '../assets/assets'

const BuyCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
        <button className='border cursor-pointer border-gray-400 px-10 py-2 rounded-full mb-6 '>
        our plans
        </button>
       
        <h1 className='text-center text-3xl font-medium mb-6 sm:text-blue-500 sm:mb-10'>Choose the plan</h1>
     <div>
      {plans.map((plan,index)=>(
          <div key = {index}>
            <img src = {assets.lock_icon}/>
            <p>{plan.id}</p>
            <p>{plan.desc}</p>
            <p>${plan.price}/{plan.credits} credits</p>
            </div>
      ))}
     </div>
    </div>
  )
}

export default BuyCredit
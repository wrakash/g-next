import React from 'react'
import { StarRating } from './StarRating'

export function Experience() {
  return (
    <div className='bg-white px-20 py-16 space-y-8 text-center'>
        <h3 className='text-black text-4xl font-extrabold'> We are Bangalore's go-to destination for furniture and home appliances rental needs </h3>
        <div className='grid grid-cols-5 place-items-center'>
             <div className='text-center space-y-2'>
                 <p className='text-primary text-4xl'>08+</p>
                 <p className='text-black text-base'>Years of <br/> Service</p>
             </div>

             <div className='w-0.5 h-full bg-gray-300'/>

             <div className='text-center space-y-2'>
                 <p className='text-primary text-4xl'>80,000+</p>
                 <p className='text-black text-base'>Happy <br/> Customers</p>
             </div>

             <div className='w-0.5 h-full bg-gray-300'/>


             <div className='text-center space-y-2'>
                 <p className='text-primary text-4xl'>4.2+</p>
                 <a href='' className='text-blue-500'>
                     <p className='text-base'>Google rating <br/> 4,000+ reviews</p>
                </a>
                <StarRating rating={4}/>
             </div>
        </div>
    </div>
  )
}


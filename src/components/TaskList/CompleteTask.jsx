import React from 'react'

const CompleteTask = () => {
  return (
       <div className='shrink-0 h-full bg-blue-400 w-[350px] py-5 px-5 rounded-xl '>

        <div className='flex justify-between items-center py-3 '>
            <h3 className='bg-red-500 px-3 py-1  rounded'>High</h3>
            <h4 className='font-semibold text-1xl'>20 FEB 2026</h4>

        </div>
        <h2 className='mt-5 text-2xl font-bold '>Make A Youtube Video</h2>
        <p className='mt-3 leading-5.5 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempore ut dignissimos? Quisquam, optio libero!</p>
        <div className='mt-2'>
          <button  className='w-full'>Completed</button>
          
          </div>


      </div>
  )
}

export default CompleteTask

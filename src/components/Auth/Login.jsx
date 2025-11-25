import React from 'react'
import { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const onSubmiHandler =(e)=>{
         e.preventDefault()
         setEmail('')
         setPassword('')
         console.log(`Email is:${email}`);
         console.log(`And password is:${password}`);
  }


  return (
    <div className='h-screen bg-black w-screen flex justify-center items-center' >
      <div className='border-emerald-600 rounded-xl border-2' >
        <form onSubmit={(e)=>{
              onSubmiHandler(e)
        }} className='flex flex-col items-center justify-center gap-5  p-20' >
          <input onChange={(e) =>{
              setEmail(e.target.value)
          }} value = {email}
           className= 'rounded-full text-white  placeholder:font-light outline-none px-8 py-3 place  bg-transparent border-2 border-emerald-500'  placeholder = "Enter your email" required type = "text " />
          <input onChange={(e)=>{
             setPassword(e.target.value)
          }}
           className='rounded-full text-white fcous:text-white   outline-none placeholder:font-light    bg-transparent border-2 border-emerald-500 px-8  py-3 ' value ={password} placeholder ="Enter password" required type="password"  />
          <button    className='bg-emerald-500 cursor-pointer   rounded-full  text-white px-5 py-3 font-semibold'>Log In</button>
        </form>

      </div>
      
    </div>
  )
}

export default Login

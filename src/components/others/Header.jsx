import React from 'react'

const Header = () => {

  const logOutUser = () =>{
    localStorage.setItem("loggedInUser",'')
    window.location.reload()
  }

  return (
    <div className='flex items-center text-white justify-between'>
        <h1 className='text-2xl font-semibold' >Hello, <br/> <span className='text-4xl font-mono '>Username👋</span></h1>
        <button onClick={logOutUser} className=' cursor-pointer rounded-md bg-red-500 px-5 font-mono text-1xl py-2 text-white '>Log Out</button>
      
    </div>
  )
}

export default Header

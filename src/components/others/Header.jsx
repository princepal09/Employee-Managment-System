import React from 'react'

const Header = (props) => {

  const logOutUser = () =>{
    localStorage.setItem("loggedInUser",'')
    props.changeUser('')
  }

  return (
    <div className='flex items-center justify-between text-white w-full'>

      {/* Left: Greeting */}
      <div className='flex flex-col'>
        <h1 className='text-2xl font-semibold tracking-tight'>
          Hello,
        </h1>

        <span className='text-4xl font-mono font-bold bg-linear-to-r from-red-400 to-red-600 bg-clip-text text-transparent drop-shadow-sm'>
          username
        </span>

        <p className="text-sm text-gray-400 mt-1">
          Welcome back to your dashboard
        </p>
      </div>

      {/* Right: Logout Button */}
      <button
        onClick={logOutUser}
        className='cursor-pointer bg-red-500/90 hover:bg-red-600 active:scale-95 
                   transition-all px-6 py-2 rounded-lg font-mono font-semibold 
                   shadow-md border border-red-400/40'
      >
        Log Out
      </button>

    </div>
  )
}

export default Header

import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeDashboard = () => {
  return (
    <div className='h-screen text-white  bg-[#1c1c1c] w-screen p-10'>
      <Header/>
      <TaskListNumber/>
      <TaskList/>


    </div>
  )
}

export default EmployeDashboard

import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeDashboard = ({data}) => {
  // console.log(props.data);
  

  return (
    <div className='h-screen text-white  bg-[#1c1c1c] w-screen p-10'>
      <Header data = {data} />
      <TaskListNumber data = {data} />
      <TaskList data = {data} />


    </div>
  )
}

export default EmployeDashboard

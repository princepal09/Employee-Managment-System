import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeDashboard = (props) => {
  // console.log(props.data);
  

  return (
    <div className='h-screen text-white  bg-[#1c1c1c] w-screen p-10'>
      <Header changeUser = {props.changeUser} data = {props.data} />
      <TaskListNumber data = {props.data} />
      <TaskList data = {props.data} />


    </div>
  )
}

export default EmployeDashboard

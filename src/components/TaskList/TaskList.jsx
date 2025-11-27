import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='task' className='h-[55%] overflow-x-auto  flex items-center py-5 gap-5 flex-nowrap justify-start mt-10  '>
     {data.tasks.map( (elem,idx) =>{
       console.log(elem);
       if(elem.active){
          return <AcceptTask key  = {idx}/>
         }
         if(elem.newTask){
          return <NewTask key  = {idx}/>
         }
         if(elem.completed){
          return <CompleteTask key  = {idx}/>
         }
         if(elem.failed){
          return <FailedTask key  = {idx}/>
         }
     } )}
      
 
      
     
    </div>
  )
}

export default TaskList

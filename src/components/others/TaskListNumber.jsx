import React from 'react'

const TaskListNumber = ({data}) => {
  const cards = [
    {color:"bg-yellow-400",label:"New Task",  taskCount : data?.taskCount?.newTask},
    {color:"bg-green-400",label:"Active ", taskCount : data?.taskCount?.active},
    {color:"bg-blue-400",label:"Completed ", taskCount : data?.taskCount?.completed},
    {color:"bg-red-400",label:"Failed ", taskCount : data?.taskCount?.failed}
  ]
  return (
    <div className='flex  gap-5 justify-between mt-10'>

      
     {cards.map( (elem,idx) =>{
        return(
                <div key={idx} className={`w-[35%] py-8 px-10 rounded-xl ${elem.color} `  } >
        <h2 className='text-3xl font-semibold '>{elem.taskCount}</h2>
        <h3 className='text-xl font-medium '>{elem.label}</h3>
      </div>
        )
                
     } ) }
      
    </div>
  ) 
}

export default TaskListNumber

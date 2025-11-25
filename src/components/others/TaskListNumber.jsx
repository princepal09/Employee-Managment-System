import React from 'react'

const TaskListNumber = () => {
  const cards = [
    {color:"bg-red-400",label:"New Task"},
    {color:"bg-blue-400",label:"New Task"},
    {color:"bg-green-400",label:"New Task"},
    {color:"bg-yellow-400",label:"New Task"}
  ]
  return (
    <div className='flex  gap-5 justify-between mt-10'>

      
     {cards.map( (elem,idx) =>{
        return(
                <div key={idx} className={`w-[35%] py-8 px-10 rounded-xl ${elem.color} `  } >
        <h2 className='text-3xl font-semibold '>{idx}</h2>
        <h3 className='text-xl font-medium '>{elem.label}</h3>
      </div>
        )
                
     } ) }
      
    </div>
  ) 
}

export default TaskListNumber

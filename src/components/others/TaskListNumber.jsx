import React from "react";

const TaskListNumber = ({ data }) => {
  const cards = [
    { color: "bg-yellow-400", label: "New Task", taskCount: data?.taskCount?.newTask },
    { color: "bg-green-400", label: "Active", taskCount: data?.taskCount?.active },
    { color: "bg-blue-400", label: "Completed", taskCount: data?.taskCount?.completed },
    { color: "bg-red-400", label: "Failed", taskCount: data?.taskCount?.failed },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

      {cards.map((elem, idx) => (
        <div
          key={idx}
          className={`
            ${elem.color}
            rounded-2xl 
            p-8 
            shadow-md 
            text-white 
            transition 
            hover:shadow-xl 
            hover:-translate-y-1 
            cursor-pointer
          `}
        >
          <h2 className="text-4xl font-bold">{elem.taskCount}</h2>
          <h3 className="text-xl font-medium mt-2">{elem.label}</h3>
        </div>
      ))}

    </div>
  );
};

export default TaskListNumber;

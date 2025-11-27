import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext);
  
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(""); 
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

    const [newtask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({title,date,assign,category,description,active:false,newTask:true,failed:false,completed:false})
    //  console.log(task);
    const data = userData.employees
    console.log(data);
    data.forEach( (elem)=>{
      if(assign == elem.firstname){
       elem.tasks.push(newtask)
       elem.taskCount.newTask =elem.taskCount.newTask +1
      //  console.log(elem);

      }
    } )



localStorage.setItem('employees',JSON.stringify(data))
    setTitle('')
    setDate('')
    setAssign('')
    setCategory('')
    setDescription('')
    

  };

  return (
    <div className="p-7 bg-[#1c1c1c] mt-7 ro unded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex   "
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-md text-gray-300 mb-0.5">Task</h3>
            <input value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="text-md  py-1   px-2 w-4/5 text-white rounded outline-none border-2 border-gray-400  bg-transparent"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-md text-gray-300 mb-0.5">Date</h3>
            <input value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="date"
              className="text-md py-1 px-2 text-white rounded w-4/5 outline-none border-2 border-gray-400 bg-transparent"
            />
          </div>

          <div className="mt-4">
            <h3 className="text-md text-gray-300 mb-0.5">Assign to</h3>
            <input value={assign}
              onChange={(e) => {
                setAssign(e.target.value);
              }}
              className="text-md py-1 px-2 w-4/5 text-white rounded outline-none border-2 border-gray-400 bg-transparent"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div className="mt-4">
            <h3 className="text-md text-gray-300 mb-0.5">Category</h3>
            <input value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="text-md py-1 px-2 w-4/5 text-white rounded outline-none border-2 border-gray-400 bg-transparent"
              type="text "
              placeholder="Design, dev, etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col  items-start">
          <h3 className="text-gray-300 mb-0.5  text-md   ">Description</h3>
          <textarea value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="border-white w-full h-44 text-md rounded text-white  border-2 woutline-none bg-transparent   "
            name=""
            cols="30"
            rows="10"
            id=""
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-md mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [newtask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      title,
      date,
      assign,
      category,
      description,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    });

    const data = userData.employees;

    data.forEach((elem) => {
      if (assign == elem.firstname) {
        elem.tasks.push(newtask);
        elem.taskCount.newTask = elem.taskCount.newTask + 1;
      }
    });

    localStorage.setItem("employees", JSON.stringify(data));

    setTitle("");
    setDate("");
    setAssign("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="p-7 mt-7 rounded-xl bg-[#0c0c0d] border border-[#1a1a1a] shadow-[0_0_30px_rgba(255,0,0,0.1)]">
      {/* Red Header Strip */}
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-white bg-[#d40000] px-4 py-2 rounded-md w-fit shadow-md">
          Create New Task
        </h2>
      </div>

      <form
        onSubmit={submitHandler}
        className="flex flex-col lg:flex-row gap-8"
      >
        {/* LEFT SIDE */}
        <div className="lg:w-1/2 space-y-5">
          {/* Task */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">Task</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#141416] border border-[#272727] text-white px-4 py-3 rounded-md
              focus:outline-none focus:ring-2 focus:ring-[#ff3b3b] placeholder-gray-500"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>

          {/* Date + Assign */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Date */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">Date</label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className="w-full bg-[#141416] border border-[#272727] text-white px-4 py-3 rounded-md
                focus:outline-none focus:ring-2 focus:ring-[#ff3b3b]"
              />
            </div>

            {/* Assign */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">Assign To</label>
              <input
                value={assign}
                onChange={(e) => setAssign(e.target.value)}
                className="w-full bg-[#141416] border border-[#272727] text-white px-4 py-3 rounded-md
                focus:outline-none focus:ring-2 focus:ring-[#ff3b3b] placeholder-gray-500"
                type="text"
                placeholder="Employee Name"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-2/3 bg-[#141416] border border-[#272727] text-white px-4 py-3 rounded-md
              focus:outline-none focus:ring-2 focus:ring-[#ff3b3b] placeholder-gray-500"
              type="text"
              placeholder="Design, dev, etc"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2 flex flex-col">
          <label className="block text-sm text-gray-300 mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-44 bg-[#141416] border border-[#272727] text-white px-4 py-3 rounded-md
            resize-none focus:outline-none focus:ring-2 focus:ring-[#ff3b3b] placeholder-gray-500"
            placeholder="Describe the task..."
          />

          <button
            type="submit"
            className="mt-4 w-full bg-[#ff2727] hover:bg-[#e00000] text-white py-3 rounded-md 
            font-semibold tracking-wide shadow-lg transition active:scale-95"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

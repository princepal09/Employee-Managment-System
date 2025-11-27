import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] mt-7 h-80 rounded-xl p-5 shadow-lg border border-gray-700">
      {/* Header Row */}
      <div className="bg-linear-to-r from-red-500 to-red-700 mb-4 text-white text-xl py-3 font-semibold flex justify-between rounded-lg px-6 shadow-md">
        <h2 className="w-1/5 text-center">Employee</h2>
        <h3 className="w-1/5 text-center">New</h3>
        <h5 className="w-1/5 text-center">Active</h5>
        <h5 className="w-1/5 text-center">Completed</h5>
        <h5 className="w-1/5 text-center">Failed</h5>
      </div>

      {/* Scrollable Task List */}
      <div id="task2" className="h-[80%] overflow-auto pr-2 space-y-3">
        {userData.employees.map((elem, idx) => (
          <div
            key={idx}
            className="bg-[#2b2b2b] text-white text-lg py-3 font-medium flex justify-between rounded-lg px-6 border border-gray-700 hover:bg-[#353535] transition-all duration-200 cursor-pointer shadow-sm"
          >
            <h2 className="w-1/5 text-center">{elem.firstname}</h2>
            <h3 className="w-1/5 text-center">{elem.taskCount.newTask}</h3>
            <h5 className="w-1/5 text-center">{elem.taskCount.active}</h5>
            <h5 className="w-1/5 text-center">{elem.taskCount.completed}</h5>
            <h5 className="w-1/5 text-center">{elem.taskCount.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;

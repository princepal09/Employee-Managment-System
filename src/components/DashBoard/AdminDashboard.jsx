import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = (props) => {
  console.log("This is Admin Dashboard");
  return (
    <div className="h-screen   bg-black p-10">
      <Header changeUser = {props.changeUser} />
      <CreateTask/>
      <AllTask/>

    
    </div>
  );
};

export default AdminDashboard;

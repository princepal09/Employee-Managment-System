import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeDashboard from './components/DashBoard/EmployeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

    const [userData,setUserData]= useContext(AuthContext)  
  // console.log(authData);

useEffect(() => {

  const savedUser = localStorage.getItem("loggedInUser");

  if(savedUser){
    const loggedInUser = JSON.parse(savedUser);

    setUser(loggedInUser.role);

    

    if(loggedInUser.role === "employee"){
      setLoggedInUserData(loggedInUser.data);
    }
  }

}, []);



  const handleLogin = (email,password) =>{
    if(email == 'prince@p.com' && password == '123'){
      console.log("heyyy");
      setUser('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({role:"admin"}))
    }
    else if(userData){ 
      const employee = userData.employees.find( (e) => email == e.email && password == e.password)
      if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
       localStorage.setItem("loggedInUser", JSON.stringify({role:"employee" , data : employee}))
      }
    }
    else{  
      alert("Invalid Credentials")
    }

  }


  return (
    <>
    {!user &&  <Login handleLogin = {handleLogin} /> }
    {user == 'admin'&& <AdminDashboard changeUser = {setUser}/>}
    {user == 'employee'&&( <EmployeDashboard changeUser = {setUser} data = {loggedInUserData}/>)}
     
    </>
  )
}

export default App

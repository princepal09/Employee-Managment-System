import React, { useState } from 'react'
import Login from './components/Auth/Login'
import EmployeDashboard from './components/DashBoard/EmployeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogin = (email,password) =>{
    if(email == 'prince@p.com' && password == '123'){
      setUser('admin')
    }
    else if(email == 'admin@m.com' && password == '123'){
      setUser('employee')
    }
    else{  
      alert("Invalid Credentials")
    }

  }
  return (
    <>
    {!user ? <Login handleLogin = {handleLogin} /> : ""}
    {user == 'admin'&& <AdminDashboard/>}
    {user == 'employee'&& <EmployeDashboard/>}
    
    </>
  )
}

export default App

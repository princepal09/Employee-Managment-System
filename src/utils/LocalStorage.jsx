const employees = 
[
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Update Database Records",
        "description": "Fix duplicate user entries in the system",
        "date": "2025-01-10",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Follow-Up",
        "description": "Call pending clients about their queries",
        "date": "2025-01-11",
        "category": "Communication",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Prepare Monthly Report",
        "description": "Make summary report of progress",
        "date": "2025-01-12",
        "category": "Management",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design Login Page",
        "description": "Create UI for login form",
        "date": "2025-01-09",
        "category": "UI/UX",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix Navbar",
        "description": "Align navbar icons properly",
        "date": "2025-01-10",
        "category": "Frontend",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Integrate API",
        "description": "Connect frontend data with backend API",
        "date": "2025-01-15",
        "category": "Backend",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Arrange Meeting",
        "description": "Setup client meeting at 3PM",
        "date": "2025-01-08",
        "category": "Management",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Data Cleanup",
        "description": "Remove unnecessary files",
        "date": "2025-01-13",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Bug Testing",
        "description": "Test whole application",
        "date": "2025-01-14",
        "category": "QA",
        "active": false,
                 "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Add Loading State",
        "description": "Create skeleton UI while loading",
        "date": "2025-01-09",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Review Code",
        "description": "Review pull request #243",
        "date": "2025-01-10",
        "category": "Code",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Finish Documentation",
        "description": "Update latest endpoints",
        "date": "2025-01-08",
        "category": "Docs",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Refactor Code",
        "description": "Improve code structure",
        "date": "2025-01-09",
        "category": "Backend",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix Console Errors",
        "description": "Remove warnings",
        "date": "2025-01-11",
        "category": "Debug",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
]

const admin = [
 {
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
 }
]


export const getLocalStorage = () =>{
   localStorage.get("employees",JSON.stringify(employees))
   localStorage.get("user",JSON.stringify(admin))
}

export const setLocalStorage = () =>{
   JSON.parse(localStorage.get('employees'))
   JSON.parse(localStorage.get('user'))
  console.log(employees,admin);

}
const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "employee1@example.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 1
    },

    tasks: [
      {
        taskTitle: "Create Login Page",
        taskDescription: "Design and develop login UI.",
        taskDate: "2026-06-10",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failedTask: false
      },
      {
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve navbar responsiveness.",
        taskDate: "2026-06-12",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failedTask: false
      },
      {
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with backend.",
        taskDate: "2026-06-15",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failedTask: true
      }
    ]
  },

  {
    id: 2,
    name: "Priya Singh",
    email: "employee2@example.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 1
    },

    tasks: [
      {
        taskTitle: "Dashboard UI",
        taskDescription: "Create dashboard layout.",
        taskDate: "2026-06-11",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failedTask: false
      },
      {
        taskTitle: "Profile Page",
        taskDescription: "Develop employee profile page.",
        taskDate: "2026-06-14",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failedTask: false
      },
      {
        taskTitle: "Testing",
        taskDescription: "Perform UI testing.",
        taskDate: "2026-06-16",
        category: "QA",
        active: false,
        newTask: false,
        completed: false,
        failedTask: true
      }
    ]
  },

  {
    id: 3,
    name: "Amit Verma",
    email: "employee3@example.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    },

    tasks: [
      {
        taskTitle: "Create Reports",
        taskDescription: "Generate monthly reports.",
        taskDate: "2026-06-09",
        category: "Management",
        active: true,
        newTask: true,
        completed: false,
        failedTask: false
      },
      {
        taskTitle: "Database Cleanup",
        taskDescription: "Remove redundant records.",
        taskDate: "2026-06-13",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failedTask: false
      }
    ]
  },

  {
    id: 4,
    name: "Sneha Patel",
    email: "employee4@example.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    },

    tasks: [
      {
        taskTitle: "Landing Page",
        taskDescription: "Create marketing landing page.",
        taskDate: "2026-06-08",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failedTask: false
      },
      {
        taskTitle: "SEO Optimization",
        taskDescription: "Improve search rankings.",
        taskDate: "2026-06-12",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failedTask: false
      }
    ]
  },

  {
    id: 5,
    name: "Vikram Gupta",
    email: "employee5@example.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    },

    tasks: [
      {
        taskTitle: "Authentication Module",
        taskDescription: "Implement login authentication.",
        taskDate: "2026-06-10",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failedTask: false
      },
      {
        taskTitle: "Security Audit",
        taskDescription: "Review security vulnerabilities.",
        taskDate: "2026-06-14",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failedTask: false
      }
    ]
  }
];
const admin = [
  {
    id: 1,
    name: "Admin",
    email: "admin@example.com",
    password: "123"
  }
];
export const setlocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}
export const getlocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return { employees, admin }
}
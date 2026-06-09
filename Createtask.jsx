import React, { useContext, useState } from 'react'
import { Authcontext } from '../context/Authprovider'

const Createtask = () => {
  const [userData, setUserData] = useContext(Authcontext)

  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setcategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (!userData) {
      console.log('User data not loaded yet')
      return
    }

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      assignTo,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    }

    const updatedEmployees = userData.map((employee) => {
      if (employee.name === assignTo) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
          taskCount: {
            ...employee.taskCount,
            newTask: employee.taskCount.newTask + 1
          }
        }
      }

      return employee
    })

    setUserData(updatedEmployees)
    settaskTitle('')
    settaskDescription('')
    settaskDate('')
    setassignTo('')
    setcategory('')
  }
  return (
    <div>
      <div className="bg-[#1c1c1c] mt-10 p-5 rounded">
        <form
          onSubmit={submitHandler}
          className="flex w-full items-start justify-between"
        >
          <div className="flex items-start gap-150 w-full">
            <div className="w-1/3 text-white">

              <div className="flex flex-col">
                <h3 className="mt-5">Task Title</h3>
                <input
                  value={taskTitle}
                  onChange={(e) => settaskTitle(e.target.value)}
                  className="mt-2 w-full border-white border-2 rounded-sm p-2"
                  type="text"
                  placeholder="Make a UI Design"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="mt-5">Date</h3>
                <input
                  value={taskDate}
                  onChange={(e) => settaskDate(e.target.value)}
                  className="mt-2 w-full border-white border-2 rounded-sm p-2"
                  type="date"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="mt-5">Assign To</h3>
                <input
                  value={assignTo}
                  onChange={(e) => setassignTo(e.target.value)}
                  className="mt-2 w-full border-white border-2 rounded-sm p-2"
                  type="text"
                  placeholder="Employee Name"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="mt-5">Category</h3>
                <input
                  value={category}
                  onChange={(e) => setcategory(e.target.value)}
                  className="mt-2 w-full border-white border-2 rounded-sm p-2"
                  type="text"
                  placeholder="Design, Development, etc"
                />
              </div>
            </div>
            <div className="w-1/3 text-white">
              <h3 className="mt-5">Description</h3>

              <textarea
                value={taskDescription}
                onChange={(e) => settaskDescription(e.target.value)}
                className="mt-2 w-full border-white border-2 rounded-sm p-2 h-[270px]"
                rows="10"
                placeholder="Enter task description"
              ></textarea>
              <button
                type="submit"
                className="mt-4 w-full border-white border-2 rounded-sm bg-green-600 py-2"
              >
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Createtask
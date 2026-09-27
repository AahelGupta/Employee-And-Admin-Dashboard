import React from 'react'

const Tasklistnumbers = ({ data }) => {

  if (!data) {
    return null
  }

  if (!data.taskCount) {
    return null
  }

  return (
    <div className='flex mt-10 justify-between'>
      <div className="text-white p-10 rounded-xl py-6 px-9 w-50 bg-red-400">
        <h2 className='text-2xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className="text-white p-10 rounded-xl py-6 px-9 w-50 bg-blue-400">
        <h2 className='text-2xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Active Task</h3>
      </div>

      <div className="text-white p-10 rounded-xl py-6 px-9 w-50 bg-green-400">
        <h2 className='text-2xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>

      <div className="text-white p-10 rounded-xl py-6 px-9 w-50 bg-yellow-400">
        <h2 className='text-2xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default Tasklistnumbers
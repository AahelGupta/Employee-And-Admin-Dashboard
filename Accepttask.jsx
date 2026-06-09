import React from 'react'

const Accepttask = ({ data }) => {
  return (
    <div className="h-full mt-5 w-[300px] flex-shrink-0 rounded-xl bg-red-400">
      <div className="flex justify-between m-5 items-center">
        <h3 className='bg-red-600 px-3 py-1 rounded'>
          {data.category}
        </h3>

        <h4 className='text-sm'>
          {data.taskDate}
        </h4>
      </div>

      <h2 className='mt-5 text-2xl font-semibold ml-5 text-white'>
        {data.taskTitle}
      </h2>

      <p className='text-sm mt-2 ml-5 text-white'>
        {data.taskDescription}
      </p>

      <div className="flex justify-between mt-4">
        <button className='bg-green-500 py-1 px-2 m-4 text-sm'>
          Mark as completed
        </button>

        <button className='bg-red-500 py-1 px-2 m-4 text-sm'>
          Mark as failed
        </button>
      </div>
    </div>
  )
}

export default Accepttask
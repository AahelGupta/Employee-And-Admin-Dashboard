import React from 'react'

const Completetask = ({ data }) => {
  return (
    <div className="h-full mt-5 w-[300px] flex-shrink-0 rounded-xl bg-green-400">
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

      <div className="m-4">
        <button className='bg-green-600 py-1 px-2 text-sm'>
          Completed
        </button>
      </div>
    </div>
  )
}

export default Completetask

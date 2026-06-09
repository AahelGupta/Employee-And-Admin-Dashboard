import React, { useContext } from 'react'
import { Authcontext } from '../context/Authprovider'

const Alltasks = () => {
  const [userData,setUserData] = useContext(Authcontext)

  return (
    <div className='p-5 mt-5 rounded'>
      <div className='bg-gray-700 mb-2 py-2 px-4 flex justify-between rounded text-white font-semibold'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h5 className='w-1/5'>Active Task</h5>
        <h5 className='w-1/5'>Completed</h5>
        <h5 className='w-1/5'>Failed</h5>
      </div>
    <div className=''>
      {userData.map((elem, idx) => {
        return (
            <div key={idx} className="mb-2 py-2 px-4 flex justify-between rounded border-2 border-emerald-600 bg-transparent">
                <h2 className='text-xl font-medium w-1/5 text-white'>{elem.name}</h2>
                <h3 className='text-xl font-medium w-1/5 text-blue-200'>{elem.taskCount.newTask}</h3>
                <h5 className='text-xl font-medium w-1/5 text-yellow-200'>{elem.taskCount.active}</h5>
                <h5 className='text-xl font-medium w-1/5 text-green-400'>{elem.taskCount.completed}</h5>
                <h5 className='text-xl font-medium w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
            </div>
        )
      })}
      </div>
    </div>
  )
}

export default Alltasks
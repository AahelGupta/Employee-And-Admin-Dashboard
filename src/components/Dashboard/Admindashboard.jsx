import React from 'react'
import Header from '../Others/Header'
import Createtask from '../Others/Createtask'
import Alltasks from '../Others/Alltasks'

const Admindashboard = ({ changeUser }) => {
  return (
    <div className='w-full p-10 bg-[#1c1c1c]'>
      <Header changeUser={changeUser} />
      <Createtask />
      <Alltasks />
    </div>
  )
}

export default Admindashboard
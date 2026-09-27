import React from 'react'
import Header from '../Others/Header'
import Tasklistnumbers from '../Others/Tasklistnumbers'
import Tasklist from '../Task/Tasklist'

const Employeedashboard = ({ data, changeUser }) => {
  return (
    <div className='p-20 bg-[#1c1c1c] h-screen'>
      <Header data={data} changeUser={changeUser} />
      <Tasklistnumbers data={data} />
      <Tasklist data={data} />
    </div>
  )
}

export default Employeedashboard
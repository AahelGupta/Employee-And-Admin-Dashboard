import React from 'react'
import Accepttask from './Accepttask'
import Newtask from './Newtask'
import Completetask from './Completetask'
import Failedtask from './Failedtask'

const Tasklist = ({ data }) => {
  return (
    <div
      id='Tasklist'
      className='h-[55%] p-5 w-full flex overflow-x-auto items-center justify-start gap-5 flex-nowrap py-5 mt-10 text-white'
    >
      {data.tasks.map((elem, index) => {

        if (elem.newTask) {
          return <Newtask key={index} data={elem} />
        }

        if (elem.active) {
          return <Accepttask key={index} data={elem} />
        }

        if (elem.completed) {
          return <Completetask key={index} data={elem} />
        }

        if (elem.failedTask) {
          return <Failedtask key={index} data={elem} />
        }

        return null
      })}
    </div>
  )
}

export default Tasklist
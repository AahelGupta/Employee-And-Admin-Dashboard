import React from 'react'

const Header = ({ data, changeUser }) => {
  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    changeUser(null)
  }

  let username = 'Admin'

  if (data) {
    username = data.name
  }

  return (
    <div className='flex items-end justify-between bg-[#1c1c1c]'>
      <h1 className='text-2xl font-medium text-white'>
        Hello
        <br />
        <span className='text-3xl font-semibold'>
          {username} 👋
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className='bg-red-500 text-white px-5 py-2 text-lg font-medium'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
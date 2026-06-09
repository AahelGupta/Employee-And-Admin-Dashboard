import React, { createContext, useEffect, useState } from 'react'
import { getlocalStorage } from '../Utilities/Localstorage'

export const Authcontext = createContext()

const Authprovider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const { employees } = getlocalStorage()

    setUserData(employees)
  }, [])

  return (
    <Authcontext.Provider value={[userData, setUserData]}>
      {children}
    </Authcontext.Provider>
  )
}

export default Authprovider
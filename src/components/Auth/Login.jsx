import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setemail("")
        setpassword("")
    }
  return (
    <div className='bg-[#1c1c1c] flex h-screen w-screen items-center justify-center'>
        <div className="border-2 border-emerald-600">
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-col items-center justify-center m-5'>
                <input value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }}required type="email" placeholder='Enter your email' className='text-white border-2 border-red-600 text-white outline-none rounded m-2 p-2 gap-5'/>
                <input value={password}
                    onChange={(e)=>{
                    setpassword(e.target.value)
                }}required type="password" placeholder='Enter your password' className='text-white border-2 border-red-600 text-white outline-none rounded m-2 p-2 gap-5'/>
                <button className='bg-green-600 text-white outline-none m-2 p-2'>Login in</button>
            </form>
        </div>
    </div>
  )
}
export default Login

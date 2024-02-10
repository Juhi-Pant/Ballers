import React from 'react'
import Login from './login'
function Login2() {
  return (
    <div>
      <div className="flex w-full h-screen">
       <div className='w-full flex items-center justify-center bg-gray-100 lg:w-1/2'>
         <Login/>
       </div>
       <div className='hidden relative lg:flex w-1/2 justify-center items-center h-full bg-gray-200'>
         <div className='w-60 h-60 bg-gradient-to-tr from-[#000000] to-[#55EFC4] rounded-full animate-bounce'/>
         <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg'/>
       </div>
     </div>
    </div>
  )
}

export default Login2

import React from 'react'
import { LuLoader2 } from "react-icons/lu";

function Loader() {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <LuLoader2 className='animate-spin h-10 w-10'/>
    </div>
  )
}

export default Loader

import React, { useState } from 'react'

function products() {
  const [a,b] = useState(false)
  return (
    <div className='w-full h-96 text-white'>
       <h4 className={`${a === false ? "text-red-600" : "text-blue-600"}`}>{ a ===false ? "hello" : "hey"}</h4>
       <button onClick={()=>{b(!a)}} className='px-3 py-2 bg-blue-500'> changing</button>

    </div>
  )
}

export default products



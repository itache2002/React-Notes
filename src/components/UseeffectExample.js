import React, { useEffect, useState } from 'react'

function UseeffectExample() {
    const [value,setvalue]=useState('')
    const [count ,setCount]=useState(0)
    useEffect(()=>
    {
        console.log("Rendering every new render")
        document.title=`You have ${count}times`
    },[count])
  return (
    <div>

        <input type='text' value={value} onChange={e => setvalue(e.target.value)}/><br/>
        <button onClick={()=>{setCount(count+1)}}>Click{count}</button>
    </div>
  )
}

export default UseeffectExample
import React, { useReducer } from 'react'
const initvalue=0
const reduser = (current,action)=>
{
    switch(action)
    {
        case 'add':
           return current+1
        case 'sub':
           return current-1
        case 'reset':
            return initvalue
    }
}
function UseReduserExample() {

    const [count, setCount ]=useReducer(reduser,initvalue)
  return (
    <div>
        <h1>Count-{count}</h1>
        <button onClick={()=>{setCount('add')}}>+</button>
        <button onClick={()=>{setCount('sub')}}>-</button>
        <button onClick={()=>{setCount('reset')}}>Reset</button>
    </div>
  )
}

export default UseReduserExample
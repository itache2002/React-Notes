import React from 'react'

function Welcom({name}) {
    if(name==='ujwal')
    {
        throw new Error("Sorry")
    }
  return (
    <div> {name}</div>
  )
}

export default Welcom
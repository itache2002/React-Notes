import React, { useState } from 'react'
import Useeffectexample2 from './Useeffectexample2'

function MouseComp() {
    const [display,setdisplay]=useState(true)
  return (
    <div>
        <button onClick={()=>{setdisplay(!display)}}>
            Toggle Button
        </button>
        {display && <Useeffectexample2/>}
    </div>
  )
}

export default MouseComp
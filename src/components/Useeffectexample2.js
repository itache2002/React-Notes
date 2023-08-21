import React, { useEffect, useState } from 'react'

function Useeffectexample2() {
    const [x ,setx]=useState()
    const [y , sety]=useState()

    const logmouse=(e)=>
    {
        console.log("mouse event")
        setx(e.clientX)
        sety(e.clientY)

    }
    useEffect(()=>
    {
        console.log('render one time')
        window.addEventListener('mousemove',logmouse)

        return(()=>{
            window.removeEventListener('mousemove',logmouse)
        })
    },[])

  return (
    <div>
        X={x}
        Y={y}

    </div>
  )
}

export default Useeffectexample2
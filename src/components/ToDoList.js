import React, { useState } from 'react'

function ToDoList() {
    const [input,setinput]=useState('')
    const [item,setItem]=useState([])
    const AddItem =()=>
    {
        if(!input)
        {return}
        setItem([...item,input])

        

    }
  return (
    <div>
        <input type='text'
        value={input}
        onChange={e=>setinput(e.target.value)}
        />
        <button onClick={AddItem}> Add Item</button>
        <ul>
            {item.map(item =><li>{item}</li>)}
            
        </ul>
    </div>
  )
}

export default ToDoList
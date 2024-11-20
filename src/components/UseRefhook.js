import { useRef } from "react"
import React from 'react'

const UseRefhook = () => {
    const inputRef=useRef(null);
    const handleClick=()=>{
        inputRef.current.focus();

    }
  return (
    <div>
    <input className="h-12 w-40 border-2 border-black"ref={inputRef} type="text"/>
    <button className="h-10 w-40 border-2 border-green-600">Focus</button>
    </div>
  )
}

export default UseRefhook
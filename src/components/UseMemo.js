import React,{useMemo ,useState} from 'react'

const UseMemo = () => {
  const details=[
   
      {No:"1",Price:"10",Quantity:"0"},
      {No:"2",Price:"15",Quantity:"0"},
      {No:"3",Price:"20",Quantity:"0"},
      {No:"4",Price:"25",Quantity:"0"},
      {No:"5",Price:"30",Quantity:"0"},
      {No:"6",Price:"45",Quantity:"0"},
      {No:"7",Price:"50",Quantity:"0"},
      {No:"8",Price:"60",Quantity:"0"},
      {No:"9",Price:"70",Quantity:"0"},
      {No:"10",Price:"80",Quantity:"0"},
      {No:"11",Price:"90",Quantity:"0"},
      {No:"12",Price:"100",Quantity:"0"}]
    return (
      <div>
          <div className='flex flex-wrap space-x-[10px] justify-around'>
  {
      details.map((items,index)=>{return(
  <div className='border-2 border-black w-[200px] mb-[20px] flex flex-col justify-center items-center h-[200px] rounded-[10px] bg-orange-300'>
  <p>Product name:{items.No} </p>
  <p>Price:{items.Price}</p>
  <p>Quantity:{items.Quantity}</p>
  <button className='bg-blue-400'>Add to Cart</button>
  </div>
      )})}
  
  </div>
  
  
  
      </div>
    )
  }
  
  export default UseMemo
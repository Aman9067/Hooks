// import React,{useState}from'react'
// function Hooks()
// {
//     const[count,setCount]=useState(0);
//     const[step,setStep]=useState();
//     return(
//         <div className='bg-teal-600 text-white ml-[35%] h-96 w-96 mt-14 border-dotted border-indigo-200 border-[5px]'>
//             <br/>
//            <p>Current count:{count}</p>
//            <br/>
//            <label>Step {setStep}</label>
//               <input type="number"value={step}></input>

//             <button className='h-10 w-24 m-20  bg-red-700 border-2 border-yellow-400 rounded-[10px] hover:bg-orange-500' onClick={()=>setCount(count+1)}>Increment</button>
//             <button className='h-10 w-24 m-10 bg-emerald-500 border-2 border-yellow-400 rounded-[10px] hover:bg-blue-400' onClick={()=>setCount(count-1)}>Decrement</button>
//         </div>
//     )
// }
// export default Hooks;

import React, { useeffect } from 'react'

const Hooks = () =>
     {
    useeffect(()=>
{
    console.log("hello everyone")
}
    )

 }

export default Hooks
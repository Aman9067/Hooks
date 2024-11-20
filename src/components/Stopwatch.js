import React,{useState,useRef} from 'react'


const Stopwatch = () => {
    const[time,setTime]=useState(0)
    const timeRef=useRef(null)
    const startTimer=()=>
    {
      if(!timeRef.current)
        {
            timeRef.current=setInterval(()=>{setTime(prevTime=>prevTime+1);},1000)
        }  
    }
    const stopTimer=()=>
    {
        clearInterval(timeRef.current);
        timeRef.current=null;
    }
    const resetTimer=()=>
    {
        stopTimer();
        setTime(0);
    }
  return (
    <div>
        <div className='h-56 w-96 border-2 border-blue bg-red-200 shadow-xl shadow-yellow-400    ml-[500px] mt-60 '>
            <p className='text-2xl font-bold '>Stop Watch</p>
         <h1 className='h-12 w-40 ml-32 rounded-lg border-2 text-xl border-amber-200'>Seconds :{time}</h1>
         <button className="h-12 w-40 rounded-lg hover:bg-yellow-100 focus:bg-blue-300 border-2 bg-green-400" onClick={startTimer}>Start</button>
         <button className="h-12 w-40 rounded-lg hover:bg-yellow-100 focus:bg-blue-300 border-2 bg-red-500" onClick={stopTimer}>Stop</button>
         <button className="h-12 w-40 rounded-lg focus:bg-blue-300 border-2 bg-yellow-300" onClick={resetTimer}>Reset</button>
         </div>
    </div>
  )
}

export default Stopwatch
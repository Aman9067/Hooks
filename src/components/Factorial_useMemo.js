import React,{useState} from 'react'
import Img1 from "../Assets/calc1.jpg"

const Factorial_useMemo = () => {
    const [number, setNumber] = useState(1);

    return (
        <div>
            
            <div className='h-[300px] w-[500px] border-4 border-white rounded-lg shadow-xl shadow-green-400 ml-[500px] mt-24 bg-blue-900 text-white '>
                <h1 className='text-3xl'>Factorial Calculator &#128197;</h1>
                <input className='h-10 w-40 mt-10 border-2 hover:bg-emerald-200 text-black ' type='number'
                    value={number} 
                    onChange={(a)=>(setNumber(parseInt(a.target.value))||0)}
                    placeholder='Enter number'/>

                    <div>
                        <img src="Img1"></img>
                    </div>
                    
            </div>

        </div>
    )
}

export default Factorial_useMemo
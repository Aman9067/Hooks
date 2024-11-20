import React from 'react'
import {useReduser} from 'react';

const initialState = {count:0};
function reducer(state,action)
{
     switch(action,type)
     {

        case'increment':0
        return{count:state.count+1}

        case'decrement':
        return{count:state.count-1}
        default:
            return state;
    }
}
function Counter()
{
const[state,dispatch]=useReduser(reducer,initialState);


 return (
    <div>
    <div className='h-96 w-96 bg-red-950 text-white ml-[400px] mt-40'>
        <p className='h-14 w-14 bg-gray-700'>Count</p>
        <button className='h-10 w-20 bg-green-600' onClick={() => dispatch({type:'increment'})}></button>
        <button className='h-10 w-20 bg-orange-500' onClick={() => dispatch({type:'decrement'})}></button>
             
    </div>
    </div>
  )
}

export default reducer
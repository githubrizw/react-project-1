import React, { useState } from 'react'

export const Home = () => {
    const [num,setNum] = useState(0);
    const incNum = () =>{
        setNum(num + 1);
    }

    const decNum = () =>{
        if(num > 0){
        setNum(num - 1);
        }else{
            setNum(0);
        }
    }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={incNum}>Increm</button>
      <button onClick={decNum}>Decrem</button>
    </div>
  )
}

 

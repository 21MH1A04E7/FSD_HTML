import React from "react";
import { useState } from "react";
function Hooks(){
    //value and function name
    const [count, setCount] =useState(0);
    const [name,setname]=useState('');
    return(
        <div>
            <h1>React Hooks</h1>
            <p>count is:{count}</p>
            <button onClick={()=>setCount(count+1)}>increament by 1</button>
            <button onClick={()=>setCount(count-1)}>decreament 1</button>
            <br/>
            <input onChange={(e)=>setname(e.target.value )}></input>
            <p>my name is: {name}</p>
        </div>
    )
}
export default Hooks;
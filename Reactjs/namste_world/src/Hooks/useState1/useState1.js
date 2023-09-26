import React from "react";
import './style.css'
import { useState } from "react";
function Use1(){
    //[variable ,function_name]=useState(initial_value)
    //here count is a varible
    //fun is function , 5 is initial value
    //initial value can be any thing
const [count,fun]=useState(5);
function increament(){
    //calling fun(updating the initial vaue by 1)
    count<10?fun(count+1):alert("value is too heigh");
}
function decreament(){
    count>0?fun(count-1):alert("value is too low");
}
    return(
        <>
        {/* count is a varible */}
        <p>{count}</p>
        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>
        </>
    )
}
export default Use1;
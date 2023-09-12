import React from "react";
import { useState } from "react";
import './increament.css'
let num=0;
function Increament(){
    const div1=document.getElementById('box');
    const shoot = () => {
        ++num;
        console.log(num);
        if(num<=10){
            div1.innerHTML=num;
        }else{
            alert("sorry i can't increament this number");
        }
      }
    const shoot2=()=>{
        --num;
        if(num>=0){
            div1.innerHTML=num;
        }else{
            alert("sorry i can't decreament this number");
        }
    }
    return(
        <div>
            <div id="box">{num}</div>
            <button id='button1' onClick={shoot}>Increament</button>
            <button id='button2' onClick={shoot2}>Decreament</button>
        </div>
    )
}
export default Increament;
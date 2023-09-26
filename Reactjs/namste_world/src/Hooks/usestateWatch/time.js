import React from "react";
import { useState } from "react";
function Time(){
    const [curr_time,fun]=useState("Time");
    function gettime(){
        setInterval(gettime,1000);
        var date=new Date().toLocaleTimeString();
        fun(date);
    }
    return(
        <div>
            <p>{curr_time}</p>
            <button onClick={gettime}>GetTime</button>
        </div>
    )
}
export default Time;
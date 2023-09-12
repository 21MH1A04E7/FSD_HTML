import React from "react";
import './challenge1Style.css'
function Cards1(props){
    return(
      <div id="box" className="challenge1Style">
        <h1>{props.name}</h1>
        <img src={props.img}></img>
        <div>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
      </div>
    )
}
export default Cards1;
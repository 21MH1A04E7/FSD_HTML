import React from "react";
import './style1.css'
import Avatar from "./Avatar";
import Details from "./details";
function Cards1(props){
    return(
      <div id="box" className="challenge1Style">
        <span>{props.id}</span>
        <h1>{props.name}</h1>
        <Avatar img={props.img} />
        <div>
           <Details detailsinfo={props.phone} /> 
           <Details detailsinfo={props.email}/>
        </div>
      </div>
    )
}
export default Cards1;
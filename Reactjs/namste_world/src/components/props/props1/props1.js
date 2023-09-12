import React from "react";
import './props1Style.css'
//props is an object
function Cards(props){
    return(
        <div id="box" className="props1Style.css">
            <h1>{props.name}</h1>
            <img id="img1" src={props.img} alt="image"/>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    )
}
export default Cards;
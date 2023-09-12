import React from "react";
import './style.css';
import Imoji from "./imoji";
import Imageheading from "./imageheading";
import Aboutimage from "./aboutimage";
function Card(props){
    return(
        <div className="box2">
            <Imoji img={props.img}/>
            <Imageheading name={props.name}/>
            <Aboutimage details={props.details}/>

        </div>
    );
}
export default Card;
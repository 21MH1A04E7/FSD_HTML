import React from "react";
import './note1style.css'
let ss={
    height:'100px',
    maxWidth:'300px',
    backgroundColor:'rgb(244, 223, 223)',
    borderRadius:'10px',
    marginTop:'20px',
    marginLeft:'20px'
}
function Note1(){
    return(
        <div style={ss} >
            <p style={{color:"blue",fontSize:"15px"}}>this is the note title<br>
            </br>this is the note content</p>
        </div> 
    )
}
export default Note1;
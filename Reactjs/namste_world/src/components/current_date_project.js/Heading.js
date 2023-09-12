import React from "react";
function Heading(){
const date=new Date();
let time=date.getHours();
let greeting;
let c;
if(time<12){
  greeting="Good Morning";
  c="red";
}else if(time<18){
  greeting="Good Afternoon";
  c="yellow";
}else{
  greeting="Good Night";
  c="blue";
}
return (
    <h1 style={{color:c}}>{greeting}</h1>
);
}
export default Heading;
import React, { useState } from "react";

//old method
// const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red'
//   }
  
//   myVehicle(vehicleOne);
//   function myVehicle(vehicle) {
//     const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
//     console.log(message);
//   }

//---============----
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  myVehicle(vehicleOne);
  
  function myVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    console.log(message);
  }
  let ss={
    color:"red",
    fontSize:"20px",
    backgroundColor:"pink",
    textAlign:"center"
  }
const time=new Date().toLocaleTimeString();
function App() {
    const [value,settime]=useState("time");
    function getclick(){
        const time=new Date().toLocaleTimeString();
        settime(time)
    }
  return(
    <>
    <p style={ss}>{value}</p>
    <button style={ss} onClick={getclick}>get time</button>
    </>
  )
}
export default App;

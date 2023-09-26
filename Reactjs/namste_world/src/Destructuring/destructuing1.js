import React from "react";

const vehicles = ['mustang', 'f-150', 'expedition'];
//old method
// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];
// console.log(car);
// console.log(truck);
// console.log(suv);
//*--------------------*//


//destructuring in array
const [car,truck,suv]=vehicles;
console.log(car);
console.log(truck);
console.log(suv);

console.log("___========____");
//If we only want the car and suv we can simply leave out the truck but keep the comma:
const [car1,,suv1]=vehicles;
console.log(car1);
console.log(suv1);

//Destructuring comes in handy when a function returns an array:
console.log("___========____");
function calculate(a,b){
    const add=a+b;
    const mul=a*b;
    const sub=a-b;
    return [add,mul,sub];
}
const [add,mul,sub]=calculate(4,5);
console.log(add);
console.log(sub);
function App() {
  return(
    <>

    </>
  )
}
export default App;

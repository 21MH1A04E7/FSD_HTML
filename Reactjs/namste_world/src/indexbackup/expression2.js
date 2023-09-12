import React from "react";
import ReactDOM from "react-dom";
const name="hariom";
const last="kumar";
//expression chaleng 1
// we can't write statement inside the {}
ReactDOM.render(
  <div>
    <h1>full name is {name+" "+last}</h1>
    {/* method2 */}
    <h1>full name is {name} {last}</h1>
    <h1>Hello</h1>
    {/* wrap */}
    <p>hii {name} ,how are u</p>
    {/* expression */}
    <p>addition of two number {4+7}</p>
    {/* generating random number */}
    <p>random number {Math.floor(Math.random()*10)}</p>
  </div>
  ,document.getElementById('root')
);
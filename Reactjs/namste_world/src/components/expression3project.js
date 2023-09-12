import React from "react";
import ReactDOM from "react-dom";
const name="hariom";
const date=new Date()
// fetch the date
ReactDOM.render(
  <div>
      <p>my name is {name}</p>
      <p>copyright©{date.getFullYear()}</p>
  </div>
  ,document.getElementById('root')
);
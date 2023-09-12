import React from "react";
import ReactDOM from "react-dom";
let ss={
  color:"red"
}
let img={
  height:"100px"
}
ReactDOM.render(
  <div>
    <h1 style={ss}  contentEditable="true">hariom</h1>
    <div>
      <img  style={img} src="https://images.thequint.com/thequint/2021-04/15d4fcf5-7c0e-481e-9dc6-37e444c58fef/IPL21M8_55.JPG?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0" alt="first image"></img>
      <img style={img} src="https://images.thequint.com/thequint/2021-04/15d4fcf5-7c0e-481e-9dc6-37e444c58fef/IPL21M8_55.JPG?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0" alt="first image"></img>
      <img style={img} src="https://images.thequint.com/thequint/2021-04/15d4fcf5-7c0e-481e-9dc6-37e444c58fef/IPL21M8_55.JPG?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0" alt="first image"></img>
    </div>
  </div> 
  ,document.getElementById('root')
);
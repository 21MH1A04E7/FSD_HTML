import React from "react";
import Login from "./login";
import Register from "../../sign";
import "./style.css";
let check=false;
function App() {
  return <div className="container">
   {check==false?<Login/>:<Register/>}
  </div>;
}
export default App;

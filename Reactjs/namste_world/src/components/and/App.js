import React from "react";
import Login from "./login";
import "./style.css";
let check = false;
// function Change() {
//   if (check) {
//     return <h1>Hello</h1>;
//   } else {
//     return (
//         <Login/>
//     );
//   }
// }
function App() {
  return <div className="container">{
    check===false&&<h1>hello</h1>
    // check==true?<h1>hello</h1>:<Login/>//we can write only expression 
  }</div>;
}
export default App;

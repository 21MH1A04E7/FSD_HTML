import React  from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Error from "./Error";
function App(){
    return (
       <Router>
        <Menu/>
         <Routes>
            <Route exact path="/home" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route path="/*" element={<Error/>}></Route>
         </Routes>
       </Router>
    )
}
export default App;
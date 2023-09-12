import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
//in javascript it act as a object so 
//key value 
let ss={
  color:"blue",
  background:"black"
}
ss.color="pink"
function App() {
  return (
   <>
    <h1 style={{color:"red"}}>hariom</h1>
    <h1 style={ss}>second style</h1>
   </>
  );
}

export default App;
import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
//in javascript it act as a object so 
//key value 
const date=new Date(2019,1,1,14);
let time=date.getHours();
let greeting;
let c;
if(time<12){
  greeting="Good Morning";
  c="red";
}else if(time>=12&&time<18){
  greeting="Good Afternoon";
  c="yellow";
}else{
  greeting="Good Night";
  c="blue";
}
function App() {
  return (
   <>
    <h1 style={{color:c}}>{greeting}</h1>
   </>
  );
}

export default App;

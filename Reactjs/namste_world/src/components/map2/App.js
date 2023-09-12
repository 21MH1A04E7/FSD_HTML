import "./App.css";
import Emoji from "./emoji";
import Card from "./card";
import Contact from "./contact";
function grapelement(obj){
  return(
    
     <Card key={obj.id} img={obj.img} name={obj.name} details={obj.details}/>

  );
}
function App() {
  return (
    <>
        <Emoji/>
        {Contact.map(grapelement)}
    </>
  );
}
export default App;

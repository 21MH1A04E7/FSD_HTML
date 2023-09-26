import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import List from "./contact";
import './styles.css'

function mapping(obj){
    return(
        <Note key={obj.id} title={obj.heading} para={obj.para}/>
    )
}
function App() {
  return (
    <div>
      <Header />
      {List.map(mapping)}
      <Footer />
    </div>
  );
}

export default App;

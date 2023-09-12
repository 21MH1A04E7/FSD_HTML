import Navbar from "../Navbar";
import "./App.css";
import Contact from "./contact";
import Cards1 from "./comp1";
import Avatar from "./Avatar";
function createcard(obj) {
  //obj is an javascript object
  return (
    // key should be unique for each child list
    // id is unique for every individual card for i keep as key
    //key is not use for us
    //if we want to use id then we need to create id props
    <Cards1 id={obj.id} key={obj.id} name={obj.name} img={obj.img} phone={obj.phone} email={obj.email} />
  );
}
function App() {
  return (
    <>
      <h1>My contact</h1>
      {Contact.map(createcard)}
      {/* <Avatar img="https://static.indiatvnews.com/ins-web/images/kohli-profile-1540274232.jpg" />
      <Cards1
        name="hariom"
        img="https://static.indiatvnews.com/ins-web/images/kohli-profile-1540274232.jpg"
        phone="567888548"
        email="hu34@gamil.com"
      />
      <Cards1
        name={Contact[0].name}
        img={Contact[0].img}
        phone={Contact[0].phone}
        email={Contact[0].email}
      />

      <Cards1
        name={Contact[1].name}
        img={Contact[1].img}
        phone={Contact[1].phone}
        email={Contact[1].email}
      />

      <Cards1
        name={Contact[2].name}
        img={Contact[2].img}
        phone={Contact[2].phone}
        email={Contact[2].email}
      /> */}
    </>
  );
}
export default App;

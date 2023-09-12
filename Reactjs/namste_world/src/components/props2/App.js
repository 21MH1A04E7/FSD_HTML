import Navbar from "./components/Navbar";
import "./App.css";
import Contact from "./contact";
import Cards1 from "./comp1";
import Avatar from "./Avatar";
function App() {
  return (
    <>
      <h1>My contact</h1>
      <Avatar img="https://static.indiatvnews.com/ins-web/images/kohli-profile-1540274232.jpg" />
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
      />
    </>
  );
}
export default App;

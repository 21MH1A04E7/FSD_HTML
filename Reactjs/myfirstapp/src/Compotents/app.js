import logo from './logo.svg';
import './App.css';
import Home from './home';
import About from './about';
import Btn from './button';
import Contact from './contact';
import Service from './service';
import Student from './student';
import Trainees from './trainees';
import Menu from './menu';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import component 
import Video  from './Compotents/video';
function App() {
  return (
    // <div className="App">
    //   <div className="App1">
    //     <Btn />
    //   </div>
    //   <Home />
    //   <About />
    //   <Contact />
    //   <Service />
    // </div>
    <div>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="Contact" element={<Contact/>}/>
          <Route path="Service" element={<Service/>}/>
          <Route path="Trainees" element={<Trainees/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    // <div>
    //   <h1>hello</h1>
    //   <Video></Video>
    //   <Video></Video>
    // </div>
  );
}
//defalut means you can change the name 
export default App;

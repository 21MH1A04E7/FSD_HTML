import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const li1=React.createElement('li',{},'home')//<li>Home</li>
const li2=React.createElement('li',{},'about')//<li>About</li>
const ul=React.createElement('ul',{},[li1,li2])//<ul><li>Home</li><li>about</li></ul>
// console.log(ul);
const root = ReactDOM.createRoot(document.getElementById('root'));
// using JSX by babel mechanisam
//way of html formate
// let menu=<ul>
//   <li>Home page</li>
//   <li>About page</li>
// </ul>
// root.render(menu);
root.render(ul);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//home conatact service 
//app.js  1
// <div className="App">
    //   <div className="App1">
    //     <Btn />
    //   </div>
    //   <Home />
    //   <About />
    //   <Contact />
    //   <Service />
    // </div>
//using browserRouter,Routes,Route method
// importing BrowserRouter,Routes,Route
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
{/* <div>
      <BrowserRouter>
      <Menu/>//adding menu bar
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="Contact" element={<Contact/>}/>
          <Route path="Service" element={<Service/>}/>
          <Route path="Trainees" element={<Trainees/>}/>
        </Routes>
      </BrowserRouter>
    </div> */}
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Products1 from './api';
//import component 
import Hooks from './Hooks';
function App() {
  return (
    <div className='App'>
      <Hooks/>
      <Products1/>
    </div>
  );
}
//defalut means you can change the name 
export default App;

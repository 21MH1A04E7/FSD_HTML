import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import component 
import Video  from './Compotents/video';
import Increament from './increament';
function App() {
  return (
    <div>
      <Increament/>
    </div>
  );
}
//defalut means you can change the name 
export default App;

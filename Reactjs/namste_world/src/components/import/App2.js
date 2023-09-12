import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
//pi will a object
import * as pi from './components/import/import_export_2';
function App() {
  return (
   <>
    <h1>{pi.default}</h1>
    <h1>{pi.doublepi()}</h1>
    <h1>{pi.triplepi()}</h1>
   </>
  );
}
export default App;

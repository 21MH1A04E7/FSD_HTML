import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
//pi will a object
import pi,{doublepi,triplepi} from './import_export_2';
function App() {
  return (
   <>
    <h1>{pi}</h1>
    <h1>{doublepi()}</h1>
    <h1>{triplepi()}</h1>
   </>
  );
}
export default App;

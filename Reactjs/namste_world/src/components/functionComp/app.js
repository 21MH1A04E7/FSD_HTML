import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import Comp1 from './comp1';
import Comp2 from './comp2';

function App() {
  return (
   <>
  <div>
    {/* inserting the components */}
   <Comp1/>
   <Comp2/>
  </div>
   </>
  );
}

export default App;
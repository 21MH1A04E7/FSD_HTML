import Navbar from './components/Navbar';
import './App.css';
import Cards from './props1'
function App() {
  return (
   <>
   {/* constome components */}
    <Cards name="virat kohli" img="https://static.indiatvnews.com/ins-web/images/kohli-profile-1540274232.jpg" phone="789431231" email="vk23@gamil.com"/>
    <Cards name="msd" img="https://images.thequint.com/thequint/2021-04/15d4fcf5-7c0e-481e-9dc6-37e444c58fef/IPL21M8_55.JPG?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0" phone="546465654" email="msd23@gamil.com"/>
    <Cards name="pant" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg5uNJsblej9F2uigqpJBA__XNDF8SFrAff0POJznG&s" phone="765464331" email="pant3@gamil.com"/>
   </>
  );
}
export default App;

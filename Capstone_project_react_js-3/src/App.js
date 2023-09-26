import './App.css';
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom"
import Header from './components/header/Header';
import MovieList from './components/movielist/movielist';
import Home from './components/homepage/home';
import Movie from './components/movie/movie';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie/>}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
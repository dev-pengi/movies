import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav'
import Movies from './pages/movies/Movies';
import Series from './pages/series/Series';
import Trending from './pages/trending/Trending';
import Pagination from './components/Pagination'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app" id='app'>
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </div>
      <Nav />
    </BrowserRouter>
  );
}

export default App;

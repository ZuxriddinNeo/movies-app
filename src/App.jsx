
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MoviesProvider } from './context/MoviesContext';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import TVSeries from './pages/TVSeries/TVSeries';
import Bookmarks from './pages//BookMarks/BookMarks';
import styles from './App.module.scss';

function App() {
  return (
    <MoviesProvider>
      <BrowserRouter>
        <div className={styles.app}>
          <Sidebar />
          <main className={styles.main}>
            <Routes>
              <Route path="/"           element={<Home />} />
              <Route path="/movies"     element={<Movies />} />
              <Route path="/tv-series"  element={<TVSeries />} />
              <Route path="/bookmarks"  element={<Bookmarks />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </MoviesProvider>
  );
}

export default App;

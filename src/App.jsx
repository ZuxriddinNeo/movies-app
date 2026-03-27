
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MoviesProvider } from './context/MoviesContext';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Login from './pages/Login/Login'
import TVSeries from './pages/TVSeries/TVSeries';
import Bookmarks from './pages//BookMarks/BookMarks';
import styles from './App.module.scss';
import Sign from './pages/Sign/Sign'

function App() {
  return (
    <MoviesProvider>
      
     <div className={styles.app}>
       {location.pathname !== '/login' && location.pathname !== '/Sign' && <Sidebar />}
      

          
          
          <main className={styles.main}>
            <Routes>
              <Route path="/"           element={<Home />} />
              <Route path="/movies"     element={<Movies />} />
              <Route path="/tv-series"  element={<TVSeries />} />
              <Route path="/bookmarks"  element={<Bookmarks />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Sign" element={<Sign />} />
            </Routes>
          </main>
        </div>

    </MoviesProvider>
  );
}

export default App;

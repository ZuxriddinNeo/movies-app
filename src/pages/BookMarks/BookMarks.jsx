
import { useState } from 'react';
import { useMovies } from '../../context/MoviesContext';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Bookmarks.module.scss';

export default function Bookmarks() {
  const { movies } = useMovies();
  const [query, setQuery] = useState('');

  const bookmarkedMovies  = movies.filter(
    (m) => m.isBookmarked && m.category === 'Movie' &&
           m.title.toLowerCase().includes(query.toLowerCase())
  );
  const bookmarkedSeries  = movies.filter(
    (m) => m.isBookmarked && m.category === 'TV Series' &&
           m.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <SearchBar
        placeholder="Search for bookmarked shows"
        value={query}
        onChange={setQuery}
      />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Bookmarked Movies</h2>
        {bookmarkedMovies.length === 0 ? (
          <p className={styles.empty}>No bookmarked movies yet.</p>
        ) : (
          <div className={styles.grid}>
            {bookmarkedMovies.map((m) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </div>
        )}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Bookmarked TV Series</h2>
        {bookmarkedSeries.length === 0 ? (
          <p className={styles.empty}>No bookmarked TV series yet.</p>
        ) : (
          <div className={styles.grid}>
            {bookmarkedSeries.map((m) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

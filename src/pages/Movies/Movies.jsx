
import { useState } from 'react';
import { useMovies } from '../../context/MoviesContext';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Movies.module.scss';

export default function Movies() {
  const { movies } = useMovies();
  const [query, setQuery] = useState('');

  const allMovies = movies.filter((m) => m.category === 'Movie');
  const filtered = allMovies.filter((m) =>
    m.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <SearchBar
        placeholder="Search for movies"
        value={query}
        onChange={setQuery}
      />

      {query ? (
        <section>
          <h2 className={styles.sectionTitle}>
            Found {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &lsquo;{query}&rsquo;
          </h2>
        </section>
      ) : (
        <h2 className={styles.sectionTitle}>Movies</h2>
      )}

      {filtered.length === 0 ? (
        <p className={styles.empty}>No movies found.</p>
      ) : (
        <div className={styles.grid}>
          {filtered.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      )}
    </div>
  );
}

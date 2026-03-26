
import { useState } from 'react';
import { useMovies } from '../../context/MoviesContext';
import SearchBar from '../../components/SearchBar/SearchBar';
import TrendingCard from '../../components/TrendingCard/TrendingCard';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Home.module.scss';

export default function Home() {
  const { movies } = useMovies();
  const [query, setQuery] = useState('');

  const trending     = movies.filter((m) => m.isTrending);
  const recommended  = movies.filter((m) => !m.isTrending);
  const searchResult = movies.filter((m) =>
    m.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <SearchBar
        placeholder="Search for movies or TV series"
        value={query}
        onChange={setQuery}
      />

      {query ? (
        <section>
          <h2 className={styles.sectionTitle}>
            Found {searchResult.length} result{searchResult.length !== 1 ? 's' : ''} for &lsquo;{query}&rsquo;
          </h2>
          {searchResult.length === 0 ? (
            <p className={styles.empty}>No matches found.</p>
          ) : (
            <div className={styles.grid}>
              {searchResult.map((m) => (
                <MovieCard key={m.id} movie={m} />
              ))}
            </div>
          )}
        </section>
      ) : (
        <>
          <section className={styles.trendingSection}>
            <h2 className={styles.sectionTitle}>Trending</h2>
            <div className={styles.trendingList}>
              {trending.map((m) => (
                <TrendingCard key={m.id} movie={m} />
              ))}
            </div>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Recommended for you</h2>
            <div className={styles.grid}>
              {recommended.map((m) => (
                <MovieCard key={m.id} movie={m} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}


import { useState } from 'react';
import { BookmarkIcon, PlayIcon, FilmCatIcon, TVCatIcon } from '../Icon/icons';
import { useMovies } from '../../context/MoviesContext';
import styles from './MovieCard.module.scss';

export default function MovieCard({ movie }) {
  const { toggleBookmark } = useMovies();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.thumbnail}>
        <img src={movie.thumbnail} alt={movie.title} />

        {hovered && (
          <div className={styles.overlay}>
            <button className={styles.playBtn}>
              <PlayIcon />
              <span>Play</span>
            </button>
          </div>
        )}

        <button
          className={styles.bookmarkBtn}
          onClick={() => toggleBookmark(movie.id)}
          title={movie.isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          <BookmarkIcon filled={movie.isBookmarked} />
        </button>
      </div>

      <div className={styles.info}>
        <div className={styles.meta}>
          <span>{movie.year}</span>
          <span className={styles.dot}>&bull;</span>
          <span className={styles.catIcon}>
            {movie.category === 'Movie' ? <FilmCatIcon /> : <TVCatIcon />}
          </span>
          <span>{movie.category}</span>
          <span className={styles.dot}>&bull;</span>
          <span>{movie.rating}</span>
        </div>
        <h3 className={styles.title}>{movie.title}</h3>
      </div>
    </div>
  );
}

import { useState } from "react";
import {
  BookmarkIcon,
  PlayIcon,
  FilmCatIcon,
  TVCatIcon,
} from "../../components/Icon/icons";
import { useMovies } from "../../context/MoviesContext";
import styles from "./TrendingCard.module.scss";

export default function TrendingCard({ movie }) {
  const { toggleBookmark } = useMovies();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={movie.thumbnailLarge || movie.thumbnail}
        alt={movie.title}
        className={styles.image}
      />

      <div className={styles.gradient} />

      {hovered && (
        <div className={styles.overlay}>
          <button className={styles.playBtn}>
            <PlayIcon />
            <span>Play</span>
          </button>
        </div>
      )}

      <button
        className={`${styles.bookmarkBtn} ${
          movie.isBookmarked ? styles.active : ""
        }`}
        onClick={() => toggleBookmark(movie.id)}
        title={movie.isBookmarked ? "Remove bookmark" : "Add bookmark"}
      >
        <BookmarkIcon filled={movie.isBookmarked} />
      </button>

      <div className={styles.info}>
        <div className={styles.meta}>
          <span>{movie.year}</span>
          <span className={styles.dot}>&bull;</span>
          <span className={styles.catIcon}>
            {movie.category === "Movie" ? <FilmCatIcon /> : <TVCatIcon />}
          </span>
          <span>{movie.category}</span>
          <span className={styles.dot}>&bull;</span>
          <span>{movie.rating}</span>
        </div>
        <h2 className={styles.title}>{movie.title}</h2>
      </div>
    </div>
  );
}

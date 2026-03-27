import { createContext, useContext, useState } from "react";
import moviesData from "../data/movies";

const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState(moviesData);

  const toggleBookmark = (id) => {
    setMovies((movies) =>
      movies.map((m) =>
        m.id === id
          ? { ...m, isBookmarked: !m.isBookmarked }
          : m
      )
    );
  };

  return (
    <MoviesContext.Provider value={{ movies, toggleBookmark }}>
      {children}
    </MoviesContext.Provider>
  );
}

export const useMovies = () => useContext(MoviesContext);
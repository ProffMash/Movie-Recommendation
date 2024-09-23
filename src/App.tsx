import React, { useEffect, useState } from 'react';
import { fetchPopularMovies, searchMovies } from './services/tmdb';
import MovieList from './components/MovieList';
import MovieFilter from './components/MovieFilter';

const App: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);

  // Fetch popular movies on component mount
  useEffect(() => {
    const loadMovies = async () => {
      const movieData = await fetchPopularMovies();
      setMovies(movieData);
      setFilteredMovies(movieData);
    };
    loadMovies();
  }, []);

  // Handle movie search
  const handleSearch = async (query: string) => {
    const searchResults = await searchMovies(query);
    setFilteredMovies(searchResults);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Movie Recommendation System</h1>
      <MovieFilter onSearch={handleSearch} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import MovieFilter from './components/MovieFilter';
import Loader from './components/Loader';
import { fetchMovies } from './services/tmdb';

const App: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [filter, setFilter] = useState('popular');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchMovies(filter, page, searchTerm);
      setMovies(data.results);
      setTotalPages(data.total_pages);
      setLoading(false);
    };
    fetchData();
  }, [filter, page, searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1);  // Reset to page 1 when starting a new search
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <h1 className="text-center text-4xl font-bold py-6">Movie App</h1>
      
      {/* Search Bar */}
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="p-2 rounded-lg text-black"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      <MovieFilter setFilter={setFilter} />
      {loading ? <Loader /> : <MovieList movies={movies} />}
      
      {/* Pagination */}
      <div className="flex justify-center my-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 mx-2 rounded-md"
          disabled={page <= 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 mx-2 rounded-md"
          disabled={page >= totalPages}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;


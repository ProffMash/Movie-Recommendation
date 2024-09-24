import React, { useState } from 'react';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const getImageUrl = (path: string) => `https://image.tmdb.org/t/p/w500${path}`;

  return (
    <div className="p-5">
      {movies.length === 0 ? (
        <p className="text-center text-gray-400">No movies found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-900 rounded-lg shadow-lg p-3 hover:scale-105 hover:shadow-2xl transition transform duration-300 cursor-pointer"
              onClick={() => setSelectedMovie(movie)}
            >
              <img
                src={getImageUrl(movie.poster_path)}
                alt={movie.title}
                className="rounded-t-lg object-cover h-60 w-full transition duration-300 hover:opacity-80"
              />
              <div className="p-2">
                <h3 className="text-lg text-white font-semibold">{movie.title}</h3>
                <p className="text-gray-400">{movie.release_date}</p>
                <p className="text-gray-400">{movie.overview.slice(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for displaying selected movie details */}
      {selectedMovie && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-800 rounded-lg shadow-lg max-w-lg p-5 relative animate-fade-in">
            <button
              className="absolute top-2 right-2 text-white text-2xl hover:text-gray-400 transition duration-200"
              onClick={() => setSelectedMovie(null)}
            >
              &times;
            </button>
            <img
              src={getImageUrl(selectedMovie.poster_path)}
              alt={selectedMovie.title}
              className="rounded-lg object-cover w-full"
            />
            <div className="mt-4">
              <h2 className="text-2xl text-white font-bold">{selectedMovie.title}</h2>
              <p className="text-gray-400 mt-2">{selectedMovie.overview}</p>
              <p className="text-gray-400 mt-2">Release Date: {selectedMovie.release_date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;

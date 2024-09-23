// import React from 'react';

// type Movie = {
//   id: number;
//   title: string;
//   poster_path: string;
//   release_date: string;
//   vote_average: number;
// };

// interface MovieListProps {
//   movies: Movie[];
// }

// const MovieList: React.FC<MovieListProps> = ({ movies }) => {
//   return (
//     <div className="grid grid-cols-4 gap-4">
//       {movies.map((movie) => (
//         <div key={movie.id} className="p-4 border rounded shadow">
//           <img
//             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             alt={movie.title}
//             className="w-full"
//           />
//           <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
//           <p>Release Date: {movie.release_date}</p>
//           <p>Rating: {movie.vote_average}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieList;





import React from 'react';
import { fetchWatchProviders } from '../services/tmdb';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const handleDownloadClick = async (movieId: number) => {
    const providers = await fetchWatchProviders(movieId);

    // Check if the movie has watch providers
    if (providers.US?.link) {
      window.open(providers.US.link, '_blank');  // Opens the watch provider in a new tab
    } else {
      alert("No download links available for this movie.");
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="p-4 border rounded shadow">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full"
          />
          <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <button
            className="mt-2 p-2 bg-blue-500 text-white rounded"
            onClick={() => handleDownloadClick(movie.id)}
          >
            Download
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

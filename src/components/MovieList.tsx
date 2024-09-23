// // import React from 'react';

// // type Movie = {
// //   id: number;
// //   title: string;
// //   poster_path: string;
// //   release_date: string;
// //   vote_average: number;
// // };

// // interface MovieListProps {
// //   movies: Movie[];
// // }

// // const MovieList: React.FC<MovieListProps> = ({ movies }) => {
// //   return (
// //     <div className="grid grid-cols-4 gap-4">
// //       {movies.map((movie) => (
// //         <div key={movie.id} className="p-4 border rounded shadow">
// //           <img
// //             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
// //             alt={movie.title}
// //             className="w-full"
// //           />
// //           <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
// //           <p>Release Date: {movie.release_date}</p>
// //           <p>Rating: {movie.vote_average}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default MovieList;





// // import React from 'react';
// // import { fetchWatchProviders } from '../services/tmdb';

// // type Movie = {
// //   id: number;
// //   title: string;
// //   poster_path: string;
// //   release_date: string;
// //   vote_average: number;
// // };

// // interface MovieListProps {
// //   movies: Movie[];
// // }

// // const MovieList: React.FC<MovieListProps> = ({ movies }) => {
// //   const handleDownloadClick = async (movieId: number) => {
// //     const providers = await fetchWatchProviders(movieId);

// //     // Check if the movie has watch providers
// //     if (providers.US?.link) {
// //       window.open(providers.US.link, '_blank');  // Opens the watch provider in a new tab
// //     } else {
// //       alert("No download links available for this movie.");
// //     }
// //   };

// //   return (
// //     <div className="grid grid-cols-4 gap-4">
// //       {movies.map((movie) => (
// //         <div key={movie.id} className="p-4 border rounded shadow">
// //           <img
// //             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
// //             alt={movie.title}
// //             className="w-full"
// //           />
// //           <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
// //           <p>Release Date: {movie.release_date}</p>
// //           <p>Rating: {movie.vote_average}</p>
// //           <button
// //             className="mt-2 p-2 bg-blue-500 text-white rounded"
// //             onClick={() => handleDownloadClick(movie.id)}
// //           >
// //             Download
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default MovieList;








// import React from 'react';

// type Movie = {
//   id: number;
//   title: string;
//   poster_path: string;
//   release_date: string;
//   vote_average: number;
//   genre_ids: number[];
// };

// interface MovieListProps {
//   movies: Movie[];
//   onRecommend?: (movie: Movie) => void;
// }

// const MovieList: React.FC<MovieListProps> = ({ movies, onRecommend }) => {
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

//           {onRecommend && (
//             <button
//               className="mt-2 p-2 bg-blue-500 text-white rounded"
//               onClick={() => onRecommend(movie)}
//             >
//               Recommend
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieList;




// import React, { useState } from 'react';
// import { getImageUrl } from '../services/tmdb';
// import MovieModal from './MovieModal';

// interface Movie {
//   id: number;
//   title: string;
//   poster_path: string;
//   overview: string;
//   release_date: string;
// }

// interface Props {
//   movies: Movie[];
// }

// const MovieList: React.FC<Props> = ({ movies }) => {
//   const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

//   return (
//     <>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
//         {movies.map((movie) => (
//           <div
//             key={movie.id}
//             className="bg-gray-900 rounded-lg shadow-lg p-3 hover:scale-105 transition transform duration-300 cursor-pointer"
//             onClick={() => setSelectedMovie(movie)}
//           >
//             <img src={getImageUrl(movie.poster_path)} alt={movie.title} className="rounded-t-lg object-cover" />
//             <div className="p-2">
//               <h3 className="text-lg text-white font-semibold">{movie.title}</h3>
//               <p className="text-gray-400">{movie.overview.slice(0, 100)}...</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       {selectedMovie && <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
//     </>
//   );
// };

// export default MovieList;





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
              className="bg-gray-900 rounded-lg shadow-lg p-3 hover:scale-105 transition transform duration-300 cursor-pointer"
              onClick={() => setSelectedMovie(movie)}
            >
              <img
                src={getImageUrl(movie.poster_path)}
                alt={movie.title}
                className="rounded-t-lg object-cover h-60 w-full"
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
          <div className="bg-gray-800 rounded-lg shadow-lg max-w-lg p-5 relative">
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-400"
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

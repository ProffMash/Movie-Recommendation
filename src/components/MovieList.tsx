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




import React from 'react';
import { getImageUrl } from '../services/tmdb';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

interface Props {
  movies: Movie[];
}

const MovieList: React.FC<Props> = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-gray-900 rounded-lg shadow-lg p-3 hover:scale-105 transition transform duration-300">
          <img src={getImageUrl(movie.poster_path)} alt={movie.title} className="rounded-t-lg object-cover" />
          <div className="p-2">
            <h3 className="text-lg text-white font-semibold">{movie.title}</h3>
            <p className="text-gray-400">{movie.overview.slice(0, 100)}...</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

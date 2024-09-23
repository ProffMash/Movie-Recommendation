// // // // import React, { useEffect, useState } from 'react';
// // // // import { fetchPopularMovies, searchMovies } from './services/tmdb';
// // // // import MovieList from './components/MovieList';
// // // // import MovieFilter from './components/MovieFilter';

// // // // const App: React.FC = () => {
// // // //   const [movies, setMovies] = useState<any[]>([]);
// // // //   const [filteredMovies, setFilteredMovies] = useState<any[]>([]);

// // // //   // Fetch popular movies on component mount
// // // //   useEffect(() => {
// // // //     const loadMovies = async () => {
// // // //       const movieData = await fetchPopularMovies();
// // // //       setMovies(movieData);
// // // //       setFilteredMovies(movieData);
// // // //     };
// // // //     loadMovies();
// // // //   }, []);

// // // //   // Handle movie search
// // // //   const handleSearch = async (query: string) => {
// // // //     const searchResults = await searchMovies(query);
// // // //     setFilteredMovies(searchResults);
// // // //   };

// // // //   return (
// // // //     <div className="container mx-auto p-4">
// // // //       <h1 className="text-3xl font-bold mb-4">Movie Recommendation System</h1>
// // // //       <MovieFilter onSearch={handleSearch} />
// // // //       <MovieList movies={filteredMovies} />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default App;




// // // import React, { useEffect, useState } from 'react';
// // // import { fetchPopularMovies, fetchMovieRecommendations } from './services/tmdb';
// // // import MovieList from './components/MovieList';

// // // const App: React.FC = () => {
// // //   const [movies, setMovies] = useState<any[]>([]);
// // //   const [contentBasedRecommendations, setContentBasedRecommendations] = useState<any[]>([]);
// // //   const [tmdbRecommendations, setTmdbRecommendations] = useState<any[]>([]);

// // //   useEffect(() => {
// // //     const loadMovies = async () => {
// // //       const movieData = await fetchPopularMovies();
// // //       setMovies(movieData);
// // //     };
// // //     loadMovies();
// // //   }, []);

// // //   // Handle recommendation for both content-based and TMDb recommendations
// // //   const handleRecommend = async (selectedMovie: any) => {
// // //     // Content-based recommendations
// // //     const contentRecommendations = getRecommendations(selectedMovie, movies);
// // //     setContentBasedRecommendations(contentRecommendations);

// // //     // TMDb recommendations
// // //     const tmdbRecs = await fetchMovieRecommendations(selectedMovie.id);
// // //     setTmdbRecommendations(tmdbRecs);
// // //   };

// // //   return (
// // //     <div className="container mx-auto p-4">
// // //       <h1 className="text-3xl font-bold mb-4">Movie Recommendation System</h1>

// // //       <h2 className="text-xl font-bold mb-4">Popular Movies</h2>
// // //       <MovieList movies={movies} onRecommend={handleRecommend} />

// // //       {contentBasedRecommendations.length > 0 && (
// // //         <>
// // //           <h2 className="text-xl font-bold mb-4 mt-8">Content-Based Recommendations</h2>
// // //           <MovieList movies={contentBasedRecommendations} />
// // //         </>
// // //       )}

// // //       {tmdbRecommendations.length > 0 && (
// // //         <>
// // //           <h2 className="text-xl font-bold mb-4 mt-8">TMDb Recommendations</h2>
// // //           <MovieList movies={tmdbRecommendations} />
// // //         </>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default App;







// // import React, { useEffect, useState } from 'react';
// // import { fetchPopularMovies, fetchMovieRecommendations } from './services/tmdb';
// // import MovieList from './components/MovieList';

// // const App: React.FC = () => {
// //   const [movies, setMovies] = useState<any[]>([]);
// //   const [contentBasedRecommendations, setContentBasedRecommendations] = useState<any[]>([]);
// //   const [tmdbRecommendations, setTmdbRecommendations] = useState<any[]>([]);

// //   useEffect(() => {
// //     const loadMovies = async () => {
// //       const movieData = await fetchPopularMovies();
// //       setMovies(movieData);
// //     };
// //     loadMovies();
// //   }, []);

// //   // This is the handleRecommend function that triggers both recommendation methods
// //   const handleRecommend = async (selectedMovie: any) => {
// //     // Content-based recommendations
// //     const contentRecommendations = getRecommendations(selectedMovie, movies);
// //     setContentBasedRecommendations(contentRecommendations);

// //     // TMDb recommendations
// //     const tmdbRecs = await fetchMovieRecommendations(selectedMovie.id);
// //     setTmdbRecommendations(tmdbRecs);
// //   };

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-3xl font-bold mb-4">Movie Recommendation System</h1>

// //       <h2 className="text-xl font-bold mb-4">Popular Movies</h2>
// //       <MovieList movies={movies} onRecommend={handleRecommend} />

// //       {contentBasedRecommendations.length > 0 && (
// //         <>
// //           <h2 className="text-xl font-bold mb-4 mt-8">Content-Based Recommendations</h2>
// //           <MovieList movies={contentBasedRecommendations} />
// //         </>
// //       )}

// //       {tmdbRecommendations.length > 0 && (
// //         <>
// //           <h2 className="text-xl font-bold mb-4 mt-8">TMDb Recommendations</h2>
// //           <MovieList movies={tmdbRecommendations} />
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // // Example similarity calculation for content-based filtering (genre and rating based)
// // const getRecommendations = (selectedMovie: any, allMovies: any[]) => {
// //   return allMovies
// //     .filter((movie) => movie.id !== selectedMovie.id)  // Exclude the selected movie
// //     .sort((a, b) => {
// //       const genreSimilarityA = calculateGenreSimilarity(selectedMovie, a);
// //       const genreSimilarityB = calculateGenreSimilarity(selectedMovie, b);
// //       const ratingDifferenceA = Math.abs(selectedMovie.vote_average - a.vote_average);
// //       const ratingDifferenceB = Math.abs(selectedMovie.vote_average - b.vote_average);

// //       return genreSimilarityB - genreSimilarityA || ratingDifferenceA - ratingDifferenceB;
// //     })
// //     .slice(0, 5);  // Get top 5 recommendations
// // };

// // const calculateGenreSimilarity = (movie1: any, movie2: any) => {
// //   const movie1Genres = new Set(movie1.genre_ids);
// //   const movie2Genres = new Set(movie2.genre_ids);

// //   const intersection = new Set([...movie1Genres].filter((g) => movie2Genres.has(g)));
// //   const union = new Set([...movie1Genres, ...movie2Genres]);

// //   return intersection.size / union.size;
// // };

// // export default App;







// import React, { useEffect, useState } from 'react';
// import { fetchPopularMovies, fetchMovieRecommendations, searchMovies } from './services/tmdb';
// import MovieList from './components/MovieList';

// const App: React.FC = () => {
//   const [movies, setMovies] = useState<any[]>([]);
//   const [contentBasedRecommendations, setContentBasedRecommendations] = useState<any[]>([]);
//   const [tmdbRecommendations, setTmdbRecommendations] = useState<any[]>([]);
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [query, setQuery] = useState<string>('');  // State for search query

//   useEffect(() => {
//     const loadMovies = async () => {
//       const movieData = await fetchPopularMovies();
//       setMovies(movieData);
//     };
//     loadMovies();
//   }, []);

//   // Handle recommendation for both content-based and TMDb recommendations
//   const handleRecommend = async (selectedMovie: any) => {
//     // Content-based recommendations
//     const contentRecommendations = getRecommendations(selectedMovie, movies);
//     setContentBasedRecommendations(contentRecommendations);

//     // TMDb recommendations
//     const tmdbRecs = await fetchMovieRecommendations(selectedMovie.id);
//     setTmdbRecommendations(tmdbRecs);
//   };

//   // Handle search query input
//   const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(event.target.value);

//     if (event.target.value.trim().length > 0) {
//       const results = await searchMovies(event.target.value);
//       setSearchResults(results);
//     } else {
//       setSearchResults([]);  // Clear search results when query is empty
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Movie Recommendation System</h1>

//       {/* Search Bar */}
//       <div className="mb-6">
//         <input
//           type="text"
//           value={query}
//           onChange={handleSearch}
//           placeholder="Search for movies..."
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//       </div>

//       {/* Display Search Results */}
//       {searchResults.length > 0 ? (
//         <>
//           <h2 className="text-xl font-bold mb-4">Search Results</h2>
//           <MovieList movies={searchResults} onRecommend={handleRecommend} />
//         </>
//       ) : (
//         <>
//           <h2 className="text-xl font-bold mb-4">Popular Movies</h2>
//           <MovieList movies={movies} onRecommend={handleRecommend} />
//         </>
//       )}

//       {/* Content-Based Recommendations */}
//       {contentBasedRecommendations.length > 0 && (
//         <>
//           <h2 className="text-xl font-bold mb-4 mt-8">Content-Based Recommendations</h2>
//           <MovieList movies={contentBasedRecommendations} />
//         </>
//       )}

//       {/* TMDb Recommendations */}
//       {tmdbRecommendations.length > 0 && (
//         <>
//           <h2 className="text-xl font-bold mb-4 mt-8">TMDb Recommendations</h2>
//           <MovieList movies={tmdbRecommendations} />
//         </>
//       )}
//     </div>
//   );
// };

// // Example similarity calculation for content-based filtering (genre and rating based)
// const getRecommendations = (selectedMovie: any, allMovies: any[]) => {
//   return allMovies
//     .filter((movie) => movie.id !== selectedMovie.id)  // Exclude the selected movie
//     .sort((a, b) => {
//       const genreSimilarityA = calculateGenreSimilarity(selectedMovie, a);
//       const genreSimilarityB = calculateGenreSimilarity(selectedMovie, b);
//       const ratingDifferenceA = Math.abs(selectedMovie.vote_average - a.vote_average);
//       const ratingDifferenceB = Math.abs(selectedMovie.vote_average - b.vote_average);

//       return genreSimilarityB - genreSimilarityA || ratingDifferenceA - ratingDifferenceB;
//     })
//     .slice(0, 5);  // Get top 5 recommendations
// };

// const calculateGenreSimilarity = (movie1: any, movie2: any) => {
//   const movie1Genres = new Set(movie1.genre_ids);
//   const movie2Genres = new Set(movie2.genre_ids);

//   const intersection = new Set([...movie1Genres].filter((g) => movie2Genres.has(g)));
//   const union = new Set([...movie1Genres, ...movie2Genres]);

//   return intersection.size / union.size;
// };

// export default App;





import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import MovieFilter from './components/MovieFilter';
import { fetchMovies } from './services/tmdb';

const App: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [filter, setFilter] = useState('popular');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies(filter);
      setMovies(data);
    };
    fetchData();
  }, [filter]);

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <h1 className="text-center text-4xl font-bold py-6">Movie App</h1>
      <MovieFilter setFilter={setFilter} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;

// import axios from 'axios';

// const API_KEY = 'your_api_key';  // Replace with your API key
// const API_TOKEN = 'your_api_read_access_token';  // Replace with your API read access token

// const BASE_URL = 'https://api.themoviedb.org/3';

// // Axios configuration with Authorization headers
// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Authorization: `Bearer ${API_TOKEN}`
//   }
// });

// // Fetch popular movies
// export const fetchPopularMovies = async () => {
//   const response = await axiosInstance.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
//   return response.data.results;
// };

// // Search movies by query
// export const searchMovies = async (query: string) => {
//   const response = await axiosInstance.get(`/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`);
//   return response.data.results;
// };

// // Fetch details of a specific movie by ID
// export const fetchMovieDetails = async (movieId: number) => {
//   const response = await axiosInstance.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
//   return response.data;
// };







import axios from 'axios';

const API_KEY = '615ebd7218a27e6334701b697ebf376e';  // Your API key
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTVlYmQ3MjE4YTI3ZTYzMzQ3MDFiNjk3ZWJmMzc2ZSIsIm5iZiI6MTcyNzA3NzE1NC4zMjk5MzcsInN1YiI6IjY2ZjExODRjN2ZmMmJmNTdjZDI2OTgxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0D1x7GSrDDTyd3C-bE90s7Hkq8ZGfCYqgG1qQ8ZnCpc';  // Your API read access token

const BASE_URL = 'https://api.themoviedb.org/3';

// Axios configuration with Authorization headers
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  }
});

// Fetch popular movies
export const fetchPopularMovies = async () => {
  const response = await axiosInstance.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data.results;
};

// Search movies by query
export const searchMovies = async (query: string) => {
  const response = await axiosInstance.get(`/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`);
  return response.data.results;
};

// Fetch details of a specific movie by ID
export const fetchMovieDetails = async (movieId: number) => {
  const response = await axiosInstance.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  return response.data;
};


//
// Fetch movie watch providers by movie ID
export const fetchWatchProviders = async (movieId: number) => {
    const response = await axiosInstance.get(`/movie/${movieId}/watch/providers?api_key=${API_KEY}`);
    return response.data.results;
  };
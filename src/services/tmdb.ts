import axios from 'axios';

const API_KEY = '615ebd7218a27e6334701b697ebf376e';
const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// export const fetchMovies = async (filter: string) => {
//   const response = await axios.get(`${API_BASE_URL}/movie/${filter}?api_key=${API_KEY}`);
//   return response.data.results;
// };

// export const fetchMovies = async (filter: string, page: number = 1) => {
//   const response = await axios.get(`${API_BASE_URL}/movie/${filter}?api_key=${API_KEY}&page=${page}`);
//   return response.data;
// };

export const fetchMovies = async (filter: string, page: number = 1, searchTerm: string = '') => {
  let url = `${API_BASE_URL}/movie/${filter}?api_key=${API_KEY}&page=${page}`;
  
  // If there's a search term, use the search endpoint instead
  if (searchTerm) {
    url = `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${page}`;
  }
  
  const response = await axios.get(url);
  return response.data;
};


export const getImageUrl = (path: string) => `${IMAGE_BASE_URL}${path}`;

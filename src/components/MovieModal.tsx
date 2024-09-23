import React from 'react';
import { getImageUrl } from '../services/tmdb';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

interface Props {
  movie: Movie | null;
  onClose: () => void;
}

const MovieModal: React.FC<Props> = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg max-w-md w-full">
        <button onClick={onClose} className="text-white text-xl float-right p-2">✖</button>
        <img src={getImageUrl(movie.poster_path)} alt={movie.title} className="object-cover w-full h-80" />
        <div className="p-4">
          <h2 className="text-2xl text-white">{movie.title}</h2>
          <p className="text-gray-400">{movie.release_date}</p>
          <p className="text-gray-300 mt-2">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;

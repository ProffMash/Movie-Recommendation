import React from 'react';

interface Props {
  setFilter: (filter: string) => void;
}

const MovieFilter: React.FC<Props> = ({ setFilter }) => {
  return (
    <div className="flex justify-center my-4 space-x-4">
      <button onClick={() => setFilter('popular')} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Popular
      </button>
      <button onClick={() => setFilter('top_rated')} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
        Top Rated
      </button>
      <button onClick={() => setFilter('upcoming')} className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700">
        Upcoming
      </button>
    </div>
  );
};

export default MovieFilter;

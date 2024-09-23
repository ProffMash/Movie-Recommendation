import React, { useState } from 'react';

interface MovieFilterProps {
  onSearch: (query: string) => void;
}

const MovieFilter: React.FC<MovieFilterProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center space-x-4 mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Movies..."
        className="p-2 border rounded w-full"
      />
      <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default MovieFilter;

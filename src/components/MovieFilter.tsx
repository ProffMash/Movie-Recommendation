// import React, { useState } from 'react';

// interface MovieFilterProps {
//   onSearch: (query: string) => void;
// }

// const MovieFilter: React.FC<MovieFilterProps> = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSearch = () => {
//     onSearch(query);
//   };

//   return (
//     <div className="flex items-center space-x-4 mb-4">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search Movies..."
//         className="p-2 border rounded w-full"
//       />
//       <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded">
//         Search
//       </button>
//     </div>
//   );
// };

// export default MovieFilter;
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

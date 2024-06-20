// /pages/search.js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      // Fetch search results based on the query
      fetch(`/api/search?q=${query}`)
        .then(response => response.json())
        .then(data => setResults(data.results))
        .catch(error => console.error('Error fetching search results:', error));
    }
  }, [query]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index} className="mb-2">
              {result}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchPage;

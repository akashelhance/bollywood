
// "use client"
// import { useState } from 'react';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;


async function fetchData() {
  const res = await fetch(`${apiUrl}/api/movie/box-office`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function BoxOfficeTableComponent() {

  const filteredMovies= await fetchData()



  // const [searchQuery, setSearchQuery] = useState('');

  // const filteredMovies = movies.filter((movie) =>
  //   movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0">L port :</h2>
        {/* <input
          type="text"
          className="w-full md:w-64 p-2 border border-gray-300 rounded-lg"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        /> */}
      </div>

      <div className="block md:hidden">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-300 rounded-lg bg-white">
            <div className="mb-2">
              <span className="font-bold">MOVIE NAME:</span> {movie.title}
            </div>
            <div className="mb-2">
              <span className="font-bold">BOX OFFICE COLLECTION:</span> {movie.box_office_collection}
            </div>
            <div className="mb-2">
              <span className="font-bold">1st DAY COLLECTION:</span> N/A {/* 1st day collection not available in the provided JSON */}
            </div>
            <div className="mb-2">
              <span className="font-bold">BUDGET:</span> {movie.movie_budget}
            </div>
            <div>
              <span className="font-bold">STATUS:</span>
              <span className={`ml-2 px-2 py-1 rounded-full text-white ${
                movie.verdict === 'Block' ? 'bg-green-800' :
                movie.verdict === 'Hit' ? 'bg-green-500' :
                movie.verdict === 'Flop' ? 'bg-red-500' :
                movie.verdict === 'Average' ? 'bg-yellow-500' : 'bg-gray-500'
              }`}>
                {movie.verdict}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full table-auto border border-gray-300 text-lg font-bold">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200 font-bold hover:bg-gray-300 cursor-pointer">
                MOVIE NAME
              </th>
              <th className="px-4 py-2 bg-gray-200 font-bold hover:bg-gray-300 cursor-pointer">
                BOX OFFICE COLLECTION
              </th>
              <th className="px-4 py-2 bg-gray-200 font-bold hover:bg-gray-300 cursor-pointer">
                1st DAY COLLECTION
              </th>
              <th className="px-4 py-2 bg-gray-200 font-bold hover:bg-gray-300 cursor-pointer">
                BUDGET
              </th>
              <th className="px-4 py-2 bg-gray-200 font-bold hover:bg-gray-300 cursor-pointer">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredMovies.map((movie, index) => (
              <tr key={index} className={`border border-gray-300 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                <td className="px-4 py-2 text-center">{movie.title}</td>
                <td className="px-4 py-2 text-center">{movie.box_office_collection}</td>
                <td className="px-4 py-2 text-center">N/A</td> {/* 1st day collection not available in the provided JSON */}
                <td className="px-4 py-2 text-center">{movie.movie_budget}</td>
                <td className="px-4 py-2 text-center">
                  <span className={`px-2 py-1 rounded-full text-white ${
                    movie.verdict === 'Block' ? 'bg-green-800' :
                    movie.verdict === 'Hit' ? 'bg-green-500' :
                    movie.verdict === 'Flop' ? 'bg-red-500' :
                    movie.verdict === 'Average' ? 'bg-yellow-500' : 'bg-gray-500'
                  }`}>
                    {movie.verdict}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div> 
  );
}
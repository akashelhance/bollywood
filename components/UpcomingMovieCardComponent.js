import Link from "next/link"
import Image from "next/image"



export default function UpcomingMovieCardComponent({ data }) {

  function truncateAtFullStopAfter(text, charLimit) {
    if (text.length <= charLimit) return text;

    const truncated = text.slice(0, charLimit);
    const fullStopMatch = text.slice(charLimit).match(/\.|\!|\?/); // Search for full stop, exclamation mark, or question mark

    if (fullStopMatch) {
      const fullStopIndex = truncated.length + fullStopMatch.index + 1;
      return text.slice(0, fullStopIndex);
    }

    // If no full stop is found after charLimit, return the truncated text up to charLimit
    return truncated;
  }

  // Truncate the plot at the next full stop after 375 characters
  const truncatePlot = (plot) => {
    return truncateAtFullStopAfter(plot, 375);
  };


  return <>

    <div className="container mx-auto pb-4">
      <div className="pt-4 pb-2 flex flex-wrap">
        {data.map((movie, index) => (
          <div key={index} className="w-full md:w-1/2 mb-4 px-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h1 className="text-2xl font-bold transition duration-500 ease-in-out hover:text-rose-500">
                  {movie.title}
                </h1>
                <p className="text-gray-900 transition duration-500 ease-in-out">
                  <span className="font-semibold text-rose-500">Language:</span> {movie.language}
                </p>
              </div>
              <div className="flex flex-wrap p-6">
                <div className="w-full md:w-1/3 pt-12 sm:pt-2">
                  <Image
                    src={movie.poster}
                    alt="Movie Image"
                    width={100}
                    height={100}
                    className="w-full h-auto object-cover transition duration-500 ease-in-out"
                  />
                </div>
                <div className="w-full md:w-2/3 pl-0 md:pl-6 mt-4 md:mt-0">
                  <h2 className="text-xl font-semibold mb-2 transition duration-500 ease-in-out text-rose-500 hover:text-rose-500">
                    Expected Release Date
                  </h2>
                  <p className="text-grey-900 mb-4 transition duration-500 ease-in-out hover:text-gray-800">
                    <span className="font-semibold">{movie.release_date}</span>
                  </p>
                  <h2 className="text-xl font-semibold mb-2 transition duration-500 ease-in-out text-rose-500 hover:text-rose-500">
                    Top Cast
                  </h2>
                  <p className="text-grey-900 mb-4 transition duration-500 ease-in-out hover:text-gray-800">
                    {movie.cast.length > 0 ? movie.cast.map((member, i) => (
                      <Link
                        key={i}
                        href={`/biography/${member.celebrity_slug}`}
                        className="text-blue-500 hover:underline transition duration-500 ease-in-out hover:text-blue-700 font-bold"
                      >
                        {member.name}
                      </Link>
                    )).reduce((prev, curr) => [prev, ', ', curr]) : <span className="italic">No cast information available</span>}
                  </p>
                  <h2 className="text-xl text-rose-500 font-semibold mb-2 transition duration-500 ease-in-out hover:text-rose-500">
                    Genres
                  </h2>
                  <p className="text-grey-900 mb-4 transition duration-500 ease-in-out hover:text-gray-800">
                    <span className="font-semibold">{movie.genres}</span>
                  </p>
                  <h2 className="text-xl text-rose-500 font-semibold mb-2 transition duration-500 ease-in-out hover:text-rose-500">
                    Available on
                  </h2>
                  <p className="text-grey-900 mb-4 transition duration-500 ease-in-out hover:text-gray-800">
                    <span className="font-semibold">{movie.available_on ? movie.available_on : "Information not available"}</span>
                  </p>
                </div>
                <p className="w-full text-grey-900 mt-4 md:mt-0 md:col-span-2 transition duration-500 ease-in-out hover:text-gray-800">
                  {truncatePlot(movie.plot)}
                </p>
                <div className="w-full md:col-span-2 mt-4">
                  <div className="flex flex-row space-x-4">
                    <h2 className="text-lg text-rose-500 font-semibold transition duration-500 ease-in-out hover:text-rose-500">
                      Similar To:
                    </h2>
                    {movie.similar_movies.map((similar, i) => (
                      <Link
                        key={i}
                        href="#"
                        className="text-blue-500 hover:underline transition duration-500 ease-in-out hover:text-blue-700 font-bold"
                      >
                        {similar.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-end mt-4 md:mt-0 md:col-span-2">
                  {movie.trailer_url ? (
                    <Link href={movie.trailer_url} target="_blank" rel="noopener noreferrer">
                      <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg rounded-b-lg font-bold py-2 px-4 rounded inline-flex items-center">
                        Watch Trailer
                      </button>
                    </Link>
                  ) : (
                    <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full mb-2 md:mr-2 w-1/2 cursor-not-allowed" disabled>
                      No Trailer Available
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
}